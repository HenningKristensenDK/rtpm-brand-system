import React from 'react';
import { StatusStepper } from 'rtpm-design-system';

export function InProgress() {
  return (
    <StatusStepper
      steps={[
        { id: 'draft', label: 'Draft', state: 'done' },
        { id: 'review', label: 'Review', state: 'current' },
        { id: 'approved', label: 'Approved', state: 'pending' },
        { id: 'published', label: 'Published', state: 'pending' },
      ]}
    />
  );
}

export function Overdue() {
  return (
    <StatusStepper
      steps={[
        { id: 'draft', label: 'Draft', state: 'done' },
        { id: 'review', label: 'Review', state: 'overdue' },
        { id: 'approved', label: 'Approved', state: 'pending' },
        { id: 'published', label: 'Published', state: 'pending' },
      ]}
    />
  );
}
