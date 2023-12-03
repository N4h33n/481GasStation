import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import {useState} from 'react';

function UpdateFuel() {
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
        <th>Fuel</th>
        <th>Quantity</th>
        <th>ADD/REMOVE</th>
    </tr>
    <tr>
        <td>Octane 87</td>
        <td>3700</td>
        <td>
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setFirstState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setSecondState(true)}>-</button>
            </div>
            <input type="text" name="name" />
        </td>
    </tr>
    <tr>
        <td>Octane 89</td>
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
        <td>Octane 93</td>
        <td>0</td>
        <td>            
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setFifthState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setSixthState(true)}>-</button>
            </div>
            <input type="text" name="name" /></td>
    </tr>
    <tr>
        <td>Diesel</td>
        <td>0</td>
        <td>            
            <div className='div6'>
                <button className="Update_Fuel" onClick={() => setSeventhState(true)}>+</button>
                <button className="Update_Fuel" onClick={() => setEighthState(true)}>-</button>
            </div>
            <input type="text" name="name" /></td>
    </tr>
    <tr>
        <td>Propane</td>
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

export default UpdateFuel;


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