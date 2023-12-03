import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t } from './OrderFuel.js'; 
import {Octane87_O, Octane89_O, Octane93_O, Diesel_O, Propane_O} from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';

class OrderFuel_PopUp extends React.Component {

  
  ChangeStatus = (event) => {
		this.props.onClose();
	};

handleClick = (event) => {
// UpdateFuel();
};


  render() {
	let tax_amount = ((Propane_O*2) + (Diesel_O) + (Octane93_O*2.2) + (Octane87_O*1.4) + (Octane89_O*1.8))*.05
	let total_amount = ((Propane_O*2) + (Diesel_O) + (Octane93_O*2.2) + (Octane87_O*1.4) + (Octane89_O*1.8))*1.05
	let a = tax_amount.toFixed(2);
	let b = total_amount.toFixed(2);
    return (
        
      <div>
        {/* <div className='div2'>
        <button onClick={this.openBox}>Review and Update </button>
        </div> */}
		
        <form onSubmit={this.ChangeStatus}>
            <div className="overlay">
				<div className="FuelDialog2">
				  <div>
					  <div className="AddGas_Div">ORDER AND SUBMIT</div>
					  <table className="Popup_Table">
						<thead className="HeaderRow">
							<th>Fuel</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total Cost</th>
						</thead>
					  <tr>
						<th>Octane 87</th>
						<th>$1.40 per Litre</th>
						<th> {Octane87_O} Units</th>
						<th> ${(Octane87_O*1.4).toFixed(2)}</th>
					  </tr>
					  <tr>
						<th>Octane 89</th>
						<th>$1.80 per Litre</th>
						<th> {Octane89_O} Units</th>
						<th> ${(Octane89_O*1.8).toFixed(2)}</th>
					  </tr>
					  <tr>
						<th>Octane 93</th>
						<th>$2.20 per Litre</th>
						<th> {Octane93_O} Units</th>
						<th> ${(Octane93_O*2.2).toFixed(2)}</th>
					  </tr>
					  <tr>
						<th>Diesel</th>
						<th>$1.00 per Litre</th>
						<th> {Diesel_O} Units</th>
						<th> ${(Diesel_O).toFixed(2)}</th>
					  </tr>
					  <tr>
						<th>Propane</th>
						<th>$2.00 per Litre</th>
						<th> {Propane_O} Units</th>
						<th> ${(Propane_O*2).toFixed(2)}</th>
					  </tr>
					  <thead className="HeaderRow">
							<th></th>
							<th></th>
							<th>Total</th>
							<th></th>
						</thead>
						<tr>
						<th></th>
						<th></th>
						<th> Tax: </th>
						<th> ${a}</th>
					  </tr>

					  <tr>
						<th></th>
						<th></th>
						<th> Total: </th>
						<th> ${b}</th>
					  </tr>

					  </table>
					
					<div className="Complete_Cancel_Div_Fuel">
						<button type="submit" className="Complete">Submit</button>
						<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
					</div>

				</div>
              
			</div>
			</div>
        </form>
      </div>
    )
  }
}

export default OrderFuel_PopUp
