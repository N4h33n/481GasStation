import React, {Component} from 'react';
import {updateReceiptDialog, Total, removeTime, setTimeID} from './Variables.js';

class CardDialog extends Component{
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<button className="X_Button" onClick={() => {updateReceiptDialog(false); this.props.onClose()}}>X</button>
					
					<div className="AddGas_Div">Debit/Credit Card</div>
					<div className="Amount">${Total.toFixed(2)} due</div>
					<div className="Terminal_Div" id="Terminal_Div">Waiting for Terminal</div>
				</div>
			</div>
		);
		
		if(! this.props.isOpen){
			clearTimeout(removeTime());
			dialog = null;
		}
		
		else{
			updateReceiptDialog(true);
			setTimeID(setTimeout(this.props.onClose, 3000));
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default CardDialog;