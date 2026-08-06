import React from 'react';
import { Kpi } from 'rtpm-design-system';

export function GoodDirection() {
  return (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      <Kpi
        label="Active users"
        value="1,204"
        trend="up"
        trendValue="86 vs last week"
        goodDirection="up-is-good"
        owner={{ name: 'Tomas Berg' }}
      />
      <Kpi
        label="Churned accounts"
        value="7"
        trend="up"
        trendValue="2 vs last week"
        goodDirection="down-is-good"
        owner={{ name: 'Ida Sørensen', org: 'Customer Success' }}
      />
      <Kpi
        label="Open incidents"
        value="12"
        trend="down"
        trendValue="3 vs last week"
        goodDirection="down-is-good"
        owner={{ name: 'Mara Lindqvist', org: 'Platform Reliability' }}
      />
      <Kpi
        label="Avg. resolution time"
        value="4.2h"
        trend="up"
        trendValue="0.6h vs last week"
        goodDirection="down-is-good"
        owner={{ name: 'Dev Patel', org: 'Support Ops' }}
      />
    </div>
  );
}

export function FlatAndUnset() {
  return (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      <Kpi
        label="SLA compliance"
        value="98.4%"
        trend="flat"
        trendValue="0.0 vs last week"
        owner={{ name: 'Ida Sørensen', org: 'Customer Success' }}
      />
      <Kpi label="Active users (no trend)" value="1,204" owner={{ name: 'Tomas Berg' }} />
    </div>
  );
}

/**
 * A trend passed without `goodDirection` renders neutral rather than
 * guessing a color — this is the defensive fallback the fix introduced.
 * (Also logs a dev-mode console.warn, not visible in a static screenshot.)
 */
export function MissingGoodDirection() {
  return (
    <Kpi
      label="Avg. resolution time"
      value="4.2h"
      trend="up"
      trendValue="0.6h vs last week"
      owner={{ name: 'Dev Patel', org: 'Support Ops' }}
    />
  );
}
