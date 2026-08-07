import React from 'react';

export type LogoLockup = 'A' | 'B' | 'C' | 'icon';
export type LogoColorway = 'navy' | 'white' | 'indigo' | 'black';

export interface LogoProps {
  lockup: LogoLockup;
  colorway?: LogoColorway;
  /** Icon height in px. Lockup B auto-falls-back to A below 40px. */
  size?: number;
  /**
   * True if this logo sits on top of a photograph. Doubles clear space
   * to 1x per the spec ("On a photograph, clear space doubles to 1x").
   */
  onPhotograph?: boolean;
  /**
   * Base path where the SVG files in assets/logos/ are served from.
   * Defaults to '/assets/logos' — adjust to match your app's static
   * asset routing.
   */
  assetsBasePath?: string;
}

// Lockups B and C only ship in navy/white per the file set — indigo and
// black primary/icon exist, but there is no rtpm-descriptor-indigo or
// rtpm-realtime-black. Requesting an unsupported combo falls back to navy.
const LOCKUP_B_C_COLORWAYS: LogoColorway[] = ['navy', 'white'];

function resolveFilename(
  lockup: LogoLockup,
  colorway: LogoColorway,
  size: number
): { filename: string; effectiveLockup: LogoLockup; warning?: string } {
  // Rule: Lockup B below 40px icon height falls back to Lockup A.
  if (lockup === 'B' && size < 40) {
    return {
      filename: `rtpm-primary-${colorway === 'indigo' || colorway === 'black' ? colorway : colorway}`,
      effectiveLockup: 'A',
      warning: `Logo: lockup="B" requested at size=${size}px, below the 40px floor. Falling back to lockup A. Never render B below 40px — the descriptor breaks its 10px type floor.`,
    };
  }

  const safeColorway: LogoColorway =
    (lockup === 'B' || lockup === 'C') &&
    !LOCKUP_B_C_COLORWAYS.includes(colorway)
      ? 'navy'
      : colorway;

  const warning =
    safeColorway !== colorway
      ? `Logo: colorway="${colorway}" is not available for lockup="${lockup}" (only navy/white ship for B and C). Falling back to navy.`
      : undefined;

  const fileMap: Record<Exclude<LogoLockup, 'B'>, string> = {
    A: `rtpm-primary-${safeColorway}`,
    C: `rtpm-realtime-${safeColorway}`,
    icon: `rtpm-icon-${safeColorway}`,
  };

  if (lockup === 'B') {
    return {
      filename: `rtpm-descriptor-${safeColorway}`,
      effectiveLockup: 'B',
      warning,
    };
  }

  return { filename: fileMap[lockup], effectiveLockup: lockup, warning };
}

/**
 * RTPM Logo
 *
 * Renders one of the three approved lockups (or the icon alone) from the
 * pre-built SVG files in assets/logos/ — each file already contains the
 * complete assembled mark, so this component never recomposes icon and
 * wordmark manually.
 *
 * Structural rules enforced here (not just documented):
 * - Lockup B requests below the 40px floor silently downgrade to Lockup A.
 * - Colorways not shipped for a given lockup (e.g. indigo Lockup B) fall
 *   back to navy rather than failing or fabricating a file.
 * - Clear space (0.5x icon height, 1x on a photograph) is applied as
 *   real padding around the mark, so nothing can be placed inside it by
 *   accident.
 *
 * This component does NOT enforce: one-logo-per-surface, or "never on a
 * face+hook visual" — those are page-composition rules a single
 * component can't see. Treat violations as a review-time check.
 */
export function Logo({
  lockup,
  colorway = 'navy',
  size = 24,
  onPhotograph = false,
  assetsBasePath = '/assets/logos',
}: LogoProps) {
  const { filename, warning } = resolveFilename(lockup, colorway, size);

  if (warning && process.env.NODE_ENV !== 'production') {
    console.warn(warning);
  }

  const clearSpace = (onPhotograph ? 1 : 0.5) * size;

  return (
    <span
      style={{
        display: 'inline-block',
        padding: `${clearSpace}px`,
        lineHeight: 0,
      }}
    >
      <img
        src={`${assetsBasePath}/${filename}.svg`}
        alt="RTPM"
        height={size}
        style={{ height: `${size}px`, width: 'auto', display: 'block' }}
      />
    </span>
  );
}
