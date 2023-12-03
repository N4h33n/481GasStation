//import logo from './logo.svg';
import './App_2.css';
import {useState} from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import {Link} from 'react-router-dom';

function FuelManagment_Page() {
  const [firstState, setFirstState] = useState(false);
	const [secondState, setSecondState] = useState(false);
	const [thirdState, setThirdState] = useState(false);
	const [fourthState, setFourthState] = useState(true);
	const [fifthState, setFifthState] = useState(false);
	const [sixthState, setSixthState] = useState(false);

  return (
    <body style={{height:"100%", width:"100%", backgroundImage: "url('/dashboard_bg2.jpg')", backgroundSize:"cover", position:"absolute" }}>
      <Sidebars />
      <div className="Fuel_Management">Fuel Managment</div>
      <div className="Best_Sellers">Sales Overview</div>

      <div className='Fuel_Management_Buttons'>
		<Link to="/Fuel_BarGraphs" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>View Fuel</button>
		</Link> 
		<Link to="/FuelManagment_Page" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Sales Trends</button>
		</Link>
		<Link to="/FuelManagment_Page" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Order Fuel</button>
		</Link>
      </div>
      
	  <select className='trend'>
		<option className="Day30" id="Day30" onClick={() => {setFourthState(true); setFifthState(false); setSixthState(false)} }>Day 30</option>
		<option className="Day60" id="Day60" onClick={() =>  {setFourthState(false); setFifthState(true); setSixthState(false)} }>Day 60</option>
		<option className="Day90" id="button90" onClick={() =>  {setFourthState(false); setFifthState(false); setSixthState(true)} }>Day 90</option>
	  </select>
	  
	<div className='Best_Sellers_Div'>

{fourthState && (
  <div>
    <div className='Stats'> {"Octane 87 ......................................................................................................................................................... 10000 Units"}</div>
    <div className='Stats'> {"Octane 93 ..........................................................................................................................................................3400 Units"}</div>
    <div className='Stats'> {"Octane 89 ......................................................................................................................................................... 23000 Units"}</div>
    <div className='Stats'> {"Diesel  ..................................................................................................................................................................1000 Units"}</div>
	<div className='Stats'> {"Propane ...............................................................................................................................................................400 Units"}</div>
  </div>
)}

{fifthState && (
  <div>
    <div className='Stats'> {"Octane 87 ......................................................................................................................................................... 31040 Units"}</div>
    <div className='Stats'> {"Octane 93 ..........................................................................................................................................................5790 Units"}</div>
    <div className='Stats'> {"Octane 89 ......................................................................................................................................................... 18000 Units"}</div>
    <div className='Stats'> {"Diesel  ..................................................................................................................................................................2000 Units"}</div>
	<div className='Stats'> {"Propane ...............................................................................................................................................................700 Units"}</div>
  </div>
)}


{sixthState && (
  <div>
    <div className='Stats'> {"Octane 87 ......................................................................................................................................................... 95600 Units"}</div>
    <div className='Stats'> {"Octane 93 ..........................................................................................................................................................11990 Units"}</div>
    <div className='Stats'> {"Octane 89 ......................................................................................................................................................... 89000 Units"}</div>
    <div className='Stats'> {"Diesel  ..................................................................................................................................................................3000 Units"}</div>
	<div className='Stats'> {"Propane ...............................................................................................................................................................1400 Units"}</div>
  </div>
)}

  
</div>
    </body>
  );
}

export default FuelManagment_Page;
