import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';

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
  var text = "Oreo         300 Units \nCheetos      70 Units\nMilk          23 units";
  return (
    <div className="App">
      <Sidebars />
      <div className="div3">Inventory Managment</div>
      <div className="div4">Best Sellers</div>

      <div className='div2'>
      <button className="Inventory" onClick={() => setFirstState(true)}>Inventory</button>
      <button className="SalesTrends" onClick={() => setSecondState(true)}>Sales Trends</button>
      <button className="OrderInventory" onClick={() => setThirdState(true)}>Order Inventory</button>
      <button className="SetPrices" onClick={() => setFourthState(true)}>Set Prices</button>
      </div>
      <div className='div5'> {}</div>
      <div className='div5'> {"Oreo ............................................................................................................................................................... 300 Units"}</div>
      <div className='div5'> {"Cheetos ..........................................................................................................................................................70 Units"}</div>
      <div className='div5'> {"Milk  ................................................................................................................................................................. 80 Units"}</div>
      <div className='div5'> {"Coffee Crisp .....................................................................................................................................................157 Units"}</div>
      
      <div className='trend'>
      <button className="Day30" id="button1" onClick={() => setFifthState(true)}>Day 30</button>
      <button className="Day60" onClick={() => setSixthState(true)}>Day 60</button>
      <button className="Day90" onClick={() => setSeventhState(true)}>Day 90</button>
      </div>

    </div>
  );
}

export default App;
