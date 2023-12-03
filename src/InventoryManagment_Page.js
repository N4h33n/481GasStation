import './App.css';
import { useState, useEffect } from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import { days_sales } from './Variables';
import {Link} from 'react-router-dom';

function App() {
  const [firstState, setFirstState] = useState(false);
	const [secondState, setSecondState] = useState(false);
	const [thirdState, setThirdState] = useState(false);
	const [fourthState, setFourthState] = useState(false);
	const [fifthState, setFifthState] = useState(false);
	const [sixthState, setSixthState] = useState(false);
	const [seventhState, setSeventhState] = useState(false);
	const [eighthState, setEighthState] = useState(false);
	const [ninthState, setNinthState] = useState(false);
	const [tenthState, setTenthState] = useState(false);

  const [selectedPeriod, setSelectedPeriod] = useState(30);
  const [salesText, setSalesText] = useState("");

  const handleTimeClick = (days) => {
    setSelectedPeriod(days);
    updateSalesText();
  };

  useEffect(() => {
    updateSalesText();
  }, [selectedPeriod]);

  const updateSalesText = () => {
    const sortedItems = Object.entries(days_sales).sort(([itemA, salesA], [itemB, salesB]) => {
      const unitsSoldA = salesA[selectedPeriod];
      const unitsSoldB = salesB[selectedPeriod];
      return unitsSoldB - unitsSoldA;
    });

    const top5Items = sortedItems.slice(0, 5);

    const text = top5Items.map(([item, sales]) => {
      const unitsSold = sales[selectedPeriod];
      return `${item} ............................................................................................................................................................... ${unitsSold} units`;
    }).join('<br/>');
    setSalesText(text);
    console.log(text);
  };

  var text = "Oreo         300 Units \nCheetos      70 Units\nMilk          23 units";
  return (
    <body style={{height:"100%", width:"100%", backgroundImage: "url('/dashboard_bg2.jpg')", backgroundSize:"cover", position:"absolute" }}>
      <Sidebars />
      <div className="Fuel_Management">Inventory Managment</div>
      <div className="Best_Sellers">Sales Overview</div>

      <div className='Fuel_Management_Buttons'>
		  <Link to="/BarGraph" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Inventory</button>
		  </Link> 
		  <Link to="/Sales_Trends" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Sales Trends</button>
		  </Link> 
		  <Link to="/Order_Inventory" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Order Inventory</button>
		  </Link> 
		  <Link to="/Set_Prices" className='dashboard-button' style={{border:'2px solid black'}}>
			<button className='dashboard-button'>Set Prices</button>
		  </Link> 
      </div>
      <div className='div5' dangerouslySetInnerHTML={{ __html: salesText }}></div>
	  <select className='trend'>
		<option className="Day30" id="Day30" onClick={() => handleTimeClick(30)}>Day 30</option>
		<option className="Day60" id="Day60" onClick={() => handleTimeClick(60)}>Day 60</option>
		<option className="Day90" id="button90" onClick={() => handleTimeClick(90)}>Day 90</option>
	  </select>

    </body>
  );
}

export default App;
