import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
type ButtonSize = 'md' | 'sm';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

/**
 * RTPM Button
 *
 * Variants:
 * - primary:   Gold action. RULE — at most ONE primary button visible per
 *              screen. Gold means "the one thing to do here." A second
 *              primary on the same screen breaks that meaning; use
 *              secondary or tertiary instead.
 * - secondary: Indigo. For actions that matter but aren't the single
 *              primary action on the screen.
 * - tertiary:  White / outlined. Default, low-emphasis action.
 * - ghost:     Text-only, indigo. Lowest emphasis (e.g. "Cancel", inline
 *              links inside a toolbar).
 *
 * This component cannot enforce "one primary per screen" — that's a layout
 * decision. Treat a second <Button variant="primary"> on the same screen
 * as a bug, not a style choice.
 */
export function Button({
  variant = 'tertiary',
  size = 'md',
  disabled,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: 'var(--color-action-primary-bg)',
      color: 'var(--color-action-primary-text)',
      border: '1px solid transparent',
    },
    secondary: {
      background: 'var(--color-action-secondary-bg)',
      color: 'var(--color-action-secondary-text)',
      border: '1px solid transparent',
    },
    tertiary: {
      background: 'var(--color-action-tertiary-bg)',
      color: 'var(--color-action-tertiary-text)',
      border: '1px solid var(--color-border-default)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-action-ghost-text)',
      border: '1px solid transparent',
    },
  };

  // Hover background per variant. Ghost hovers to a tint, others to their
  // dedicated -hover token.
  const hoverBg: Record<ButtonVariant, string> = {
    primary: 'var(--color-action-primary-bg-hover)',
    secondary: 'var(--color-action-secondary-bg-hover)',
    tertiary: 'var(--color-action-tertiary-bg-hover)',
    ghost: 'var(--color-action-ghost-bg-hover)',
  };

  const base: React.CSSProperties = {
    fontFamily: 'var(--font-ui)',
    fontSize:
      size === 'sm' ? 'var(--type-caption-size)' : 'var(--type-label-size)',
    fontWeight: 'var(--type-ui-title-weight)',
    height: size === 'sm' ? '32px' : 'var(--size-control-height)',
    padding: size === 'sm' ? '0 12px' : '0 var(--rtpm-space-4)',
    borderRadius: 'var(--radius-control)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--rtpm-space-2)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 120ms ease',
    ...variantStyles[variant],
  };

  if (disabled) {
    base.background = 'var(--color-action-disabled-bg)';
    base.color = 'var(--color-action-disabled-text)';
    base.border = '1px solid transparent';
  } else if (hovered) {
    base.background = hoverBg[variant];
  }

  return (
    <button
      disabled={disabled}
      onMouseEnter={(e) => {
        setHovered(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        onMouseLeave?.(e);
      }}
      style={{ ...base, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
