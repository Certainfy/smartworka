'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 200, 150, 300, 400, 350, 450, 550, 500, 600, 700, 650],
        borderColor: 'blue',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Dataset 2',
        data: [150, 250, 200, 350, 450, 400, 500, 600, 550, 650, 750, 700],
        borderColor: 'lime',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 1000,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
