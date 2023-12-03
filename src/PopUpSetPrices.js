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
                headerText='Set Inventory Prices'
              >
                <div>
                  
                <table>

                <th>Product Name</th>
                <th>Old Cost</th>
                <th>New Cost</th>
                
                <tbody>
                    {itemsWithChange.map(item => {
                        const correspondingInventoryItem = inventory.find(invItem => invItem.name === item.name);
                        return(
                        <tr key={item['name']}>
                            <th>{item['name']}</th>
                            <th>${correspondingInventoryItem.price.toFixed(2)}</th>
                            <th>${item['price'].toFixed(2)}</th>
                        </tr>
                        );
                        })}
                </tbody>
                
                </table>
                <div className='div2'>
                <button onClick={this.handleClick}>
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