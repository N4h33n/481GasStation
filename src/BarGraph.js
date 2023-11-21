import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
labels : ['CoffeeCrisp', 'Coffee', 'Cheetos', 'Tea'],

datasets : [
{
    label: 'Inventory',
    backgroundColor: 'rgba(240, 0, 0, 0.3)',
    borderColor: 'rgba(240, 0, 0, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(128, 128, 128, 0.5)',
    data: [50, 57, 13, 60],
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
  
