import {useState, useEffect} from 'react';
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
import {showDiscountDialog, showCardDialog, showCashDialog, showReceiptOptions, propaneInCheckout, clearCheckout, addItem, Total, SubTotal, Taxes, 
updateTotal, updateSubTotal, updateTaxes, applyDiscount} from './Variables.js';

function App() {
	const [firstState, setFirstState] = useState('');
	const [secondState, setSecondState] = useState('');
	const [thirdState, setThirdState] = useState('');
	const [fourthState, setFourthState] = useState('');
	const [fifthState, setFifthState] = useState('');
	const [sixthState, setSixthState] = useState('');
	const [seventhState, setSeventhState] = useState('');
	const [eighthState, setEighthState] = useState('');
	const [ninthState, setNinthState] = useState('');
	const [tenthState, setTenthState] = useState('');
	
	const handleKeyEnter = (event) =>{
		if(event.key == 'Enter'){
			setSixthState(false);
			if (propaneInCheckout()){setNinthState(true)}
			else{setEighthState(true)}
		}
	}
	
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
		if(sixthState == true){
			document.addEventListener('keypress', handleKeyEnter);
		}
		
		return () =>{
			document.removeEventListener('keypress', handleKeyEnter);
		};
	}, [sixthState])
	
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
			
			<DisplayApplyDiscount isOpen={thirdState} onClose={() => {setThirdState(false)}}/>
			
			<DiscountApplied isOpen={fourthState} onClose={() => {setFourthState(false)}}/>
			
			<DisplayBeginPayment isOpen={fifthState} onClose={() => {setFifthState(false); if(showCardDialog == true){setSixthState(true)}; if(showCashDialog == true){setSeventhState(true)}}}/>
			
			<CardDialog isOpen={sixthState} onClose={() => {setSixthState(false);}}/>
			
			<CashDialog isOpen={seventhState} onClose={() => {
				setSeventhState(false); 
				if(showReceiptOptions == true){
					if (propaneInCheckout()){setNinthState(true)}
					else{setEighthState(true)}
				}
			}}/>
			
			<ReceiptOptionsDialog isOpen={eighthState} onClose={() => {setEighthState(false); clearCheckout(); window.location.reload()}}/>
			
			<TransactionCompleteDialog isOpen={ninthState} onClose={() => {setNinthState(false); clearCheckout(); window.location.reload()}}/>	
				
		</div>
	);
}



export default App;
