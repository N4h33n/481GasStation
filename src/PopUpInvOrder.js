import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { itemStates } from './Order_Inventory.js'; 
import { inventory, inv_P, UpdateInventory } from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';


class PopUp extends React.Component {

  
    ChangeStatus = (event) => {
      
  this.props.onClose();
  
  };
  
  
  
    render() {


    const itemsWithQty = inv_P.filter(item => item.qty > 0);
    const totalCost = itemsWithQty.reduce((acc, item) => acc + item.qty * item.price, 0);
    const tax = 0.05 * totalCost;
    const finalTotal = totalCost + tax;

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
					<th>Item</th>
					<th></th>
					<th>Cost per Item</th>
					<th>Quantity</th>
					<th>Total</th>
				</thead>
                <tbody>
                    {itemsWithQty.map(item => (
                        <tr key={item['name']}>
                            <th>{item['name'].charAt(0).toUpperCase() + item['name'].slice(1)}</th>
                            <th>{item['category']}</th>
                            <th>${item['price'].toFixed(2)} Cost</th>
                            <th>{item['qty']} Units</th>
                            <th>${(item['qty'] * item['price']).toFixed(2)}</th>
                        </tr>
                    ))}

                    <tr>
                        <th colSpan="4">Tax:</th>
                        <th>${tax.toFixed(2)}</th>
                        </tr>
                        <tr>
                        <th colSpan="4">Total:</th>
                        <th>${finalTotal.toFixed(2)}</th>
                    </tr>

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