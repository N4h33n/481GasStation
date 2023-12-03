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
var Pump_1_color = "green";
var Pump_2_color = "green";
var Pump_3_color = "yellow";
var Pump_4_color = "green";
var Pump_5_color = "red";
var Pump_6_color = "green";
var showDiscountDialog = true;
var showCardDialog = true;
var showCashDialog = true;
var showReceiptOptions = true;
var time = [];
var time2 = [];
var inv_P = [{'name': 'cheetos', 'category': 'chips', 'qty': 0},
{'name': 'doritos', 'category': 'chips', 'qty': 0},
{'name': 'coffee', 'category': 'drinks', 'qty': 0},
{'name': 'tea', 'category': 'drinks', 'qty': 0},
{'name': '2l soda', 'category': 'drinks', 'qty': 0},
{'name': 'milk', 'category': 'drinks', 'qty': 0},
{'name': 'oreo', 'category': 'cookies', 'qty': 0},
{'name': 'chips ahoy', 'category': 'cookies', 'qty': 0},
{'name': 'nerds', 'category': 'candy', 'qty': 0},
{'name': 'skittles', 'category': 'candy', 'qty': 0},
{'name': 'coffee crisp', 'category': 'candy', 'qty': 0},
{'name': 'lottery ticket', 'category': 'misc', 'qty': 0},
{'name': 'cigarettes', 'category': 'misc', 'qty': 0}];

var categories = ['chips', 'drinks', 'cookies', 'candy','misc'];


var inventory = [{'name': 'cheetos', 'price': 2.80, 'category': 'chips', 'qty': 50, 'capacity': 100}, 
	{'name': 'doritos', 'price': 2.80, 'category': 'chips', 'qty': 60, 'capacity': 100},

	{'name': 'coffee', 'price': 2.00, 'category': 'drinks', 'qty': 80, 'capacity': 150},
	{'name': 'tea', 'price': 1.5, 'category': 'drinks', 'qty': 70, 'capacity': 150},
	{'name': '2l soda', 'price': 3.00, 'category': 'drinks', 'qty': 95, 'capacity': 150},
	{'name': 'milk', 'price': 1.5, 'category': 'drinks', 'qty': 35, 'capacity': 150},

	{'name': 'oreo', 'price': 3.99, 'category': 'cookies', 'qty': 25, 'capacity': 75},
	{'name': 'chips ahoy', 'price': 4.50, 'category': 'cookies', 'qty': 46, 'capacity': 75},

	{'name': 'nerds', 'price': 2.00, 'category': 'candy', 'qty': 60, 'capacity': 100},
	{'name': 'skittles', 'price': 2.00, 'category': 'candy', 'qty': 65, 'capacity': 100},
	{'name': 'coffee crisp', 'price': 2.00, 'category': 'candy', 'qty': 50, 'capacity': 100},

	{'name': 'lottery ticket', 'price': 5.00, 'category': 'misc', 'qty': 76, 'capacity': 100},
	{'name': 'cigarettes', 'price': 15.00, 'category': 'misc', 'qty': 82, 'capacity': 100}];

function setItem_P(itemName, a){
	const invPItem = inv_P.find(item => item.name === itemName);
  
	invPItem['qty'] = a;
	console.log(invPItem)
}

function UpdateInventory(){
	inventory.forEach(item => {
		const correspondingInvPItem = inv_P.find(invItem => invItem.name === item.name);
	
		item.qty += correspondingInvPItem['qty'];
	
		  if (item.qty <= 0) {
			item.qty = 0;
		  } else if (item.qty > item.capacity) {
			item.qty = item.capacity;
		  }
	
		  correspondingInvPItem.qty = 0;
	  });
}



var days_sales = {
    Cheetos: { 30: 20, 60: 40, 90: 60 },
	Doritos: { 30: 18, 60: 42, 90: 78 },
	Coffee: { 30: 47, 60: 120, 90: 240 },
	Tea: { 30: 62, 60: 111, 90: 256 },
	TwoLitreSoda: { 30: 30, 60: 78, 90: 150 },
    Milk: { 30: 26, 60: 54, 90: 170 },
	Oreo: { 30: 50, 60: 100, 90: 150 },
	ChipsAhoy: { 30: 42, 60: 103, 90: 182 },
	Nerds: { 30: 23, 60: 63, 90: 98 },
	Skittles: { 30: 25, 60: 53, 90: 102 },
	CoffeeCrisp: { 30: 36, 60: 72, 90: 130 },
	LotteryTicket: { 30: 20, 60: 62, 90: 133 },
	Cigarettes: { 30: 23, 60: 42, 90: 83 },
}

function updatePump(pump, status, color){
	if (pump === "pump1"){
		Pump_1 = status;
		Pump_1_color = color;
	}
	else if (pump === "pump2"){
		Pump_2 = status;
		Pump_2_color = color;
	}
	else if (pump === "pump3"){
		Pump_3 = status;
		Pump_3_color = color;
	}
	else if (pump === "pump4"){
		Pump_4 = status;
		Pump_4_color = color;
	}
	else if (pump === "pump5"){
		Pump_5 = status;
		Pump_5_color = color;
	}
	else if (pump === "pump6"){
		Pump_6 = status;
		Pump_6_color = color;
	}
}

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
	Pump_1_color,
	Pump_2_color,
	Pump_3_color,
	Pump_4_color,
	Pump_5_color,
	Pump_6_color,
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
	inventory,
	days_sales,
	updatePump,
	inv_P,
	setItem_P,
	categories,
	UpdateInventory
}