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
          };

  return (
    <div className="Inventory_Page">
    <Sidebars />
    <div className="corner">Set Prices</div>
    {/* <div className='search'><input type="text" name="name" /></div> */}
    <div className="Fuel_Div">
		<table className="Fuel_Table">
				<thead className="HeaderRow">
					<tr>
						<th>CATEGORY</th>
					</tr>
				</thead>
			<tbody>
			  {categories.map(category => (
				<React.Fragment key={category}>
				  <tr>
					<th style={{color:"rgb(89, 170, 236)", backgroundColor:"rgb(201, 201, 201)"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</th>
				  </tr>
				  {inventory.filter(item => item.category === category).map(item => (
            <div class="card" key={item.name}>
              <img src={item.img} alt="Avatar" style={{width: "100%"}}></img>
              <div class="container">
              <h4><b>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</b></h4>
              <p>Price: ${item.price.toFixed(2)}</p>
              <input type="number" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`price_${item.name.replace(' ', '_')}`].state} />
              </div>
            </div>
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


export default Update_Set_Prices;