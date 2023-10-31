import React, {Component} from 'react';

class TransactionCompleteDialog extends Component{
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<button className="TransactionFinished" onClick={this.props.onClose}>Finish</button>
					
					<div className="AddGas_Div">PAYMENT</div>
					<div className="Transaction_Div" id="Transaction_Div">Transaction Complete</div>
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

export default TransactionCompleteDialog;