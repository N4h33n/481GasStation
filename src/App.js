import {useState} from 'react';
import './App.css';
import DisplayAddItemManually from './AddItemManuallyDialog';
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
import {showDiscountDialog, showCardDialog, showCashDialog, showReceiptOptions, propaneInCheckout} from './Variables.js';

function App() {
	const [firstState, setFirstState] = useState(false);
	const [secondState, setSecondState] = useState(false);
	const [thirdState, setThirdState] = useState(false);
	const [fourthState, setFourthState] = useState(false);
	const [fifthState, setFifthState] = useState(false);
	const [sixthState, setSixthState] = useState(false);
	const [seventhState, setSeventhState] = useState(false);
	const [eighthState, setEighthState] = useState(false);
	const [ninthState, setNinthState] = useState(false);
	const [tenthState, setTenthState] = useState(false);
	
	
	return (
		<div className="App">
			<Sidebars />
			<div className="navbar"></div>


			<div className="MainBody">
				<div id="hint" className="checkoutHint">?
					<span id="tooltip" className="checkoutToolTip">
						To continue, scan items or click a button on the right of the checkout.
					</span>
				</div>
				<div id="hint" className="gasHint">?
					<span id="tooltip" className="gasToolTip">
						Click this to add gas to the checkout.
					</span>
				</div>
				<div id="hint" className="propaneHint">?
					<span id="tooltip" className="propaneToolTip">
						Click this to add propane to the checkout.
					</span>
				</div>
				<div id="hint" className="discountHint">?
					<span id="tooltip" className="discountToolTip">
						Click this to scan a customer's discount and apply it to checkout.
					</span>
				</div>

				<button className="AddManualItem" onClick={() => setTenthState(true)}>Add Item Manually</button>

				<div className="div1">CHECKOUT</div>
					
				<div className="CheckoutDiv">
					
					<div className="TableDiv">
						<div className="CheckoutTable">
							<table id="Checkout" className="Checkout">
								<tr className='HeaderRow'>
									<th className="Quantity">Quantity</th>
									<th className="Item">Item</th>
									<th className="Cost">Cost</th>
									<th className="Remove"></th>
								</tr>
							</table>
						</div>
						
						<div className="TotalTable">

							
							<div className="SubTotalLabel">Subtotal</div>
							<div id="SubTotalCost" className="SubTotalCost">$0.00</div>
						
						
						
							<div className="TaxesLabel">Taxes</div>
							<div id="TaxesCost" className="TaxesCost">$0.00</div>
						
						
						
							<div className="TotalLabel">Total</div>
							<div id="TotalCost" className="TotalCost">$0.00</div>
							
							

							{/* <table id="SubTotal" className="SubTotal">
								<tr classname="SubTotalRow">
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
							</table> */}
						</div>
					</div>

					<div className="div2">
						<button className="AddGas" onClick={() => setFirstState(true)}>Add Gas</button>
						<button className="AddPropane" onClick={() => setSecondState(true)}>Add Propane</button>
						<button className="ApplyDiscount" onClick={() => setThirdState(true)}>Apply Discount</button>
					</div>
				</div>
			</div>

				
				
				<button className="BeginPayment" onClick={() => setFifthState(true)}>Begin Payment</button>

				<DisplayAddItemManually isOpen={tenthState} onClose={() => setTenthState(false)}/>
				
				<DisplayAddGas isOpen={firstState} onClose={() => setFirstState(false)}/>
				
				<DisplayAddPropane isOpen={secondState} onClose={() => setSecondState(false)}/>
				
				<DisplayApplyDiscount isOpen={thirdState} onClose={() => {setThirdState(false); if(showDiscountDialog == true){setFourthState(true)}}}/>
				
				<DiscountApplied isOpen={fourthState} onClose={() => {setFourthState(false)}}/>
				
				<DisplayBeginPayment isOpen={fifthState} onClose={() => {setFifthState(false); if(showCardDialog == true){setSixthState(true)}; if(showCashDialog == true){setSeventhState(true)}}}/>
				
				<CardDialog isOpen={sixthState} onClose={() => {setSixthState(false); if(showReceiptOptions == true){
					if (propaneInCheckout()){setNinthState(true)}
					else{setEighthState(true)}
					}}}/>
				
				<CashDialog isOpen={seventhState} onClose={() => {setSeventhState(false); if(showReceiptOptions == true){
					if (propaneInCheckout()){setNinthState(true)}
					else{setEighthState(true)}
					}}}/>
				
				<ReceiptOptionsDialog isOpen={eighthState} onClose={() => {setEighthState(false); setNinthState(true)}}/>
				
				<TransactionCompleteDialog isOpen={ninthState} onClose={() => {setNinthState(false); window.location.reload()}}/>	
				
		</div>
	);
}



export default App;
