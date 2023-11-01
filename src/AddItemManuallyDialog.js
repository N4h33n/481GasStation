import React, {Component} from 'react';
import {Total, SubTotal, Taxes, updateTotal, updateSubTotal, updateTaxes, inventory, Checkout, addItem, removeItem, getIndex} from './Variables.js';

var calculated = 0;
class DisplayAddItemManually extends Component {
    AddItem = (event) =>{
		event.preventDefault();
		this.props.onClose();
		
		var subPrice = 0;
		
		for(let i = 0; i < inventory.length; i++){
			if(event.target.ItemName.value.toLowerCase() == inventory[i].name){
				subPrice = Number(event.target.Quantity.value) * Number(inventory[i].price);
			}
		}
		
		var totalTax = subPrice * 0.05;
		
		let table = document.getElementById("Checkout");
		
		let row = document.createElement("tr");
		
		let c1 = document.createElement("td");
		let c2 = document.createElement("td");
		let c3 = document.createElement("td");
		
		c1.innerText = Number(event.target.Quantity.value);
		c2.innerText = event.target.ItemName.value;
		c3.innerText = "$" + subPrice.toFixed(2);
		
		row.appendChild(c1);
		row.appendChild(c2);
		row.appendChild(c3);
		
		addItem({'name': event.target.ItemName.value, 'quantity': event.target.Quantity.value, 'cost': subPrice});

		let removeButton = document.createElement("button");
		removeButton.className = "removeButton";
		removeButton.innerText = 'X';
		removeButton.style.fontWeight = "bold";
		removeButton.style.color = "white";
		removeButton.style.backgroundColor = "#FF4F4B";
		removeButton.style.borderStyle = "none";
		removeButton.style.cursor = "pointer";
		removeButton.onclick = function(){
			table.deleteRow(getIndex(event.target.ItemName.value) + 1);
			removeItem(getIndex(event.target.ItemName.value));
			updateTotal(Total - (subPrice + totalTax)); 
			updateSubTotal(SubTotal - subPrice); 
			updateTaxes(Taxes - totalTax)
		};
		
		row.append(removeButton);
		
		table.appendChild(row);
		
		updateTotal(Total + subPrice + totalTax);
		updateSubTotal(SubTotal + subPrice);
		updateTaxes(Taxes + totalTax);
	}
	
	updatePrice(){
		var itemForm = document.forms.iform;
		
		var formData = new FormData(itemForm);
		
		var quantity = formData.get("Quantity");
		
		var itemName= formData.get("ItemName");
		
		if(Number(quantity) == 0 || Number(quantity) == null || Number(itemName) == null){
			calculated = 0;
			
			let priceDiv = document.getElementById("IndividualPrice");
			priceDiv.innerText = calculated.toFixed(2);
			
			return;
		}
		
		for(let i = 0; i < inventory.length; i++){
			if(itemName.toLowerCase() == inventory[i].name){
				calculated = Number(quantity) * Number(inventory[i].price);
			}
		}
		
		
		if(calculated > 0){
			let priceDiv = document.getElementById("IndividualPrice");
		
			priceDiv.innerText = calculated.toFixed(2);
		}
	}
	
    render(){
        let dialog = (
            <div className="overlay">
                <form onSubmit={this.AddItem} id="iform">
					<div className="AddItemManuallyDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Add</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
						
						<div className="AddGas_Div">ADD ITEM MANUALLY</div>
						
                        <div className="AddItemManuallyInputs">
                            <div className="Quantity_Div">
                                <label for="Quantity">Quantity: </label>
                                <input type="text" id="Quantity" name="Quantity" placeholder="Eg. 60" onChange={this.updatePrice}/>
                            </div>

                            <div className="Item_Div">
                                <label for="ItemName">Item Name: </label>
                                <input type="text" id="ItemName" name="ItemName" placeholder="Eg. 2L Soda" onChange={this.updatePrice}/>
                            </div>
                                
                            <div className="IndividualPrice_Div">	
                                <div>Calculated Price: $</div>
                                <div id="IndividualPrice" className="IndividualPrice"></div>
                            </div>
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

export default DisplayAddItemManually;