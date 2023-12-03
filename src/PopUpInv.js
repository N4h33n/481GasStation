import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { itemStates } from './Update_Inventory.js'; 
import { inventory, inv_P, UpdateInventory } from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';

class PopUp extends React.Component {

  
    ChangeStatus = (event) => {
      
  this.props.onClose();
  
  };
  
  handleClick = (event) => {
  UpdateInventory();
  };
  
  
    render() {
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
                headerText='Review Inventory Update'
              >
                <div>
                  
                <table>
                
                <tbody>
                    {inv_P.map(item => (
                        <tr key={item['name']}>
                            <th>{item['name']}</th>
                            <th>{item['category']}</th>
                            <th>{item['quantity']} Units</th>
                        </tr>
                    ))}
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