import React from 'react';
import './App_2.css';
import { useState, useEffect } from 'react';
import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import { inventory, categories, setItem_P } from './Variables';
import PopUp from './PopUpInv';


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

return (

    <div className="Inventory_Page">
		<Sidebars />
		<div className="corner">Update Inventory</div>
		<div className="Fuel_Div">
			<table className="Fuel_Table">
				<thead className="HeaderRow">
					<tr>
						<th>CATEGORY</th>
						<th>Quantity</th>
						<th>Add/Remove</th>
					</tr>
				</thead>
				<tbody>
					{categories.map(category => (
					  <React.Fragment key={category}>
						<tr > 
						  <th style={{color:"rgb(89, 170, 236)", backgroundColor:"rgb(201, 201, 201)"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</th>
						  <th style={{color:"rgb(89, 170, 236)", backgroundColor:"rgb(201, 201, 201)"}}>Quantity</th>
						  <th style={{color:"rgb(89, 170, 236)", backgroundColor:"rgb(201, 201, 201)"}}></th>
						</tr>
						{inventory.filter(item => item.category === category).map(item => (
							<tr key={item.name}>
							  <td>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
							  <td>{item.qty}</td>
							  <td>
								<input type="text" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`qty_${item.name.replace(' ', '_')}`].state} />
							  </td>
							</tr>
						  ))}
					  </React.Fragment>
					))}
				  </tbody>
			</table>
		</div>

		<div className="newGroup">
			<button className='dashboard-button' onClick={Final_Call} style={{border:'2px solid black'}}>Review and Submit</button>
		</div>
		{firstState && (
		<PopUp isOpen={firstState} onClose={Refresh}></PopUp>
		)} 
    </div>

  );
}


export default UpdateInventory;