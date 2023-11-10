import React, {Component} from 'react';
import {updateReceiptDialog, Total, removeTime, setTimeID, propaneInCheckout} from './Variables.js';

class CardDialog extends Component{
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<div className="Complete_Cancel_Div">
						<button className="Cancel" onClick={() => {updateReceiptDialog(false); this.props.onClose()}}>Back</button>
					</div>
					<div className="AddGas_Div">DEBIT/CREDIT CARD</div>
					<div className="Amount">${Total.toFixed(2)} due</div>
					<div className="Terminal_Div" id="Terminal_Div">Waiting for Debit/Credit Card Terminal</div>
				</div>
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

export default CardDialog;