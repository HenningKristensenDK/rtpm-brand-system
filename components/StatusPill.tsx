import React from 'react';

export type StatusLevel = 'critical' | 'high' | 'medium' | 'low' | 'none';

export interface StatusPillProps {
  status: StatusLevel;
  label: string;
}

const STATUS_MAP: Record<StatusLevel, { bg: string; text: string }> = {
  critical: {
    bg: 'var(--color-status-critical-bg)',
    text: 'var(--color-status-critical-text)',
  },
  high: {
    bg: 'var(--color-status-high-bg)',
    text: 'var(--color-status-high-text)',
  },
  medium: {
    bg: 'var(--color-status-medium-bg)',
    text: 'var(--color-status-medium-text)',
  },
  low: {
    bg: 'var(--color-status-low-bg)',
    text: 'var(--color-status-low-text)',
  },
  none: {
    bg: 'var(--color-surface-disabled)',
    text: 'var(--color-text-muted)',
  },
};

/**
 * RTPM StatusPill
 *
 * Fixed meaning, never repurposed:
 *   critical = red, high = orange, medium = amber, low/done = green,
 *   none = neutral grey.
 *
 * Medium status renders in amber (--color-status-medium-*), which is
 * deliberately distinct from --color-action-primary-bg (gold), even
 * though both read as "yellow" at a glance. Two meanings cannot share
 * a hex — do not substitute one for the other.
 */
export function StatusPill({ status, label }: StatusPillProps) {
  const { bg, text } = STATUS_MAP[status];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: bg,
        color: text,
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--type-label-size)',
        fontWeight: 'var(--type-label-weight)',
        letterSpacing: 'var(--type-label-tracking)',
        borderRadius: 'var(--radius-pill)',
        padding: '2px var(--rtpm-space-3)',
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}
