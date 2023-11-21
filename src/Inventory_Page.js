import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import BarGraph from './BarGraph';
import Chart from 'chart.js/auto';

function Inventory_Page() {
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
    <div className="Inventory_Page">
      <Sidebars />
      <div className="corner">Inventory</div>
      <div className='rectangle'></div>
      <div class="chart-">
      <BarGraph />
      </div>

       <div className='div2'>
      <button className="UpdateInventory" onClick={() => setFirstState(true)}>Update Inventory</button>
      </div>

    </div>
  );
}

export default Inventory_Page;
