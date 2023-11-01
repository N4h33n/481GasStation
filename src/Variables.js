var Checkout = [];
var Total = 0;
var SubTotal = 0;
var Taxes = 0;
var Pump_1 = "Available";
var Pump_2 = "Available";
var Pump_3 = "In Use";
var Pump_4 = "Available";
var Pump_5 = "Out of Order";
var Pump_6 = "Available";
var showDiscountDialog = true;
var showCardDialog = true;
var showCashDialog = true;
var showReceiptOptions = true;
var time = [];
var time2 = [];
var inventory = [{'name': 'cheetos', 'price': 2.80}, {'name': '2l soda', 'price': 3.00}];

function updateTotal(a){
	Total = a;
	
	let table4 = document.getElementById("Total");
	
	let column3 = document.getElementById("TotalCost");
	
	column3.innerText = "$" + Total.toFixed(2);
}

function updateSubTotal(a){
	SubTotal = a;
	
	let table2 = document.getElementById("SubTotal");

	let column = document.getElementById("SubTotalCost");
	
	column.innerText = "$" + SubTotal.toFixed(2);
}

function updateTaxes(a){
	Taxes = a;
	
	let table3 = document.getElementById("Taxes");
	
	let column2 = document.getElementById("TaxesCost");
	
	column2.innerText = "$" + Taxes.toFixed(2);
}

function updateDiscountDialog(a){
	showDiscountDialog = a;
}

function updateCardDialog(a){
	showCardDialog = a;
}

function updateCashDialog(a){
	showCashDialog = a;
}

function updateReceiptDialog(a){
	showReceiptOptions = a;
}

function setTimeID(a){
	time.push(a);
}

function removeTime(){
	return time.pop();
}

function setTime2(a){
	time2.push(a);
}

function remTime2(){
	return time.pop();
}

function propaneInCheckout() {
	var table = document.getElementById("Checkout");
	
	var rows = table.rows;
	for (var i = 0; i < table.rows.length; i++) {
		var cols = rows[i].cells;
		
		for (let cell of cols) {
			if (cell.innerText == "Propane Refill") {
				return true;
			}
		}
	}
	return false;
}

export {
	Checkout,
	Total,
	SubTotal,
	Taxes,
	Pump_1,
	Pump_2,
	Pump_3,
	Pump_4,
	Pump_5,
	Pump_6,
	time,
	time2,
	showDiscountDialog,
	showCardDialog,
	showCashDialog,
	showReceiptOptions,
	updateTotal,
	updateSubTotal,
	updateTaxes,
	updateDiscountDialog,
	updateCardDialog,
	updateCashDialog,
	updateReceiptDialog,
	setTimeID,
	removeTime,
	setTime2,
	remTime2,
	propaneInCheckout,
	inventory
}