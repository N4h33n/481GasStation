import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import {useState} from 'react';
import { inventory, categories, setItem_P, inv_P } from './Variables';
import Sidebars from './Sidebars';
import PopUp from './PopUpInvOrder';

function useItemStates(initialValue) {
    const [state, setState] = useState(initialValue);
  
    return { state, setState };
  }

const initializeItemStates = (inventory) => {
    const itemStates = {};
    inventory.forEach(item => {
        itemStates[`quantity_${item.name.toLowerCase().replace(' ', '_')}`] = useItemStates(0);
    });
    return itemStates;
    };

function OrderInventory() {

    const [firstState, setFirstState] = useState(false);

    const itemStates = initializeItemStates(inventory);

    const Refresh = () => {
        setFirstState(false);
        Object.entries(itemStates).forEach(([key, { setState }]) => {
            const itemName = key.replace(/^quantity_/, '').replace(/_/g, ' ');
            setState(0);
            setItem_P(itemName, 0);
          });
        };
    
    const Final_Call = () => {
        setFirstState(true);
        Object.entries(itemStates).forEach(([key, { state }]) => {
            const itemName = key.replace(/^quantity_/, '').replace(/_/g, ' ');
            setItem_P(itemName, state);
          });
        };
    
    const addItem = (itemName) => {
        const varItemName = `quantity_${itemName.replace(' ', '_')}`;
        const { state, setState } = itemStates[varItemName];
        setState(state + 1);
        setItem_P(itemName, state + 1);
        };
    
    const decreaseItem = (itemName) => {
        const varItemName = `quantity_${itemName.replace(' ', '_')}`;
        const { state, setState } = itemStates[varItemName];
        if (state > 0){
        setState(state - 1);
        setItem_P(itemName, state - 1);
        }
        };

    const handleChangeItem = (itemName, inputText) => {
        const varItemName = `quantity_${itemName.replace(' ', '_')}`;
        const { state, setState } = itemStates[varItemName];
        const ints = Number(inputText.target.value);
        const int = isNaN(ints) ? state : parseInt(ints);
        setState(int);
        setItem_P(itemName, int);
        };

    return (

        <div className="Order_Inv_Page">
          <Sidebars />
          <div className="corner">Order Inventory</div>
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
              <th>Quantity</th>
              <th>ADD TO ORDER</th>
            </tr>
            {inventory.filter(item => item.category === category).map(item => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{itemStates[`quantity_${item.name.replace(' ', '_')}`].state}</td>
                  <td>
                    <div className='Fuel_Div'>
                      <button className="Update_Fuel" onClick={() => addItem(item.name)}>+</button>
                      <button className="Update_Fuel" onClick={() => decreaseItem(item.name)}>-</button>
                    </div>
                    <input type="text" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`quantity_${item.name.replace(' ', '_')}`].state} />
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
    
    
    export default OrderInventory;


//   return (
//     <table>
//     <tr>
//         <th>CATEGORY</th>
//     </tr>
//     <tr>
//         <th>Chips</th>
//         <th>Quantity</th>
//         <th>ADD/REMOVE</th>
//     </tr>
//     <tr>
//         <td>Cheetos</td>
//         <td>19</td>
//         <td>
//             <div className='div6'>
//                 <button className="Update_Fuel" onClick={() => setFirstState(true)}>+</button>
//                 <button className="Update_Fuel" onClick={() => setSecondState(true)}>-</button>
//             </div>
//             <input type="text" name="name" />
//         </td>
//     </tr>
//     <tr>
//         <td>Nachos</td>
//         <td>0</td>
//         <td>
//             <div className='div6'>
//                 <button className="Update_Fuel" onClick={() => setThirdState(true)}>+</button>
//                 <button className="Update_Fuel" onClick={() => setFourthState(true)}>-</button>
//             </div>
//             <input type="text" name="name" />
//         </td>
//     </tr>
//     <tr>
//         <th>Candy</th>
//         <th>Quantity</th>
//         <th>ADD/REMOVE</th>
//     </tr>
//     <tr>
//         <td>Nerds</td>
//         <td>0</td>
//         <td>            
//             <div className='div6'>
//                 <button className="Update_Fuel" onClick={() => setFifthState(true)}>+</button>
//                 <button className="Update_Fuel" onClick={() => setSixthState(true)}>-</button>
//             </div>
//             <input type="text" name="name" /></td>
//     </tr>
//     <tr>
//         <td>Skittles</td>
//         <td>0</td>
//         <td>            
//             <div className='div6'>
//                 <button className="Update_Fuel" onClick={() => setSeventhState(true)}>+</button>
//                 <button className="Update_Fuel" onClick={() => setEighthState(true)}>-</button>
//             </div>
//             <input type="text" name="name" /></td>
//     </tr>
//     <tr>
//         <th>Tea</th>
//         <th>Quantity</th>
//         <th>ADD/REMOVE</th>
//     </tr>
//     <tr>
//         <td>London Fog</td>
//         <td>0</td>
//         <td> 
//             <div className='div6'>
//                 <button className="Update_Fuel" onClick={() => setNinthState(true)}>+</button>
//                 <button className="Update_Fuel" onClick={() => setTenthState(true)}>-</button>
//             </div>
//             <input type="text" name="name" /></td>
//     </tr>

//     </table>
//   );


// export default OrderInventory;

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
//       <div className="corner">Order Inventory</div>
//       <div className='search'><input type="text" name="name" /></div>
//       <div class="div6">
//       <DropdownMenu />
//       </div>
//       <div className='div2'>
//       <button className="Update_Fuel" onClick={() => setFirstState(true)}>Review and Submit</button>
//       </div>

//     </div>
//   );
// }

// export default Inventory_Page;
// // 