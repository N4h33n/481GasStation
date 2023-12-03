import logo from './logo.svg';
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
    <div className="App">
      <Sidebars />
      <div className="div3">Inventory Managment</div>
      <div className="div4">Best Sellers</div>

      <div className='div2'>

      <div className="btn-group">
      <Link to="/BarGraph" className='dashboard-button'>Inventory</Link> 
      <Link to="/Sales_Trends" className='dashboard-button'>Sales Trends</Link> 
      <Link to="/order_inventory" className='dashboard-button'>Order Inventory</Link> 
      <Link to="/Set_Prices" className='dashboard-button'>Set Prices</Link> 

      </div>

      </div>
      <div className='div5' dangerouslySetInnerHTML={{ __html: salesText }}></div>
     {/*} <div className='div5'> {}</div>
      <div className='div5'> {"Oreo ............................................................................................................................................................... 300 Units"}</div>
      <div className='div5'> {"Cheetos ..........................................................................................................................................................70 Units"}</div>
      <div className='div5'> {"Milk  ................................................................................................................................................................. 80 Units"}</div>
      <div className='div5'> {"Coffee Crisp .....................................................................................................................................................157 Units"}</div>
  */}
      <div className='trend'>
      <button className="Day30" id="Day30" onClick={() => handleTimeClick(30)}>Day 30</button>
      <button className="Day60" id="button60" onClick={() => handleTimeClick(60)}>Day 60</button>
      <button className="Day90" id=" button90" onClick={() => handleTimeClick(90)}>Day 90</button>
      </div>

    </div>
  );
}

export default App;
