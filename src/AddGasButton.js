import React, {Component} from 'react';
import {Total, SubTotal, Taxes, Pump_1, Pump_2, Pump_3, Pump_4, Pump_5, Pump_6, updateTotal, updateSubTotal, updateTaxes} from "./Variables.js";

class DisplayAddGas extends Component{
	
	AddGas = (event) => {
		event.preventDefault();
		this.props.onClose();
		
		var litres = Number(event.target.Pay_Amount.value)/1.299;
		
		var excise = litres * 10.0/100;
		
		var gst =  (Number(event.target.Pay_Amount.value) + excise) * 0.05;
		
		var totalTax = excise + gst;
		
		var sub =  Number(event.target.Pay_Amount.value) - totalTax;
		
		let table = document.getElementById("Checkout");
		
		let row = document.createElement("tr");
		
		let c1 = document.createElement("td");
		let c2 = document.createElement("td");
		let c3 = document.createElement("td");
		
		c1.innerText = "1";
		c2.innerText = event.target.Gas.value;
		c3.innerText = "$" + sub.toFixed(2);
		
		row.appendChild(c1);
		row.appendChild(c2);
		row.appendChild(c3);
		
		table.appendChild(row);
		
		updateTotal(Total + sub + totalTax);
		updateSubTotal(SubTotal + sub);
		updateTaxes(Taxes + totalTax);
		
		let table2 = document.getElementById("SubTotal");
		
		let column = document.getElementById("SubTotalCost");
		
		column.innerText = "$" + SubTotal.toFixed(2);
		
		let table3 = document.getElementById("Taxes");
		
		let column2 = document.getElementById("TaxesCost");
		
		column2.innerText = "$" + Taxes.toFixed(2);
		
		let table4 = document.getElementById("Total");
		
		let column3 = document.getElementById("TotalCost");
		
		column3.innerText = "$" + Total.toFixed(2);
		
	}
	
	render(){
		let dialog = (
			<div className="overlay">
				<form onSubmit={this.AddGas}>
					<div className="GasDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Complete</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
						
						<div className="AddGas_Div">Add Gas</div>
						<div className="Pump_Div">
							<div className="Pump_label">Select Pump</div>
							<div className="Pump_Selection">
								<input type="radio" id="pump1" name="Pump" value="Pump 1" />
								<label for="pump1">Pump 1 ({Pump_1})</label>
								<input type="radio" id="pump2" name="Pump" value="Pump 2" />
								<label for="pump2">Pump 2 ({Pump_2})</label>
								<input type="radio" id="pump3" name="Pump" value="Pump 3" />
								<label for="pump3">Pump 3 ({Pump_3})</label>
								<br/>
								
								<div className="Second_Pumps">
									<input type="radio" id="pump4" name="Pump" value="Pump 4" />
									<label for="pump4">Pump 4 ({Pump_4})</label>
									<input type="radio" id="pump5" name="Pump" value="Pump 5" />
									<label for="pump5">Pump 5 ({Pump_5})</label>
									<input type="radio" id="pump6" name="Pump" value="Pump 6" />
									<label for="pump6">Pump 6 ({Pump_6})</label>
								</div>
							</div>
						</div>
							
						<div className="Gas_Div">	
							<div className="Gas_Label">Select Fuel Type</div>
							<div className="Gas_Selection">
								<input type="radio" id="Regular" name="Gas" value="Regular" />
								<label for="Regular">Regular</label>
								<input type="radio" id="Premium" name="Gas" value="Premium" />
								<label for="Premium">Premium</label>
								<input type="radio" id="Nitro" name="Gas" value="Nitro" />
								<label for="Nitro">Nitro</label>
								<input type="radio" id="Diesel" name="Gas" value="Diesel" />
								<label for="Diesel">Diesel</label>
							</div>
							
						</div>
						
						<div className="Pay_Div">
							<label for="Pay Amount">Pay Amount: $</label>
							<input type="text" id="Pay Amount" name="Pay_Amount" />
						</div>
						
						
						
					</div>
				</form>
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayAddGas;