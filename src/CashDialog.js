import React, {Component} from 'react';
import {updateReceiptDialog, Total} from './Variables.js';

var calculated = 0;
class CashDialog extends Component{
	
	//Add Cash Info Verification
	verifyInfo = (event) =>{
		event.preventDefault();
		updateReceiptDialog(true);
		this.props.onClose();
	}
	
	updateChange(){
		var changeForm = document.forms.cform;
		
		var formData = new FormData(changeForm);
		
		var cash = formData.get("Cash");
		
		if(Number(cash) == 0 || Number(cash) == null || Number(cash) < Total){
			calculated = 0;
			
			let changeDiv = document.getElementById("Change");
		
			changeDiv.innerText = calculated.toFixed(2);
			
			return;
		}
		
		calculated = cash - Total;
		
		if(calculated > 0){
			let changeDiv = document.getElementById("Change");
			
			changeDiv.innerText = calculated.toFixed(2);
		}
	}
	
	render(){
		
		let dialog = (
			<div className="overlay">
				<form onSubmit={this.verifyInfo} id="cform">
					<div className="GasDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Complete</button>
							<button className="Cancel" onClick={() => {updateReceiptDialog(false); this.props.onClose()}}>Back</button>
						</div>
						
						<div className="AddGas_Div">CASH</div>
						
						<div className="Amount">${Total.toFixed(2)} due</div>
						
						<div className="Cash_Received">
							<label for="Cash">Cash Received: $ </label>
							<input type="text" id="Cash" name="Cash" onChange={this.updateChange}/>
						</div>
						
						<div className="Change_Div">
							<div>Change Due: $</div>
							<div id="Change" className="Change"></div>
						</div>
						
					</div>
				</form>
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			updateReceiptDialog(true);
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default CashDialog;