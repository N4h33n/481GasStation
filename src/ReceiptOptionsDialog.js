import React, {Component} from 'react';

class ReceiptOptionsDialog extends Component{

	propaneInCheckout() {
		var table = document.getElementById("Checkout");
		
		var rows = table.rows;
		for (var i = 0; i < table.rows.length; i++) {
			var cols = rows[i].cells;
			
			for (let cell of cols) {
				if (cell.innerText == "Propane") {
					return true;
				}
			}
		}
		return false;
	}
	
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					
					<div className="AddGas_Div">PAYMENT</div>
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