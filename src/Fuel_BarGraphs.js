import './App_2.css';
import {useState} from 'react';
import Sidebars from './Sidebars';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {Octane87, Octane89, Octane93, Diesel, Propane} from "./Variables.js";
import {Link} from 'react-router-dom';



const Fuel_BarGraphs = () => {      

  const [Octane87_t, setOctane87_t] = useState(Octane87);
  const [Octane89_t, setOctane89_t] = useState(Octane89);
  const [Octane93_t, setOctane93_t] = useState(Octane93);
  const [Diesel_t, setDiesel_t] = useState(Diesel);
  const [Propane_t, setPropane_t] = useState(Propane);

  const data = {
    labels : ['Octane 87', 'Octane 89', 'Octane 93', 'Diesel', 'Propane'],

  datasets : [
      {
        label: 'Litres',
        backgroundColor: 'rgba(240, 0, 0, 0.3)',
        borderColor: 'rgba(240, 0, 0, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(128, 128, 128, 0.5)',
        data: [Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t],
      },
    ],
  };
  
  const options = {
	  maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
          legend: {
            display: false
          }
      },
	  scales:{
		y:{
			ticks:{
				color: 'black',
				font:{
					size: 17
				}
			}
		},
		x: {
			ticks:{
				color: 'black',
				font:{
					size: 17
				}
			}
		}
	  }
  };



  return (

      <div>
        <Sidebars />
        
        <div className="corner">Fuel Management</div>
		
		<div className="barGraph">
			<Bar options={options} data={data} />
		</div>
       
        <div className="newGroup">
			<Link to="/UpdateFuel" className='dashboard-button' style={{border:'2px solid black'}}>
				<button className='dashboard-button'>Update Fuel</button>
			</Link>
		</div>
 
      </div>
    );
  };
  
  export default Fuel_BarGraphs;
  
