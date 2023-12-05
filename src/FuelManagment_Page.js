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
		<Link to="/Sales_Trends_Fuel" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Sales Trends</button>
		</Link>
		<Link to="/OrderFuel" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Order Fuel</button>
		</Link>
      </div>
      
	  <select className='trend'>
		<option className="Day30" id="Day30" onClick={() => {setFourthState(true); setFifthState(false); setSixthState(false)} }>Last Day 30</option>
		<option className="Day60" id="Day60" onClick={() =>  {setFourthState(false); setFifthState(true); setSixthState(false)} }>Last Day 60</option>
		<option className="Day90" id="button90" onClick={() =>  {setFourthState(false); setFifthState(false); setSixthState(true)} }>Last Day 90</option>
	  </select>
	  
	<div className='Best_Sellers_Div'>

{fourthState && (
	<table className="Sales_Table">
		<thead className="HeaderRow">
			<th>Fuel</th>
			<th>Units Sold</th>
		</thead>
		
		<tr>
			<td>Octane 87</td>
			<td>10000</td>
		</tr>
		<tr>
			<td>Octane 89</td>
			<td>3400</td>
		</tr>
		<tr>
			<td>Octane 93</td>
			<td>23000</td>
		</tr>
		<tr>
			<td>Diesel</td>
			<td>1000</td>
		</tr>
		<tr>
			<td>Propane</td>
			<td>400</td>
		</tr>
	</table>
)}

{fifthState && (
  <table className="Sales_Table">
		<thead className="HeaderRow">
			<th>Fuel</th>
			<th>Units Sold</th>
		</thead>
		
		<tr>
			<td>Octane 87</td>
			<td>31040</td>
		</tr>
		<tr>
			<td>Octane 89</td>
			<td>5790</td>
		</tr>
		<tr>
			<td>Octane 93</td>
			<td>18000</td>
		</tr>
		<tr>
			<td>Diesel</td>
			<td>2000</td>
		</tr>
		<tr>
			<td>Propane</td>
			<td>700</td>
		</tr>
	</table>
)}


{sixthState && (
  <table className="Sales_Table">
		<thead className="HeaderRow">
			<th>Fuel</th>
			<th>Units Sold</th>
		</thead>
		
		<tr>
			<td>Octane 87</td>
			<td>95600</td>
		</tr>
		<tr>
			<td>Octane 89</td>
			<td>11990</td>
		</tr>
		<tr>
			<td>Octane 93</td>
			<td>89000</td>
		</tr>
		<tr>
			<td>Diesel</td>
			<td>3000</td>
		</tr>
		<tr>
			<td>Propane</td>
			<td>1400</td>
		</tr>
	</table>
)}

  
</div>
    </body>
  );
}

export default FuelManagment_Page;
