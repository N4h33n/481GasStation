import {useState} from 'react';
import './App.css';
import DisplayAddGas from './AddGasButton.js';
import DisplayAddPropane from './AddPropaneButton.js';
import DisplayApplyDiscount from './ApplyDiscountButton.js';
import DisplayBeginPayment from './BeginPaymentButton.js';
import DiscountApplied from "./DiscountAppliedDialog.js";
import CardDialog from "./CardDialog.js";
import Sidebars from "./Sidebars.js";
import CashDialog from "./CashDialog.js";
import ReceiptOptionsDialog from "./ReceiptOptionsDialog.js";
import TransactionCompleteDialog from "./TransactionCompleteDialog.js";
import {showDiscountDialog, showCardDialog, showCashDialog, showReceiptOptions} from './Variables.js';

const App = () => {
	const [firstState, setFirstState] = useState(false);
	const [secondState, setSecondState] = useState(false);
	const [thirdState, setThirdState] = useState(false);
	const [fourthState, setFourthState] = useState(false);
	const [fifthState, setFifthState] = useState(false);
	const [sixthState, setSixthState] = useState(false);
	const [seventhState, setSeventhState] = useState(false);
	const [eighthState, setEighthState] = useState(false);
	const [ninthState, setNinthState] = useState(false);
	
	
	return (
		<div className="App">		
			<div className="div1">Checkout</div>
				
				<div className="div2">
					<button className="AddGas" onClick={() => setFirstState(true)}>Add Gas</button>
					<button className="AddPropane" onClick={() => setSecondState(true)}>Add Propane</button>
					<button className="ApplyDiscount" onClick={() => setThirdState(true)}>Apply Discount</button>
				</div>
				
				<button className="BeginPayment" onClick={() => setFifthState(true)}>Begin Payment</button>
				
				

				<DisplayAddGas isOpen={firstState} onClose={() => setFirstState(false)}/>
				
				<DisplayAddPropane isOpen={secondState} onClose={() => setSecondState(false)}/>
				
				<DisplayApplyDiscount isOpen={thirdState} onClose={() => {setThirdState(false); if(showDiscountDialog == true){setFourthState(true)}}}/>
				
				<DiscountApplied isOpen={fourthState} onClose={() => {setFourthState(false)}}/>
				
				<DisplayBeginPayment isOpen={fifthState} onClose={() => {setFifthState(false); if(showCardDialog == true){setSixthState(true)}; if(showCashDialog == true){setSeventhState(true)}}}/>
				
				<CardDialog isOpen={sixthState} onClose={() => {setSixthState(false); if(showReceiptOptions == true){setEighthState(true)}}}/>
				
				<CashDialog isOpen={seventhState} onClose={() => {setSeventhState(false); if(showReceiptOptions == true){setEighthState(true)}}}/>
				
				<ReceiptOptionsDialog isOpen={eighthState} onClose={() => {setEighthState(false); setNinthState(true)}}/>
				
				<TransactionCompleteDialog isOpen={ninthState} onClose={() => {setNinthState(false); window.location.reload()}}/>
				
				<div className="CheckoutTable">
					<table id="Checkout" className="Checkout">
						<tr>
							<th className="Quantity">Quantity</th>
							<th className="Item">Item</th>
							<th className="Cost">Cost</th>
						</tr>
					</table>
				</div>
				
				<div className="TotalTable">
					<table id="SubTotal" className="SubTotal">
						<tr>
							<th className="SubTotalLabel">SubTotal</th>
							<th id="SubTotalCost" className="SubTotalCost">$0.00</th>
						</tr>
					</table>
				
					<table id="Taxes" className="Taxes">
						<tr>
							<th className="TaxesLabel">Taxes</th>
							<th id="TaxesCost" className="TaxesCost">$0.00</th>
						</tr>
					</table>
				
					<table id="Total" className="Total">
						<tr>
							<th className="TotalLabel">Total</th>
							<th id="TotalCost" className="TotalCost">$0.00</th>
						</tr>
					</table>
				</div>
				
		</div>
	);
}



export default App;
