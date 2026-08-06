import React from 'react';
import { StatusPill } from 'rtpm-design-system';

export function AllStatuses() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <StatusPill status="critical" label="Critical" />
      <StatusPill status="high" label="High" />
      <StatusPill status="medium" label="Medium" />
      <StatusPill status="low" label="Done" />
      <StatusPill status="none" label="Not started" />
    </div>
  );
}
