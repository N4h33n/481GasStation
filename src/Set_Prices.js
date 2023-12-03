import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import {useState} from 'react';
import { inventory, categories, setItem_X, inv_P } from './Variables';
import Sidebars from './Sidebars';
import PopUp from './PopUpSetPrices';

function useItemStates(initialValue) {
    const [state, setState] = useState(initialValue);
  
    return { state, setState };
  }

const initializeItemStates = (inventory) => {
    const itemStates = {};
    inventory.forEach(item => {
        itemStates[`price_${item.name.toLowerCase().replace(' ', '_')}`] = useItemStates(NaN);
    });
    return itemStates;
    };

function Update_Set_Prices() {

    const [firstState, setFirstState] = useState(false);

    const itemStates = initializeItemStates(inventory);
    
    const Refresh = () => {
        setFirstState(false);
        Object.entries(itemStates).forEach(([key, { setState }]) => {
            const itemName = key.replace(/^price_/, '').replace(/_/g, ' ');
            setState(NaN);
            setItem_X(itemName, NaN);
          });
        };

    const Final_Call = () => {
        setFirstState(true);
        Object.entries(itemStates).forEach(([key, { state }]) => {
            const itemName = key.replace(/^price_/, '').replace(/_/g, ' ');
            setItem_X(itemName, state);
          });
        };

        const handleChangeItem = (itemName, inputVal) => {
            const varItemName = `price_${itemName.replace(/ /g, '_')}`;
            const { state, setState } = itemStates[varItemName];
            const floats = inputVal.target.value;

            const float = /^\d+(\.\d{0,2})?$/.test(floats) ? parseFloat(floats) : (floats === "" ? NaN : state);
            setState(float);
            setItem_X(itemName, float);

            // if (floats === '' || /^\d+(\.\d{0,2})?$/.test(floats)) {

            //     const floatValue = floats === '' ? state : parseFloat(String(floats));
            //     console.log(floatValue)
            //     setState(floatValue);
            //     setItem_X(itemName, floatValue);
            //   } else {

            //     setState(state);
            //     setItem_X(itemName, state);
            //   }
          };

  return (
    <div className="Inventory_Page">
    <Sidebars />
    <div className="corner">Set Prices</div>
    {/* <div className='search'><input type="text" name="name" /></div> */}
    <div className="Fuel_Div">
    <table className="Fuel_Table">

<tr>
  <th>CATEGORY</th>
</tr>
<tbody>
  {categories.map(category => (
    <React.Fragment key={category}>
      <tr>
        <th>{category}</th>
        <th>Current Price</th>
        <th>New Price</th>
      </tr>
      {inventory.filter(item => item.category === category).map(item => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
              <input type="number" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`price_${item.name.replace(' ', '_')}`].state} />
            </td>
          </tr>
        ))}
    </React.Fragment>
  ))}
</tbody>
</table>
</div>

<div className='Review_Button'>
<button className='Update_Fuel'onClick={Final_Call}>Review and Submit</button>
</div>
{firstState && (
  <PopUp isOpen={firstState} onClose={Refresh}></PopUp>
)} 

  </div>

);
}


export default Update_Set_Prices;
//     <table>
//     <tr>
//         <th>CATEGORY</th>
//     </tr>
//     <tr>
//         <th>Chips</th>
//         <th>Current Price</th>
//         <th>New Price</th>
//     </tr>
//     <tr>
//         <td>Cheetos</td>
//         <td>4.45</td>
//         <td> <input type="text" name="name" />
//         </td>
//     </tr>
//     <tr>
//         <td>Nachos</td>
//         <td>5.50</td>
//         <td> <input type="text" name="name" />
//         </td>
//     </tr>
//     <tr>
//         <th>Candy</th>
//         <th>Current Price</th>
//         <th>New Price</th>
//     </tr>
//     <tr>
//         <td>Nerds</td>
//         <td>2.00</td>
//         <td> <input type="text" name="name" /></td>
//     </tr>
//     <tr>
//         <td>Skittles</td>
//         <td>1.75</td>
//         <td> <input type="text" name="name" /></td>
//     </tr>
//     <tr>
//         <th>Tea</th>
//         <th>Current Price</th>
//         <th>New Price</th>
//     </tr>
//     <tr>
//         <td>London Fog</td>
//         <td>15.99</td>
//         <td> <input type="text" name="name" /></td>
//      </tr>

//     </table>
//   );
// }

// export default Update_Set_Prices;

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
