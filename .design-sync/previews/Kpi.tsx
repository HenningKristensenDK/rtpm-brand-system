import React from 'react';
import { Kpi } from 'rtpm-design-system';

export function TrendStates() {
  return (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      <Kpi
        label="Open incidents"
        value="12"
        trend="down"
        trendValue="3 vs last week"
        owner={{ name: 'Mara Lindqvist', org: 'Platform Reliability' }}
      />
      <Kpi
        label="Avg. resolution time"
        value="4.2h"
        trend="up"
        trendValue="0.6h vs last week"
        owner={{ name: 'Dev Patel', org: 'Support Ops' }}
      />
      <Kpi
        label="SLA compliance"
        value="98.4%"
        trend="flat"
        trendValue="0.0 vs last week"
        owner={{ name: 'Ida Sørensen', org: 'Customer Success' }}
      />
      <Kpi label="Active users" value="1,204" owner={{ name: 'Tomas Berg' }} />
    </div>
  );
}
