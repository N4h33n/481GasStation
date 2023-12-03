import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// const data = {
// labels : ['CoffeeCrisp'],

// datasets : [
// {
//     label: 'Sales',
//     backgroundColor: 'rgba(240, 0, 0, 0.3)',
//     borderColor: 'rgba(240, 0, 0, 1)',
//     borderWidth: 1,
//     hoverBackgroundColor: 'rgba(128, 128, 128, 0.5)',
//     data: [50, 57, 13, 60],
//   },
// ],
// };


const labels = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', 
                '11','12', '13', '14', '15', '16', '17', '18','19', '20',
                '21','22', '23', '24', '25', '26', '27', '28','29', '30'];
const Sales_Trends_data = {
  labels: labels,
  datasets: [{
    label: 'Chips Sales',
    data: [65, 59, 80, 81, 56, 55, 40, 17, 23, 74, 2, 92, 30, 63, 12, 91, 45, 28, 6, 37, 70, 19, 84, 73, 47, 3, 68, 99, 11, 61],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  },
  {      
    label: 'Drinks Sales',
    data: [27, 88, 51, 14, 38, 77, 66, 7, 29, 53, 72, 96, 41, 10, 48, 70, 34, 85, 62, 22, 4, 68, 92, 55, 39, 18, 79, 2, 46, 61],
    fill: false,
    borderColor: 'rgb(75, 200, 12)',
    tension: 0.1
  },
  {      
    label: 'Cookies Sales',
    data: [25, 70, 84, 31, 53, 62, 79, 23, 11, 97, 41, 20, 69, 50, 88, 14, 58, 4, 71, 9, 33, 77, 5, 93, 30, 66, 27, 36, 75, 3],
    fill: false,
    borderColor: 'rgb(200, 0, 12)',
    tension: 0.1
  },
  {      
    label: 'Candies Sales',
    data: [60, 17, 38, 86, 44, 67, 25, 37, 13, 81, 2, 55, 76, 49, 21, 98, 43, 6, 78, 8, 94, 32, 91, 10, 68, 47, 19, 64, 52, 26],
    fill: false,
    borderColor: 'rgb(200, 200, 200)',
    tension: 0.1
  },
  {      
    label: 'Misc. Sales',
    data: [72, 35, 59, 12, 74, 57, 42, 16, 87, 15, 82, 31, 65, 54, 7, 80, 29, 90, 47, 61, 1, 89, 40, 99, 8, 50, 64, 22, 94, 73],
    fill: false,
    borderColor: 'rgb(7, 0, 1)',
    tension: 0.1
  }
  
    ]
};


const Sales_Trends_Fuel = {
    labels: labels,
    datasets: [{
      label: 'Octane 87 Sales per Litre',
      data: [15, 38, 28, 51, 10, 45, 63, 42, 5, 20, 59, 31, 6, 25, 53, 8, 56, 14, 60, 22, 35, 4, 29, 49, 2, 19, 48, 12, 55, 41],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {      
      label: 'Octane 89 Sales per Litre',
      data: [32, 3, 13, 60, 23, 7, 44, 50, 1, 16, 54, 11, 64, 17, 58, 39, 9, 33, 21, 52, 24, 46, 30, 47, 31, 37, 62, 27, 61, 18],
      fill: false,
      borderColor: 'rgb(75, 200, 12)',
      tension: 0.1
    },
    {      
      label: 'Octane 93 Sales per Litre',
      data: [57, 36, 0, 26, 43, 34, 5, 2, 12, 59, 16, 48, 30, 6, 53, 25, 8, 19, 9, 63, 47, 41, 4, 61, 15, 22, 37, 20, 56, 58],
      fill: false,
      borderColor: 'rgb(200, 0, 12)',
      tension: 0.1
    },
    {      
      label: 'Diesel Sales per Litre',
      data: [50, 8, 29, 1, 55, 27, 46, 14, 39, 20, 12, 59, 6, 63, 32, 24, 51, 3, 42, 61, 18, 31, 58, 5, 2, 9, 37, 45, 7, 16],
      fill: false,
      borderColor: 'rgb(200, 200, 200)',
      tension: 0.1
    },
    {      
      label: 'Propane Cards Sales',
      data: [22, 11, 41, 19, 57, 30, 53, 62, 26, 44, 3, 61, 16, 14, 35, 0, 24, 9, 64, 12, 47, 33, 52, 10, 40, 58, 7, 34, 28, 6],
      fill: false,
      borderColor: 'rgb(7, 0, 1)',
      tension: 0.1
    }
    
      ]
  };


const SalesLineGraph = () => {
    const [visibleLines, setVisibleLines] = useState(() =>
    Sales_Trends_data.datasets.map((dataset) => dataset.label)
  );

    const legendClickHandler = (label) => {
      setVisibleLines((prevVisibleLines) => {
        if (prevVisibleLines.length === 1 && prevVisibleLines.includes(label)) {
          return Sales_Trends_data.datasets.map((dataset) => dataset.label);
        } else {
          return [label];
        }
      });
    };

    const options = {
      indexAxis: 'x',
      onClick: (_, activeElements) => {
        if (activeElements.length > 0) {
          const label = {Sales_Trends_data}.datasets[activeElements[0]._datasetIndex].label;
          legendClickHandler(label);
        }
      },
      plugins: {
        legend: {
          onClick: (e, legendItem) => {
            legendClickHandler(legendItem.text)
          },
        },
      },
  };
    const filteredDatasets = Sales_Trends_data.datasets.filter((dataset) =>
    visibleLines.includes(dataset.label)
    );

    const visibleData = { ...Sales_Trends_data, datasets: filteredDatasets };

    return (
      <div>
        PRODUCTS:
        <Line options={options} data={visibleData} />
         FUEL:  
      <Line options={options} data={Sales_Trends_Fuel} />
      </div>
    );
  };
  
  export default SalesLineGraph;
  

//   import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react';
// import Sidebars from './Sidebars';
// import InventoryButton from './ViewInventoryButton';
// import BarGraph from './BarGraph';
// import Fuel_BarGraphs from './Fuel_BarGraphs';
// import SalesLineGraph from './Sales_Trends'

// import Chart from 'chart.js/auto';
// import DropdownMenu from './order_inventory';
// import UpdateInventory from './Update_Inventory';
// import Update_Set_Prices from './Set_Prices';

// function Inventory_Page() {
//   const [firstState, setFirstState] = useState(false);
// 	const [secondState, setSecondState] = useState(false);
// 	const [thirdState, setThirdState] = useState(false);
// 	const [fourthState, setFourthState] = useState(false);
// 	const [fifthState, setFifthState] = useState(false);
// 	const [sixthState, setSixthState] = useState(false);
// 	const [seventhState, setSeventhState] = useState(false);
// 	const [eighthState, setEighthState] = useState(false);
// 	const [ninthState, setNinthState] = useState(false);
// 	const [tenthState, setTenthState] = useState(false);

//   return (
//     <div className="Inventory_Page">
//       <Sidebars />
//       <div className="corner">Sales Trends</div>
//       {/* <div className='search'><input type="text" name="name" /></div> */}
//       <div class="div6">
//       <SalesLineGraph />
//       </div>


//     </div>
//   );
// }

// export default Inventory_Page;
