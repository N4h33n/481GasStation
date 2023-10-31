import React, {Component} from 'react';
import {Total, SubTotal, Taxes, updateTotal, updateSubTotal, updateTaxes} from "./Variables.js";

class DiscountApplied extends Component{
	
	applyDiscount(){
		let table = document.getElementById("Checkout");
		
		let row = document.createElement("tr");
		
		let c1 = document.createElement("td");
		let c2 = document.createElement("td");
		let c3 = document.createElement("td");
		
		c1.innerText = "1";
		c2.innerText = "Discount";
		c3.innerText = "-$" + (SubTotal * 0.25).toFixed(2);
		
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
		
		updateSubTotal(SubTotal - (SubTotal * 0.25));
		updateTotal(SubTotal + Taxes);
		
		let table2 = document.getElementById("Total");
		let totalDiv = document.getElementById("TotalCost");
		totalDiv.innerText = "$" + Total.toFixed(2);
		
		let table3 = document.getElementById("SubTotal");
		let subTotalDiv = document.getElementById("SubTotalCost");
		subTotalDiv.innerText = "$" + SubTotal.toFixed(2);
	}
	
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<button className="DiscountFinished" onClick={() => {this.props.onClose(); this.applyDiscount()}}>Finish</button>
					
					<div className="AddGas_Div">APPLY DISCOUNT</div>
					<div className="DiscountApplied_Div" id="DiscountApplied_Div">Discount Applied</div>
				</div>
				
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

export default DiscountApplied;