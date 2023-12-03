import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { inventory } from './Variables'
import Sidebars from './Sidebars';
import {Link} from 'react-router-dom';

const getColorForCategory = category => {

  const categoryColors = {
    chips: 'rgba(240, 0, 0, 0.3)',
    drinks: 'rgba(0, 240, 0, 0.3)',
    cookies: 'rgba(0, 0, 240, 0.3)',
    candy: 'rgba(255, 165, 0, 0.3)',
    misc: 'rgba(128, 128, 128, 0.3)',
  };

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
        suggestedMax: 100,
      },
    },
};

const BarGraph = () => {
    return (
      <div>
        <Sidebars />
        
        <div className="corner">Inventory Management</div>
  
        <div className="barGraph">
			<Bar options={options} data={data} />
		</div>

		<div className="newGroup">
			<Link to="/Update_Inventory" className='dashboard-button' style={{border:'2px solid black'}}>
				<button className='dashboard-button'>Update Inventory</button>
			</Link>
		</div>
 
      </div>
    );
  };
  
  export default BarGraph;
  
