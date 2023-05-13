import React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const TranxChart = ({ transactions }) => {
  // Transform transaction data to match the chart's data format
  const chartData = transactions.map((transaction) => ({
    month: new Date(transaction.date).toLocaleString('default', { month: 'short' }),
    amount: transaction.amount,
  }));

  return (
    <Paper>
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="amount" argumentField="month" />
        <Title text="Transaction Amount by Month" />
        <Animation />
      </Chart>
    </Paper>
  );
};

export default TranxChart;
