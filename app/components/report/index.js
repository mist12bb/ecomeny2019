import React from 'react';
import { Statistic } from 'semantic-ui-react';

import "./report.style.css"
import ReportValue from './mata/report-values';

const Report = () => {
  return (
    <div style={{margin:"0px 100px"}}>
     <Statistic.Group>
     <Statistic>
      <Statistic.Value children={<ReportValue as="sum"/>}></Statistic.Value>
      <Statistic.Label>sums</Statistic.Label>
     </Statistic>
     <Statistic>
      <Statistic.Value children={<ReportValue as="comm"/>}></Statistic.Value>
      <Statistic.Label>commitions</Statistic.Label>
     </Statistic>
     <Statistic>
      <Statistic.Value></Statistic.Value>
      <Statistic.Label></Statistic.Label>
     </Statistic>
     </Statistic.Group>
    </div>
  );
};

export default Report;