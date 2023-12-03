import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { itemStates } from './Set_Prices.js'; 
import { inventory, inv_P, UpdatePrices } from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';

class PopUp extends React.Component {

  
    ChangeStatus = (event) => {
      
  this.props.onClose();
  
  };
  
  handleClick = (event) => {
  UpdatePrices();
  };
  
  
    render() {
    const itemsWithChange = inv_P.filter(item => item.price > 0);

      return (
          
        <div>
          {/* <div className='div2'>
          <button onClick={this.openBox}>Review and Update </button>
          </div> */}
          <form onSubmit={this.ChangeStatus}>
                <div className="overlay">
				<div className="FuelDialog">
				<div className="AddGas_Div">REVIEW AND SUBMIT</div>
                <table className="Popup_Table">
                <thead className="HeaderRow">
					<th>Product Name</th>
					<th>Old Cost</th>
					<th>New Cost</th>
				</thead>
				
                <tbody>
                    {itemsWithChange.map(item => {
                        const correspondingInventoryItem = inventory.find(invItem => invItem.name === item.name);
                        return(
                        <tr key={item['name']}>
                            <th>{item['name'].charAt(0).toUpperCase() + item['name'].slice(1)}</th>
                            <th>${correspondingInventoryItem.price.toFixed(2)}</th>
                            <th>${item['price'].toFixed(2)}</th>
                        </tr>
                        );
                        })}
                </tbody>
                
                </table>
                <div className="Complete_Cancel_Div_Fuel">
					<button type="submit" className="Complete">Submit</button>
					<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
				</div>
                </div>
				</div>
          
          </form>
        </div>
      )
    }
  }
  
  export default PopUp