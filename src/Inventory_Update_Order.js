import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import BarGraph from './BarGraph';
import Fuel_BarGraphs from './Fuel_BarGraphs';
import SalesLineGraph from './Sales_Trends'

import Chart from 'chart.js/auto';
import DropdownMenu from './order_inventory';

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
      <div className="corner">Sales Trends</div>
      <div className='search'></div>
      <div class="div6">
      <DropdownMenu />
      </div>


    </div>
  );
}

export default Inventory_Page;
