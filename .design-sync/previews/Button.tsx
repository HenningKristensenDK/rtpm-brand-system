import React from 'react';
import { Button } from 'rtpm-design-system';

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Add rule</Button>
      <Button variant="tertiary">Export</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button variant="secondary" size="md">
        Add rule
      </Button>
      <Button variant="secondary" size="sm">
        Add rule
      </Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>
        Save changes
      </Button>
      <Button variant="secondary" disabled>
        Add rule
      </Button>
      <Button variant="tertiary" disabled>
        Export
      </Button>
    </div>
  );
}
