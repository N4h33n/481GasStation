import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
    labels : ['Octane 87', 'Octane 89', 'Octane 93', 'Diesel', 'Propane'],

datasets : [
{
    label: 'Litres',
    backgroundColor: 'rgba(240, 0, 0, 0.3)',
    borderColor: 'rgba(240, 0, 0, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(128, 128, 128, 0.5)',
    data: [36000, 18000, 29000, 30000,6000],
  },
],
};

 const options = {
    indexAxis: 'y',
    plugins: {
        legend: {
          display: false
        }
    },
};

const BarGraph = () => {
    return (
      <div>
        <Bar options={options} data={data} />
      </div>
    );
  };
  
  export default BarGraph;
  
