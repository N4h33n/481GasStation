var Checkout = [];
var Total = 0;
var SubTotal = 0;
var Taxes = 0;
var Pump_1 = "Available";
var Pump_2 = "Available";
var Pump_3 = "In Use";
var Pump_4 = "Available";
var Pump_5 = "Out of Order";
var Pump_6 = "Avaiable";
var showDiscountDialog = true;
var showCardDialog = true;
var showCashDialog = true;
var showReceiptOptions = true;
var time = [];
var time2 = [];

function updateTotal(a){
	Total = a;
}

function updateSubTotal(a){
	SubTotal = a;
}

function updateTaxes(a){
	Taxes = a;
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
	remTime2
}