import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { inventory } from './Variables'

const getColorForCategory = category => {
  // Define colors for each category
  const categoryColors = {
    chips: 'rgba(240, 0, 0, 0.3)',
    drinks: 'rgba(0, 240, 0, 0.3)',
    cookies: 'rgba(0, 0, 240, 0.3)',
    candy: 'rgba(255, 165, 0, 0.3)',
    misc: 'rgba(128, 128, 128, 0.3)',
  };

  // Return the color for the specified category, default to a fallback color if not found
  return categoryColors[category] || 'rgba(0, 0, 0, 0.3)';
};

const data = {
labels : inventory.map(item => item.name),

datasets : [
{
    label: 'Inventory Percentage',
    backgroundColor: inventory.map(item => getColorForCategory(item.category)),
    borderColor: inventory.map(item => getColorForCategory(item.category).replace('0.3', '1')),
    borderWidth: 1,
    hoverBackgroundColor: inventory.map(item => getColorForCategory(item.category).replace('0.3', '0.5')),
    data: inventory.map(item => (item.qty / item.capacity) * 100),
  },
],
};

 const options = {
    indexAxis: 'y',
    plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: context => {
              const dataIndex = context.dataIndex;
              if (inventory && dataIndex >= 0 && dataIndex < inventory.length) {
                const item = inventory[dataIndex];
                return `Category: ${item.category}, Qty: ${item.qty}, Capacity: ${item.capacity}`;
              }
              return 'error?';
            },
          },
        },
    },
    scales: {
      x: {
        beginAtZero: true,
        suggestedMax: 100, // Set the maximum value of the y-axis
      },
    },
};

// const customTooltip = tooltipModel => {
//   const dataIndex = tooltipModel.dataIndex;

//   // Check if inventory is defined and dataIndex is a valid index
//   if (inventory && dataIndex >= 0 && dataIndex < inventory.length) {
//     const item = inventory[dataIndex];
//     const tooltipText = `Name: ${item.name}, Qty: ${item.qty}, Capacity: ${item.capacity}`;
//     return tooltipText;
//   }

//   // Return an empty string or some default text if the data is not available
//   return 'error?';
// };

const BarGraph = () => {
    return (
      <div>
        <Bar options={options} data={data} />
      </div>
    );
  };
  
  export default BarGraph;
  
