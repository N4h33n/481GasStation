import React, {Component} from 'react';
import {Total, SubTotal, Taxes, updateTotal, updateSubTotal, updateTaxes} from "./Variables.js";

var calculated = 0;
class DisplayAddGas extends Component{
	
	AddPropane = (event) => {
		event.preventDefault();
		this.props.onClose();
		
		var litres = (Number(event.target.Final.value) - Number(event.target.Initial.value))/0.575;
		
		var excise = litres * 4.0/100;
		
		var gst =  ((litres * 1.3) + excise) * 0.05;
		
		var totalTax = excise + gst;
		
		var sub = (litres * 1.3) - totalTax;
		
		let table = document.getElementById("Checkout");
		
		let row = document.createElement("tr");
		
		let c1 = document.createElement("td");
		let c2 = document.createElement("td");
		let c3 = document.createElement("td");
		
		c1.innerText = "1";
		c2.innerText = "Propane Refill";
		c3.innerText = "$" + sub.toFixed(2);
		
		row.appendChild(c1);
		row.appendChild(c2);
		row.appendChild(c3);

		let removeButton = document.createElement("button");
		removeButton.className = "removeButton";
		removeButton.innerText = 'X';
		removeButton.style.fontWeight = "bold";
		removeButton.style.color = "white";
		removeButton.style.backgroundColor = "#FF4F4B";
		removeButton.style.borderStyle = "none";
		removeButton.style.cursor = "pointer";
		row.append(removeButton);
		
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
	
	updatePrice(){
		var propaneForm = document.forms.pform;
		
		var formData = new FormData(propaneForm);
		
		var final1 = formData.get("Initial");
		
		var final2= formData.get("Final");
		
		if(Number(final1) == 0 || Number(final2) == 0 || Number(final1) == null || Number(final2) == null){
			calculated = 0;
			
			let priceDiv = document.getElementById("Price");
		
			priceDiv.innerText = calculated.toFixed(2);
			return;
		}
		
		var litres = (Number(final2) - Number(final1))/0.575;
		
		var excise = litres * 4.0/100;
		
		var gst =  ((litres * 1.3) + excise) * 0.05;
		
		var totalTax = excise + gst;
		
		var sub = (litres * 1.3) - totalTax;
		
		calculated = sub;
		
		if(calculated > 0){
			let priceDiv = document.getElementById("Price");
		
			priceDiv.innerText = calculated.toFixed(2);
		}
		
	}
	
	render(){
		
		let dialog = (
			<div className="overlay">
				<form onSubmit={this.AddPropane} id="pform">
					<div className="GasDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Add</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
						
						<div className="AddGas_Div">ADD PROPANE</div>
						
						<div className="Initial_Div">
							<label for="Initial">Initial Weight (KG): </label>
							<input type="text" id="Initial" name="Initial" placeholder="Eg. 60 or 60.00" onChange={this.updatePrice}/>
						</div>
							
						<div className="Final_Div">	
							<label for="Final">Final Weight (KG): </label>
							<input type="text" id="Final" name="Final" placeholder="Eg. 60 or 60.00" onChange={this.updatePrice}/>
						</div>
						
						<div className="Calculated_Div">
							<div>Calculated Price: $</div>
							<div id="Price" className="Price"></div>
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