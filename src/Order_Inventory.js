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
        itemStates[`qty_${item.name.toLowerCase().replace(' ', '_')}`] = useItemStates(0);
    });
    return itemStates;
    };

function OrderInventory() {

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
    
    // const addItem = (itemName) => {
    //     const varItemName = `qty_${itemName.replace(' ', '_')}`;
    //     const { state, setState } = itemStates[varItemName];
    //     setState(state + 1);
    //     setItem_P(itemName, state + 1);
    //     };
    
    // const decreaseItem = (itemName) => {
    //     const varItemName = `qty_${itemName.replace(' ', '_')}`;
    //     const { state, setState } = itemStates[varItemName];
    //     if (state > 0){
    //     setState(state - 1);
    //     setItem_P(itemName, state - 1);
    //     }
    //     };

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
          <div className="corner">Order Inventory</div>
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
              <p>{itemStates[`qty_${item.name.replace(' ', '_')}`].state}</p>
              <input type="text" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`qty_${item.name.replace(' ', '_')}`].state} />
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
    
    
    export default OrderInventory;