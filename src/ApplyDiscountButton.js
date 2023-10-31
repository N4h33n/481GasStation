import React, {Component} from 'react';
import {updateDiscountDialog, remTime2, setTime2} from './Variables.js';

class DisplayApplyDiscount extends Component{
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<div className="Complete_Cancel_Div">
						<button className="Cancel_Discount" onClick={() => {updateDiscountDialog(false); this.props.onClose()}}>Cancel</button>
					</div>
					
					<div className="AddGas_Div">Apply Discount</div>
					<div className="Barcode_Div" id="Barcode_Div">Please Scan Barcode</div>
				</div>
			</div>
		);
		
		if(! this.props.isOpen){
			clearTimeout(remTime2());
			dialog = null;
		}
		
		else{
			updateDiscountDialog(true);
			setTime2(setTimeout(this.props.onClose, 3000));
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayApplyDiscount;