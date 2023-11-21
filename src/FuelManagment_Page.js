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

  return (
    <div className="App">
      <Sidebars />
      <div className="div3">Fuel Managment</div>
      <div className="div4">Best Sellers</div>

      <div className='div2'>
      <button className="Inventory" onClick={() => setFirstState(true)}>View Fuel</button>
      <button className="SalesTrends" onClick={() => setSecondState(true)}>Sales Trends</button>
      <button className="OrderInventory" onClick={() => setThirdState(true)}>Order Fuel</button>

      </div>
      <div className='div5'> {}</div>
      <div className='div5'> {"Octane 87 ......................................................................................................................................................... 90000 Units"}</div>
      <div className='div5'> {"Octane 93 ..........................................................................................................................................................23400 Units"}</div>
      <div className='div5'> {"Octane 89 ......................................................................................................................................................... 10000 Units"}</div>
      <div className='div5'> {"Diesel  ..................................................................................................................................................................6000 Units"}</div>
      
      <div className='trend'>
      <button className="Day30" id="button1" onClick={() => setFifthState(true)}>Day 30</button>
      <button className="Day60" onClick={() => setSixthState(true)}>Day 60</button>
      <button className="Day90" onClick={() => setSeventhState(true)}>Day 90</button>
      </div>

    </div>
  );
}

export default App;
