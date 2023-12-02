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
	const [fourthState, setFourthState] = useState(false);
	const [fifthState, setFifthState] = useState(false);
	const [sixthState, setSixthState] = useState(false);




  return (
    <div className="App">
      <Sidebars />
      <div className="Fuel_Management">Fuel Managment</div>
      <div className="Best_Sellers">Best Sellers</div>

      <div className='Fuel_Management_Buttons'>
      
		<div className="btn-group">
			<Link to="/Fuel_BarGraphs" className='dashboard-button'>View Fuel</Link> 
			<button className='dashboard-button'>Sales Trends</button>
			<Link to="PumpManagement" className='dashboard-button'>Order Fuel</Link>
		</div>


     
      </div>
      <div className='Best_Sellers_Div'> {}</div>
      
      <div className='trend'>
      <button className="Day30" id="Day30" onClick={() => {setFourthState(true); setFifthState(false); setSixthState(false)} }>Day 30</button>
      <button className="Day60" id="button60" onClick={() =>  {setFourthState(false); setFifthState(true); setSixthState(false)} }>Day 60</button>
      <button className="Day90" id="button90" onClick={() =>  {setFourthState(false); setFifthState(false); setSixthState(true)} }>Day 90</button>
      </div>


{fourthState && (
  <div className='Best_Sellers_Div'>
    <div className='Best_Sellers_Div'> {"Octane 87 ......................................................................................................................................................... 10000 Units"}</div>
    <div className='Best_Sellers_Div'> {"Octane 93 ..........................................................................................................................................................3400 Units"}</div>
    <div className='Best_Sellers_Div'> {"Octane 89 ......................................................................................................................................................... 23000 Units"}</div>
    <div className='Best_Sellers_Div'> {"Diesel  ..................................................................................................................................................................1000 Units"}</div>
  </div>
)}

{fifthState && (
  <div className='Best_Sellers_Div'>
    <div className='Best_Sellers_Div'> {"Octane 87 ......................................................................................................................................................... 31040 Units"}</div>
    <div className='Best_Sellers_Div'> {"Octane 93 ..........................................................................................................................................................5790 Units"}</div>
    <div className='Best_Sellers_Div'> {"Octane 89 ......................................................................................................................................................... 18000 Units"}</div>
    <div className='Best_Sellers_Div'> {"Diesel  ..................................................................................................................................................................2000 Units"}</div>
  </div>
)}


{sixthState && (
  <div className='Best_Sellers_Div'>
    <div className='Best_Sellers_Div'> {"Octane 87 ......................................................................................................................................................... 95600 Units"}</div>
    <div className='Best_Sellers_Div'> {"Octane 93 ..........................................................................................................................................................11990 Units"}</div>
    <div className='Best_Sellers_Div'> {"Octane 89 ......................................................................................................................................................... 89000 Units"}</div>
    <div className='Best_Sellers_Div'> {"Diesel  ..................................................................................................................................................................3000 Units"}</div>
  </div>
)}

  

    </div>
  );
}

export default FuelManagment_Page;
