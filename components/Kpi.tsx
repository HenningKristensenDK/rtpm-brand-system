import React from 'react';

export interface KpiOwner {
  name: string;
  org?: string;
}

export type KpiTrendDirection = 'up' | 'down' | 'flat';

/**
 * Which direction counts as "good news" for this specific metric.
 * Open incidents falling is good ('down-is-good'). Active users rising
 * is good ('up-is-good'). This is what decides the trend color — not
 * the raw direction alone.
 */
export type KpiGoodDirection = 'up-is-good' | 'down-is-good';

export interface KpiProps {
  label: string;
  value: string;
  /**
   * Required, not optional. Per RTPM 0: "Every number has an owner. No
   * figure appears without the person and organisation accountable for
   * it. A KPI with no owner is decoration." This makes that rule
   * structural — you cannot render a <Kpi /> without one.
   */
  owner: KpiOwner;
  trend?: KpiTrendDirection;
  trendValue?: string;
  /**
   * Required whenever `trend` is passed. Without it there is no way to
   * know whether "up" or "down" is the good outcome for this metric —
   * guessing (e.g. always green-up/red-down) produces a KPI that
   * contradicts its own number, exactly the kind of unaccountable
   * figure this component exists to prevent.
   */
  goodDirection?: KpiGoodDirection;
}

export function Kpi({
  label,
  value,
  owner,
  trend,
  trendValue,
  goodDirection,
}: KpiProps) {
  if (trend && trend !== 'flat' && !goodDirection) {
    // Fail loudly in development rather than silently picking a color
    // that might contradict the metric's real meaning.
    console.warn(
      `Kpi "${label}": trend="${trend}" was passed without goodDirection. ` +
        `Trend color cannot be determined correctly — pass goodDirection ` +
        `("up-is-good" or "down-is-good") or omit trend.`
    );
  }

  const isGoodNews = (() => {
    if (!trend || trend === 'flat') return null;
    if (!goodDirection) return null; // unknown — render neutral, not a guess
    if (goodDirection === 'up-is-good') return trend === 'up';
    return trend === 'down'; // 'down-is-good'
  })();

  const trendColor =
    isGoodNews === null
      ? 'var(--color-text-muted)'
      : isGoodNews
      ? 'var(--color-status-low)'
      : 'var(--color-status-critical)';

  const trendGlyph = trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—';

  return (
    <div style={{ fontFamily: 'var(--font-ui)' }}>
      <div
        style={{
          fontSize: 'var(--type-eyebrow-size)',
          fontWeight: 'var(--type-eyebrow-weight)',
          letterSpacing: 'var(--type-eyebrow-tracking)',
          color: 'var(--color-text-secondary)',
          textTransform: 'uppercase',
          marginBottom: 'var(--rtpm-space-1)',
        }}
      >
        {label}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'var(--rtpm-space-2)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--type-subhead-size)',
            fontWeight: 'var(--type-subhead-weight)',
            lineHeight: 'var(--type-subhead-leading)',
            color: 'var(--color-text-primary)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {value}
        </span>

        {trend && (
          <span
            style={{
              fontSize: 'var(--type-caption-size)',
              color: trendColor,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            {trendGlyph} {trendValue}
          </span>
        )}
      </div>

      <div
        style={{
          fontSize: 'var(--type-caption-size)',
          color: 'var(--color-text-muted)',
          marginTop: 'var(--rtpm-space-1)',
        }}
      >
        {owner.name}
        {owner.org ? ` · ${owner.org}` : ''}
      </div>
    </div>
  );
}
