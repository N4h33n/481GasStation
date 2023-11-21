import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import {useState} from 'react';

function Update_Set_Prices() {

  return (
    <table>
    <tr>
        <th>CATEGORY</th>
    </tr>
    <tr>
        <th>Chips</th>
        <th>Current Price</th>
        <th>New Price</th>
    </tr>
    <tr>
        <td>Cheetos</td>
        <td>4.45</td>
        <td> <input type="text" name="name" />
        </td>
    </tr>
    <tr>
        <td>Nachos</td>
        <td>5.50</td>
        <td> <input type="text" name="name" />
        </td>
    </tr>
    <tr>
        <th>Candy</th>
        <th>Current Price</th>
        <th>New Price</th>
    </tr>
    <tr>
        <td>Nerds</td>
        <td>2.00</td>
        <td> <input type="text" name="name" /></td>
    </tr>
    <tr>
        <td>Skittles</td>
        <td>1.75</td>
        <td> <input type="text" name="name" /></td>
    </tr>
    <tr>
        <th>Tea</th>
        <th>Current Price</th>
        <th>New Price</th>
    </tr>
    <tr>
        <td>London Fog</td>
        <td>15.99</td>
        <td> <input type="text" name="name" /></td>
     </tr>

    </table>
  );
}

export default Update_Set_Prices;

// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react';
// import Sidebars from './Sidebars';
// import InventoryButton from './ViewInventoryButton';
// import BarGraph from './BarGraph';
// import Fuel_BarGraphs from './Fuel_BarGraphs';
// import SalesLineGraph from './Sales_Trends'

// import Chart from 'chart.js/auto';
// import DropdownMenu from './order_inventory';
// import UpdateInventory from './Update_Inventory';
// import Update_Set_Prices from './Set_Prices';

// function Inventory_Page() {
//   const [firstState, setFirstState] = useState(false);
// 	const [secondState, setSecondState] = useState(false);
// 	const [thirdState, setThirdState] = useState(false);
// 	const [fourthState, setFourthState] = useState(false);
// 	const [fifthState, setFifthState] = useState(false);
// 	const [sixthState, setSixthState] = useState(false);
// 	const [seventhState, setSeventhState] = useState(false);
// 	const [eighthState, setEighthState] = useState(false);
// 	const [ninthState, setNinthState] = useState(false);
// 	const [tenthState, setTenthState] = useState(false);

//   return (
//     <div className="Inventory_Page">
//       <Sidebars />
//       <div className="corner">Set Prices</div>
//       <div className='search'><input type="text" name="name" /></div>
//       <div class="div6">
//       <Update_Set_Prices />
//       </div>
//       <div className='div2'>
//       <button className="Update_Fuel" onClick={() => setFirstState(true)}>Review and Submit</button>
//       </div>

//     </div>
//   );
// }

// export default Inventory_Page;
