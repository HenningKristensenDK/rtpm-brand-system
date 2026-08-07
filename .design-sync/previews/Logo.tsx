import React from 'react';
import { Logo } from 'rtpm-design-system';

// Points at the real SVGs shipped alongside this bundle (assets/logos/),
// copied in at sync time to mirror how _vendor/react.js is referenced from
// this same depth. The component's real default ('/assets/logos') assumes
// the CONSUMING app hosts these files — see Logo.d.ts / this component's
// JSDoc, which the design agent reads before using this default as-is.
const PREVIEW_ASSETS_BASE = '../../../assets/logos';

export function Lockups() {
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
      <Logo lockup="A" colorway="navy" size={32} assetsBasePath={PREVIEW_ASSETS_BASE} />
      <Logo lockup="B" colorway="navy" size={48} assetsBasePath={PREVIEW_ASSETS_BASE} />
      <Logo lockup="C" colorway="navy" size={32} assetsBasePath={PREVIEW_ASSETS_BASE} />
      <Logo lockup="icon" colorway="navy" size={32} assetsBasePath={PREVIEW_ASSETS_BASE} />
    </div>
  );
}

export function Colorways() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ background: 'var(--color-surface-page)', padding: 12 }}>
        <Logo lockup="A" colorway="navy" size={28} assetsBasePath={PREVIEW_ASSETS_BASE} />
      </div>
      <div style={{ background: 'var(--color-surface-dark)', padding: 12 }}>
        <Logo lockup="A" colorway="white" size={28} assetsBasePath={PREVIEW_ASSETS_BASE} />
      </div>
      <div style={{ background: 'var(--color-surface-page)', padding: 12 }}>
        <Logo lockup="icon" colorway="black" size={28} assetsBasePath={PREVIEW_ASSETS_BASE} />
      </div>
    </div>
  );
}

/** Lockup B below the 40px floor silently falls back to Lockup A. */
export function MinSizeFallback() {
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginBottom: 4 }}>
          size=48 (above floor)
        </div>
        <Logo lockup="B" colorway="navy" size={48} assetsBasePath={PREVIEW_ASSETS_BASE} />
      </div>
      <div>
        <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginBottom: 4 }}>
          size=24 (falls back to A)
        </div>
        <Logo lockup="B" colorway="navy" size={24} assetsBasePath={PREVIEW_ASSETS_BASE} />
      </div>
    </div>
  );
}
