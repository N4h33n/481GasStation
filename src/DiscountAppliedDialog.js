import React, {Component} from 'react';
import {Total, SubTotal, Taxes, updateTotal, updateSubTotal, updateTaxes} from "./Variables.js";

class DiscountApplied extends Component{
	
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<button className="DiscountFinished" onClick={() => {this.props.onClose()}}>Finish</button>
					
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