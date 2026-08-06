import React from 'react';

export type StepState = 'done' | 'current' | 'pending' | 'overdue';

export interface Step {
  id: string;
  label: string;
  state: StepState;
}

export interface StatusStepperProps {
  steps: Step[];
}

/**
 * RTPM StatusStepper
 *
 * Renders the four-stage workflow as a horizontal sequence of dots
 * connected by rules.
 *
 * "State before styling": where a record sits in its workflow must be
 * readable without relying on color alone. Each step's label is always
 * visible text, not just a colored dot — color supports the state, it
 * doesn't carry it by itself.
 */
export function StatusStepper({ steps }: StatusStepperProps) {
  const dotColor = (state: StepState): string => {
    switch (state) {
      case 'done':
        return 'var(--color-step-done)';
      case 'current':
        return 'var(--color-step-current)';
      case 'overdue':
        return 'var(--color-step-overdue)';
      case 'pending':
      default:
        return 'var(--color-step-pending)';
    }
  };

  const ringColor = (state: StepState): string => {
    if (state === 'current') return 'var(--color-step-current-ring)';
    if (state === 'overdue') return 'var(--color-step-overdue-ring)';
    return 'transparent';
  };

  const labelColor = (state: StepState): string =>
    state === 'pending'
      ? 'var(--color-text-muted)'
      : 'var(--color-text-secondary)';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        fontFamily: 'var(--font-ui)',
        width: '100%',
      }}
    >
      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--rtpm-space-1)',
              minWidth: '64px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: 'var(--radius-pill)',
                background: dotColor(step.state),
                boxShadow: `0 0 0 4px ${ringColor(step.state)}`,
              }}
              role="img"
              aria-label={`${step.label}: ${step.state}`}
            />
            <span
              style={{
                fontSize: 'var(--type-caption-size)',
                color: labelColor(step.state),
                whiteSpace: 'nowrap',
              }}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              style={{
                flex: 1,
                height: '2px',
                marginTop: '5px',
                background:
                  step.state === 'done'
                    ? 'var(--color-step-done)'
                    : 'var(--color-border-default)',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
