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
    const [selectedCategory, setSelectedCategory] = useState(categories);

    const Refresh = () => {
        setFirstState(false);
        Object.entries(itemStates).forEach(([key, { setState }]) => {
            const itemName = key.replace(/^qty_/, '').replace(/_/g, ' ');
            setState(0);
            setItem_P(itemName, 0);
          });
        setSelectedCategory(categories);
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

    const handleChangeCategory = (event) => {
      if (event.target.value == "View All") {
        setSelectedCategory(categories);
      }
      else {
        setSelectedCategory([event.target.value]);
      }
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
          <div className="corner">Order Inventory</div>
          {/* <div className='search'><input type="text" name="name" /></div> */}
          <div className="Fuel_Div">
			<select className="invDropdown" value={categories.every(item => selectedCategory.includes(item)) ? 'View All' : selectedCategory[0]} onChange={handleChangeCategory}>
			  <option value="View All">All Categories</option>
			  {categories.map(category => (
				<option key={category} value={category}>
				  {category.charAt(0).toUpperCase() + category.slice(1)}
				</option>
			  ))}
			</select>
			{selectedCategory.map(category => (
			  <React.Fragment key={category}>
				<div> 
				  <h1 style={{color:"rgb(89, 170, 236)"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
				</div>
        <div className="cards">
				{inventory.filter(item => item.category === category).map(item => (
				  <div class="sales_card" key={item.name}>
					<img src={item.img} alt="Avatar" style={{width: "100%"}}></img>
					<div class="cardcontainer">
						<h4><b>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</b></h4>
						<p>{item.qty}</p>
						<input className="invText" type="text" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`qty_${item.name.replace(' ', '_')}`].state} />
					</div>
				  </div>
				))}
        </div>
			  </React.Fragment>
			))}
		  </div>
    
		  <div className="InventoryGroup">
				<button className='dashboard-button' onClick={Final_Call} style={{border:'2px solid black'}}>Review and Submit</button>
		  </div>
      {firstState && (
        <PopUp isOpen={firstState} onClose={Refresh}></PopUp>
      )} 
      
        </div>
    
      );
    }
    
    
    export default OrderInventory;