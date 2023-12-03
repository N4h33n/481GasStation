// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import {useState} from 'react';
import './UpdateInventoryStyle.css'

function UpdateInventory() {
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
    <table>
    <tr>
        <th className='tablehead'>CATEGORY</th>
    </tr>
    <tr>
        <th className='tablehead'>Chips</th>
        <th className='tablehead'>Quantity</th>
        <th className='tablehead'>ADD/REMOVE</th>
    </tr>
    <tr>
        <td>Cheetos</td>
        <td>19</td>
        <td>
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setFirstState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setSecondState(true)}>-</button>
            </div>
            <input type="text" name="name" />
        </td>
    </tr>
    <tr>
        <td>Nachos</td>
        <td>0</td>
        <td>
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setThirdState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setFourthState(true)}>-</button>
            </div>
            <input type="text" name="name" />
        </td>
    </tr>
    <tr>
        <th className='tablehead'>Candy</th>
        <th className='tablehead'>Quantity</th>
        <th className='tablehead'>ADD/REMOVE</th>
    </tr>
    <tr>
        <td>Nerds</td>
        <td>0</td>
        <td>            
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setFifthState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setSixthState(true)}>-</button>
            </div>
            <input type="text" name="name" /></td>
    </tr>
    <tr>
        <td>Skittles</td>
        <td>0</td>
        <td>            
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setSeventhState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setEighthState(true)}>-</button>
            </div>
            <input type="text" name="name" /></td>
    </tr>
    <tr>
        <th className='tablehead'>Tea</th>
        <th className='tablehead'>Quantity</th>
        <th className='tablehead'>ADD/REMOVE</th>
    </tr>
    <tr>
        <td>London Fog</td>
        <td>0</td>
        <td> 
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setNinthState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setTenthState(true)}>-</button>
            </div>
            <input type="text" name="name" /></td>
    </tr>

    </table>
    


  );
}

export default UpdateInventory;


// // import logo from './logo.svg';
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
//       <div className="corner">Update Inventory</div>
//       <div className='search'><input type="text" name="name" /></div>
//       <div class="div6">
//       <UpdateInventory />
//       </div>
//       <div className='div2'>
//       <button className="Update_Fuel" onClick={() => setFirstState(true)}>Review and Submit</button>
//       </div>

//     </div>
//   );
// }

// export default Inventory_Page;
// // 