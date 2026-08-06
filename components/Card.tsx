import React from 'react';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
  title?: string;
  selected?: boolean;
  inset?: boolean;
  children: React.ReactNode;
}

const PADDING_MAP: Record<CardPadding, string> = {
  none: '0',
  sm: 'var(--rtpm-space-3)',
  md: 'var(--rtpm-space-4)',
  lg: 'var(--rtpm-space-6)',
};

/**
 * RTPM Card
 *
 * The frame every module/content block inherits. "Calm at density" —
 * quiet neutrals, a single hairline border, no visual noise beyond what
 * the content itself needs.
 *
 * - Default: --color-surface-card (white), hairline border + shadow.
 * - inset:   --color-surface-inset, for content nested inside another
 *            Card (e.g. a sub-panel), with no shadow of its own.
 * - selected: --color-surface-selected + --color-border-selected, for a
 *            card representing "the thing currently open/focused" —
 *            drops the shadow since the tinted fill already reads as raised.
 *
 * `inset` and `selected` are mutually exclusive in practice; `selected`
 * wins if both are passed.
 */
export function Card({
  padding = 'md',
  title,
  selected = false,
  inset = false,
  children,
  style,
  ...rest
}: CardProps) {
  const background = selected
    ? 'var(--color-surface-selected)'
    : inset
    ? 'var(--color-surface-inset)'
    : 'var(--color-surface-card)';

  const border = selected
    ? '1px solid var(--color-border-selected)'
    : '1px solid var(--color-border-default)';

  return (
    <div
      style={{
        background,
        border,
        borderRadius: 'var(--radius-card)',
        boxShadow: selected ? 'none' : 'var(--rtpm-shadow-hairline)',
        padding: PADDING_MAP[padding],
        fontFamily: 'var(--font-ui)',
        ...style,
      }}
      {...rest}
    >
      {title && (
        <div
          style={{
            fontSize: 'var(--type-ui-title-size)',
            fontWeight: 'var(--type-ui-title-weight)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--rtpm-space-3)',
          }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
