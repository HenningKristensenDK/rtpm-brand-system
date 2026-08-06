import React from 'react';

export interface KpiOwner {
  name: string;
  org?: string;
}

export type KpiTrend = 'up' | 'down' | 'flat';

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
  trend?: KpiTrend;
  trendValue?: string;
}

/**
 * RTPM Kpi
 *
 * A single measured figure, always attributed. Value uses tabular
 * numerals so a stack of KPIs aligns visually even as digits change.
 */
export function Kpi({ label, value, owner, trend, trendValue }: KpiProps) {
  const trendColor =
    trend === 'up'
      ? 'var(--color-status-low)'
      : trend === 'down'
      ? 'var(--color-status-critical)'
      : 'var(--color-text-muted)';

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
