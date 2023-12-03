import React from 'react';
import logo from './logo.svg';
import './App_2.css';
import { useState, useEffect } from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import { inventory, categories, setItem_P } from './Variables';
import PopUp from './PopUpInv';

// const InventoryItem = ({ name, price, qty, category, capacity, addHandler, decreaseHandler, changeHandler }) => {
//   return (
//     <tr key={name}>
//       <td>{name}</td>
//       <td>{qty}</td>
//       <td>
//         <div className='Inventory_Div'>
//           <button className="Update_Inventory" onClick={addHandler}>+</button>
//           <button className="Update_Inventory" onClick={decreaseHandler}>-</button>
//         </div>
//         <input type="text" onChange={changeHandler} value={qty} />
//       </td>
//     </tr>
//   );
// };

function useItemStates(initialValue) {
    const [state, setState] = useState(initialValue);
  
    return { state, setState };
  }

const initializeItemStates = (inventory) => {
const itemStates = {};
inventory.forEach(item => {
    itemStates[`qty_${item.name.toLowerCase().replace(' ', '_')}`] = useItemStates(0);
});
return itemStates;
};

function UpdateInventory() {

    const [firstState, setFirstState] = useState(false);

    const itemStates = initializeItemStates(inventory);
    
    const Refresh = () => {
        setFirstState(false);
        Object.entries(itemStates).forEach(([key, { setState }]) => {
            const itemName = key.replace(/^qty_/, '').replace(/_/g, ' ');
            setState(0);
            setItem_P(itemName, 0);
          });
        };

    const Final_Call = () => {
        setFirstState(true);
        Object.entries(itemStates).forEach(([key, { state }]) => {
            const itemName = key.replace(/^qty_/, '').replace(/_/g, ' ');
            setItem_P(itemName, state);
          });
        };
//   const [items, setItems] = useState(inventory.reduce((acc, item) => ({ ...acc, [item.name]: item.qty }), {}));

//   const handleInventoryChange = (itemName) => (event) => {
//     const newValue = parseInt(event.target.value, 10) || 0;
//     setItems((prevItems) => ({ ...prevItems, [itemName]: newValue }));
//   };

  const addItem = (itemName) => {
    const varItemName = `qty_${itemName.replace(' ', '_')}`;
    const { state, setState } = itemStates[varItemName];
    setState(state + 1);
    setItem_P(itemName, state + 1);
  };

  const decreaseItem = (itemName) => {
    const varItemName = `qty_${itemName.replace(' ', '_')}`;
    const { state, setState } = itemStates[varItemName];
    setState(state - 1);
    setItem_P(itemName, state - 1);
  };

  const handleChangeItem = (itemName, inputText) => {
    const varItemName = `qty_${itemName.replace(' ', '_')}`;
    const { state, setState } = itemStates[varItemName];
    const ints = Number(inputText.target.value);
    const int = isNaN(ints) ? state : parseInt(ints);
    setState(int);
    setItem_P(itemName, int);
  };

//   const renderItem = (item) => (
//     <InventoryItem
//       key={item.name}
//       name={item.name}
//       qty={items[item.name]}
//       addHandler={() => setItems((prevItems) => ({ ...prevItems, [item.name]: prevItems[item.name] + 1 }))}
//       decreaseHandler={() => setItems((prevItems) => ({ ...prevItems, [item.name]: Math.max(0, prevItems[item.name] - 1) }))}
//       changeHandler={handleInventoryChange(item.name)}
//     />
//   );

return (

    <div className="Inventory_Page">
      <Sidebars />
      <div className="corner">Update Inventory</div>
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
          <th>ADD/REMOVE</th>
        </tr>
        {inventory.filter(item => item.category === category).map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>
                <div className='Fuel_Div'>
                  <button className="Update_Fuel" onClick={() => addItem(item.name)}>+</button>
                  <button className="Update_Fuel" onClick={() => decreaseItem(item.name)}>-</button>
                </div>
                <input type="text" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`qty_${item.name.replace(' ', '_')}`].state} />
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


export default UpdateInventory;




//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Quantity</th>
//           <th>ADD/REMOVE</th>
//         </tr>
//       </thead>
//       <tbody>
//         {inventory.map(renderItem)}
//       </tbody>
//     </table>
//   );
// };

// export default UpdateInventory;