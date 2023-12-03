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
		this.props.onClose()
		UpdateInventory();
  };
  
  
    render() {
      return (
		<div>
			<form onSubmit={this.handleClick}>
				<div className="overlay">
					<div className="FuelDialog">
						<div className="AddGas_Div">REVIEW AND SUBMIT</div>
						<table className="Popup_Table">
							<thead className="HeaderRow">
								<th>Item</th>
								<th>Quantity</th>
							</thead>
							<tbody>
								{inv_P.map(item => (
									<tr key={item['name']}>
										<th>{item['name'].charAt(0).toUpperCase() + item['name'].slice(1)}</th>
										<th>{item['qty']} Units</th>
									</tr>
								))}
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