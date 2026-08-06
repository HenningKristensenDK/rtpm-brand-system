import React from 'react';
import { Card, StatusPill } from 'rtpm-design-system';

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Card title="Open incidents">
        <StatusPill status="critical" label="Critical" />
      </Card>
      <Card title="Sub-panel" inset>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
          Nested content on the inset surface.
        </div>
      </Card>
      <Card title="Currently open" selected>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
          This record is the active selection.
        </div>
      </Card>
    </div>
  );
}

export function Padding() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Card padding="sm" title="sm">
        Compact
      </Card>
      <Card padding="md" title="md">
        Default
      </Card>
      <Card padding="lg" title="lg">
        Roomy
      </Card>
    </div>
  );
}
