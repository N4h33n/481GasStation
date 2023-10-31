import React, {Component} from 'react';

class ReceiptOptionsDialog extends Component{
	
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					
					<div className="AddGas_Div">Payment</div>
					<div className="Transaction_Div" id="Transaction_Div">Transaction Complete</div>
					
					<div className="Receipt_Options">
						<button className="Print_Receipt" onClick={this.props.onClose}>Print Receipt</button>
						<button className="Email_Receipt" onClick={this.props.onClose}>E-Mail Receipt</button>
						<button className="No_Receipt" onClick={this.props.onClose}>No Receipt</button>
					</div>
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

export default ReceiptOptionsDialog;