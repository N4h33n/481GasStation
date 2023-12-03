import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { itemStates } from './order_inventory.js'; 
import { inventory, inv_P, UpdateInventory } from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';


class PopUp extends React.Component {

  
    ChangeStatus = (event) => {
      
  this.props.onClose();
  
  };
  
  
  
    render() {


    const itemsWithquantity = inv_P.filter(item => item.quantity > 0);
    const totalCost = itemsWithquantity.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const tax = 0.05 * totalCost;
    const finalTotal = totalCost + tax;

      return (
          
        <div>
          {/* <div className='div2'>
          <button onClick={this.openBox}>Review and Update </button>
          </div> */}
          <form onSubmit={this.ChangeStatus}>
            <>
              <ReactDialogBox
                closeBox={this.closeBox}
                modalWidth='60%'
               
               // color: rgb(89, 170, 236);
                headerBackgroundColor='rgb(89, 170, 236)'
                headerTextColor='white'
                
                headerHeight='65'
                closeButtonColor='Black'
                bodyBackgroundColor='lightgrey'
                bodyTextColor='black'
                bodyHeight='300px'
                headerText='Review Inventory Order'
              >
                <div>
                  
                <table>
                
                <tbody>
                    {itemsWithquantity.map(item => (
                        <tr key={item['name']}>
                            <th>{item['name']}</th>
                            <th>{item['category']}</th>
                            <th>${item['price'].toFixed(2)} Cost</th>
                            <th>{item['quantity']} Units</th>
                            <th>${(item['quantity'] * item['price']).toFixed(2)}</th>
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
                <div className='div2'>
                <button>
                  Submit Update
              </button>
              </div>
                </div>
                
  
              </ReactDialogBox>
            </>
          
          </form>
        </div>
      )
    }
  }
  
  export default PopUp