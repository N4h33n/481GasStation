import React, {Component} from 'react';
import {Total, SubTotal, Taxes, Pump_1, Pump_2, Pump_3, Pump_4, Pump_5, Pump_6, updateTotal, updateSubTotal, updateTaxes, Checkout, addItem, removeItem, getIndex} from "./Variables.js";

class DisplayAddGas extends Component{
	
	AddGas = (event) => {
		event.preventDefault();
		this.props.onClose();
		
		var litres = Number(event.target.Pay_Amount.value)/1.299;
		
		var excise = litres * 10.0/100;
		
		var gst =  (Number(event.target.Pay_Amount.value) + excise) * 0.05;
		
		var totalTax = excise + gst;
		
		var sub =  Number(event.target.Pay_Amount.value) - totalTax;
		
		var radio = document.getElementsByName("Gas");
		var type = "Regular"
		
		for(let i = 0; i < radio.length; i++){
			if(radio[i].checked){
				type = radio[i].value;
			}
		}
		
		var radioPump = document.getElementsByName("Pump");
		var pump = "pump1";
		
		for(let i = 0; i < radioPump.length; i++){
			if(radioPump[i].checked){
				pump = radioPump[i].value;
			}
		}
		
		addItem({'name': type, 'quantity': litres, 'cost': sub, 'totalTax': totalTax}, pump);
		
		updateTotal(Total + sub + totalTax);
		updateSubTotal(SubTotal + sub);
		updateTaxes(Taxes + totalTax);
	}
	
	render(){
		let dialog = (
			<div className="overlay">
				<form onSubmit={this.AddGas}>
					<div className="GasDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Add</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
						
						<div className="AddGas_Div">ADD GAS</div>
						<div className="Pump_Div">
							<div className="Pump_label">Select Pump</div>
							<div className="Pump_Selection">

								<div className="pump1Div">
									<input type="radio" id="pump1" name="Pump" value="pump1" />
									<label for="pump1">Pump 1 ({Pump_1})</label>
								</div>
								
								<div className="pump2Div">
									<input type="radio" id="pump2" name="Pump" value="pump2" />
									<label for="pump2">Pump 2 ({Pump_2})</label>
								</div>
								
								<div className="pump3Div"> 
									<input type="radio" id="pump3" name="Pump" value="pump3" />
									<label for="pump3">Pump 3 ({Pump_3})</label>
								</div>
								
								<div className="pump4Div">
									<input type="radio" id="pump4" name="Pump" value="pump4" />
									<label for="pump4">Pump 4 ({Pump_4})</label>
								</div>
								
								<div className="pump5Div">
									<input type="radio" id="pump5" name="Pump" value="pump5" />
									<label for="pump5">Pump 5 ({Pump_5})</label>
								</div>
								
								<div className="pump6Div">
									<input type="radio" id="pump6" name="Pump" value="pump6" />
									<label for="pump6">Pump 6 ({Pump_6})</label>
								</div>
							</div>
						</div>
							
						<div className="Gas_Div">	
							<div className="Gas_Label">Select Fuel Type</div>
							<div className="Gas_Selection">
								<div className="RegularDiv">
									<input type="radio" id="Regular" name="Gas" value="Regular" />
									<label for="Regular">Regular</label>
								</div>
								
								<div className="PremiumDiv">
									<input type="radio" id="Premium" name="Gas" value="Premium" />
									<label for="Premium">Premium</label>
								</div>
								
								<div className="NitroDiv">
									<input type="radio" id="Nitro" name="Gas" value="Nitro" />
									<label for="Nitro">Nitro</label>
								</div>
								
								<div className="DieselDiv">
									<input type="radio" id="Diesel" name="Gas" value="Diesel" />
									<label for="Diesel">Diesel</label>
								</div>
								
							</div>
							
						</div>
						
						<div className="Pay_Div">
							<label for="Pay Amount">Pay Amount: $</label>
							<input type="text" id="Pay Amount" name="Pay_Amount" placeholder="Enter amount using keyboard - Eg. 60 or 60.00"/>
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