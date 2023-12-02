import {useState, useEffect, useRef} from 'react';
import './App.css';
import DisplayAddItemManually from './AddItemManuallyDialog';
import DisplayAddGas from './AddGasButton.js';
import DisplayAddPropane from './AddPropaneButton.js';
import DisplayApplyDiscount from './ApplyDiscountButton.js';
import DisplayBeginPayment from './BeginPaymentButton.js';
import DiscountApplied from "./DiscountAppliedDialog.js";
import Sidebars from "./Sidebars.js";
import Combined from './Combined.js';
import {showDiscountDialog, showCardDialog, showCashDialog, showReceiptOptions, propaneInCheckout, clearCheckout, addItem, Total, SubTotal, Taxes, 
updateTotal, updateSubTotal, updateTaxes, applyDiscount} from './Variables.js';

function App() {
	const [firstState, setFirstState] = useState('');
	const [secondState, setSecondState] = useState('');
	const [thirdState, setThirdState] = useState('');
	const [fourthState, setFourthState] = useState('');
	const [fifthState, setFifthState] = useState('');
	const [tenthState, setTenthState] = useState('');
	
	const handleKeyDiscount = (event) =>{
		if(event.key == 'q'){
			if(applyDiscount(1, 3, "Discount: 3 bags of Cheetos for $10", "Cheetos")){
				setThirdState(false);
				setFourthState(true);
			}
		}
		
		if(event.key == 'w'){
			if(applyDiscount(2, 2, "Discount: Buy 2 2L Sodas, Get 1 Free", "2l soda")){
				setThirdState(false);
				setFourthState(true);
			}
		}
		
		if(event.key == 'e'){
			setThirdState(false);
			setFourthState(true);
		}
		
		if(event.key == 'r'){
			setThirdState(false);
			setFourthState(true);
		}
		
		if(event.key == 't'){
			setThirdState(false);
			applyDiscount(5, 0, "10% off of Entire Purchase", "none");
			setFourthState(true);
		}
	}
	
	document.addEventListener('keydown', (event) =>{
		event.stopImmediatePropagation();
		if(event.key == 'z'){
			addItem({'name': 'Cheetos', 'quantity': 1, 'cost': 4.30, 'totalTax': 0.215}, "none");
			updateTotal(Total + 4.3 + 0.215);
			updateSubTotal(SubTotal + 4.3);
			updateTaxes(Taxes + 0.215);
		}
		
		else if(event.key =='x'){
			addItem({'name': '2l soda', 'quantity': 1, 'cost': 3.00, 'totalTax': 0.15}, "none");
			updateTotal(Total + 3.00 + 0.15);
			updateSubTotal(SubTotal + 3.00);
			updateTaxes(Taxes + 0.15);
		}
		
		else if(event.key =='c'){
			
		}
		
		else if(event.key =='v'){
			
		}
		
		else if(event.key =='b'){
			
		}
	}, false);
	
	useEffect(() => {
		if(thirdState == true){
			document.addEventListener('keyup', handleKeyDiscount);
		}
		
		return () =>{
			document.removeEventListener('keyup', handleKeyDiscount);
		};
	}, [thirdState])
	
	return (
		<div className="App">
			<Sidebars />
			<div className="navbar"></div>

			<div className="MainBody">
				<div className="TopDiv">
					<div className="CheckoutLabel">
						<h1>Checkout</h1>
						<div className="testHint">?
							<span className="testToolTip">
							Begin by either scanning an item or clicking any side button.
							</span>
						</div>
					</div>
				</div>
				
				<div className="MiddleDiv">

				</div>
				
				<div className="CheckoutDiv">
					<div className="TableDiv">
						<button className="AddManualItem" onClick={() => setTenthState(true)}>Add Item Manually</button>
						<div className="CheckoutTable">
							<table id="Checkout" className="Checkout">
								<thead>
									<tr className='HeaderRow'>
										<th className="Quantity">Quantity</th>
										<th className="Item">Item</th>
										<th className="Cost">Cost</th>
										<th className="Remove"></th>
									</tr>
								</thead>
							</table>
						</div>
						
						<div className="TotalTable">
							
							<div className="SubTotalLabel">Subtotal</div>
							<div id="SubTotalCost" className="SubTotalCost">$0.00</div>
						
							<div className="TaxesLabel">Taxes</div>
							<div id="TaxesCost" className="TaxesCost">$0.00</div>
						
							<div className="TotalLabel">Total</div>
							<div id="TotalCost" className="TotalCost">$0.00</div>
						</div>
					</div>

					<div className="SideButtonDiv">
						<button className="AddGas" onClick={() => setFirstState(true)}>Add Gas
							<div className="testHint">?
								<span className="testToolTip">
								Click this to add gasoline to the checkout.
								</span>
							</div>
						</button>
						<button className="AddPropane" onClick={() => setSecondState(true)}>Add Propane
						<div className="testHint">?
								<span className="testToolTip">
									Click this to add propane to the checkout.
								</span>
							</div>
						</button>
						<button className="ApplyDiscount" onClick={() => setThirdState(true)}>Apply Discount
							<div className="testHint">?
								<span className="testToolTip">
									Click this to scan a customer's discount and apply it to checkout.
								</span>
							</div>
						</button>
					</div>
				</div>

				<div className="BeginPaymentDiv">
					<button className="BeginPayment" onClick={() => {setFifthState(true)}}>Begin Payment</button>

				</div>
			</div>

			
			<DisplayAddItemManually isOpen={tenthState} onClose={() => setTenthState(false)}/>
			
			<DisplayAddGas isOpen={firstState} onClose={() => setFirstState(false)}/>
			
			<DisplayAddPropane isOpen={secondState} onClose={() => setSecondState(false)}/>
			
			<DisplayApplyDiscount isOpen={thirdState} onClose={() => {setThirdState(false)}}/>
			
			<DiscountApplied isOpen={fourthState} onClose={() => {setFourthState(false)}}/>
			
			<Combined isOpen={fifthState} onClose={() => {setFifthState(false); }}/>
			
		</div>
	);
}



export default App;
