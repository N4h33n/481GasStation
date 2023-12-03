var Checkout = [];
var checkoutPumps = [];
var Total = 0;
var SubTotal = 0;
var Taxes = 0;
// Fuel Inventory
var Octane87 = 36000;
var Octane89 = 18000;
var Octane93 = 29000;
var Diesel = 30000;
var Propane = 6000;

var Octane87_P = 0;
var Octane89_P = 0;
var Octane93_P = 0;
var Diesel_P = 0;
var Propane_P = 0;

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
var inventory = [{'name': 'cheetos', 'price': 4.30, 'quantity': 40}, {'name': '2l soda', 'price': 3.00, 'quantity': 28}, {'name': 'car wash', 'price': 12.99, 'quantity': 1000}];

var categories = ['Chips', 'Candy', 'Drinks', 'Snacks', 'Store', 'Misc']

let promos = [{'name': '10% off all candy', 'type': 'category', 'item': 'none', 'category': 'Candy', 'num_items': 1, 'discount_type': 'percent', 'discount_off': 10, 'num_discount': 1, 'start': '2023-12-01', 'end': '2023-12-18'},
{'name': 'Buy any 2 chips, get 1 free', 'type': 'category', 'item': 'none', 'category': 'Chips', 'num_items': 3, 'discount_type': 'percent', 'discount_off': 100, 'num_discount': 1, 'start': '2023-12-01', 'end': '2023-12-20'},
{'name': 'Buy any drink, get 1 50% off', 'type': 'category', 'item': 'none', 'category': 'Drinks', 'num_items': 2, 'discount_type': 'percent', 'discount_off': 50, 'num_discount': 1, 'start': '2023-12-03', 'end': '2023-12-22'},
{'name': 'Car washes - $5 off', 'type': 'item', 'item': 'car wash', 'category': 'none', 'num_items': 1, 'discount_type': 'amount', 'discount_off': 5, 'num_discount': 1, 'start': '2023-12-12', 'end': '2023-12-28'}
]	

function overwritePromos(newPromos){
	promos = newPromos;
}

function setFuel_P(a,b,c,d,e){
 Octane87_P = a;
 Octane89_P = b;
 Octane93_P = c;
 Diesel_P = d;
 Propane_P = e;
}

function UpdateFuel(Fuel, b){
// a is base (Octane87)
// p is remove or add (Octane87_P)

	Octane87 = Octane87 + Octane87_P;
	if(Octane87 <= 0){
		Octane87 = 0;
	}
	Octane87_P = 0;

	Octane89 = Octane89 + Octane87_P;
	Octane89_P = 0;
	if(Octane89 <= 0){
		Octane89 = 0;
	}


	Octane93 = Octane93 + Octane93_P;
	Octane93_P = 0;
	if(Octane93 <= 0){
		Octane93 = 0;
	}

	Diesel = Diesel + Diesel_P;
	Diesel_P = 0;
	if(Diesel <= 0){
		Diesel = 0;
	}

	Propane = Propane + Propane_P;
	Propane_P = 0;
	if(Propane <= 0){
		Propane = 0;
	}
}

function addItem(a, b){
	let check = false;
	
	if(b != "none"){
		for(let i = 0; i < checkoutPumps.length; i++){
			if(checkoutPumps[i] == b){
				check = true;
			}
		}
		if(check == false){
			checkoutPumps.push(b);
		}
	}
	
	for(let i = 0; i < Checkout.length; i++){
		if(Checkout[i].name == a.name){
			Checkout[i].quantity += Number(a.quantity);
			Checkout[i].cost += a.cost;
			Checkout[i].totalTax += a.totalTax;
			
			let table = document.getElementById("Checkout");
		
			let row = table.rows[i+1];
			
			let c1 = row.cells[0];
			let c2 = row.cells[2];
			
			c1.innerText = Checkout[i].quantity.toFixed(2);
			c2.innerText = "$" + Checkout[i].cost.toFixed(2);
			
			return;
		}
	}
	
	Checkout.push(a);
	
	let table = document.getElementById("Checkout");
	
	let row = document.createElement("tr");
	
	let c1 = document.createElement("td");
	let c2 = document.createElement("td");
	let c3 = document.createElement("td");
	
	c1.innerText = a.quantity.toFixed(2);
	c2.innerText = a.name;
	c3.innerText = "$" + a.cost.toFixed(2);

	c1.style.paddingLeft = "10px";
	
	row.appendChild(c1);
	row.appendChild(c2);
	row.appendChild(c3);
	
	let removeButton = document.createElement("button");
	removeButton.className = "removeButton";
	removeButton.innerText = 'X';
	removeButton.style.fontWeight = "bold";
	removeButton.style.color = "white";
	removeButton.style.backgroundColor = "#FF4F4B";
	removeButton.style.borderStyle = "none";
	removeButton.style.cursor = "pointer";
	removeButton.onclick = function(){
		let index = getIndex(a.name);
		table.deleteRow(index + 1);
		updateTotal(Total - (Checkout[index].cost + Checkout[index].totalTax)); 
		updateSubTotal(SubTotal - Checkout[index].cost); 
		updateTaxes(Taxes - Checkout[index].totalTax)
		removeItem(index);
	};
	
	row.append(removeButton);
	
	table.appendChild(row);
}

function clearCheckout(){
	for(let i = 0; i < checkoutPumps.length; i++){
		updatePump(checkoutPumps[i], "In Use", "yellow");
	}
	checkoutPumps.splice(0, checkoutPumps.length);
	Checkout.splice(0, Checkout.length);
	Total = 0;
	SubTotal = 0;
	Taxes = 0;
}

function applyDiscount(a, b, c, d){
	if(a == 1){
		for(let i = 0; i < Checkout.length; i++){
			if(Checkout[i].name == d && Checkout[i].quantity >= b){
				updateTotal(Total - Checkout[i].cost);
				updateSubTotal(SubTotal - Checkout[i].cost);
				
				var pricePer = Checkout[i].cost/Checkout[i].quantity;
				var newSub = (Checkout[i].quantity - b) * pricePer + 10;
				Checkout[i].cost = newSub;
				
				let table = document.getElementById("Checkout");
		
				let row = table.rows[i+1];
				
				let c1 = row.cells[1];
				let c2 = row.cells[2];
				
				c1.innerHTML = c1.innerText + " " + '<span style="color: gray;font-style:italic">' + c + '</span>';
				
				c2.innerHTML = '<span style="text-decoration:line-through">' + c2.innerText + '</span>' + '<br>' + '<span style="color: red">' + "$" + newSub.toFixed(2) + '</span>';
				
				updateTotal(Total + newSub);
				updateSubTotal(SubTotal + newSub);
				
				return true;
			}
		}
	}
	
	if(a == 2){
		for(let i = 0; i < Checkout.length; i++){
			if(Checkout[i].name == d && Checkout[i].quantity > b){
				updateTotal(Total - Checkout[i].cost);
				updateSubTotal(SubTotal - Checkout[i].cost);
				
				var pricePer = Checkout[i].cost/Checkout[i].quantity;
				var newSub = Checkout[i].cost - pricePer;
				Checkout[i].cost = newSub;
				
				let table = document.getElementById("Checkout");
		
				let row = table.rows[i+1];
				
				let c1 = row.cells[1];
				let c2 = row.cells[2];
				
				c1.innerHTML = c1.innerText + " " + '<span style="color: gray;font-style:italic">' + c + '</span>';
				
				c2.innerHTML = '<span style="text-decoration:line-through">' + c2.innerText + '</span>' + '<br>' + '<span style="color: red">' + "$" + newSub.toFixed(2) + '</span>';
				
				updateTotal(Total + newSub);
				updateSubTotal(SubTotal + newSub);
				
				return true;
			}
		}
	}
	
	if(a == 5){
		addItem({'name': c, 'quantity': 1, 'cost': -(SubTotal * 0.10), 'totalTax': 0}, "none");
		updateTotal(Total - (SubTotal * 0.10));
		updateSubTotal(SubTotal - (SubTotal * 0.10));
	}
}

function removeItem(a){
	Checkout.splice(a, 1);
}

function getIndex(a){
	for(let i = 0; i < Checkout.length; i++){
		if(a == Checkout[i].name){
			return i;
		}
	}
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
	
	column3.innerText = "$" + Math.abs(Total).toFixed(2);
}

function updateSubTotal(a){
	SubTotal = a;
	
	let table2 = document.getElementById("SubTotal");

	let column = document.getElementById("SubTotalCost");
	
	column.innerText = "$" + Math.abs(SubTotal).toFixed(2);
}

function updateTaxes(a){
	Taxes = a;
	
	let table3 = document.getElementById("Taxes");
	
	let column2 = document.getElementById("TaxesCost");
	
	column2.innerText = "$" + Math.abs(Taxes).toFixed(2);
}

function updateChange(){
	
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
	Octane87,
	Octane89,
	Octane93,
	Diesel,
 	Propane,
	Octane87_P,
	Octane89_P,
	Octane93_P,
	Diesel_P,
	Propane_P,
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
	setFuel_P,
	UpdateFuel,
	addItem,
	removeItem,
	getIndex,
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
	promos,
	categories,
	updatePump,
	clearCheckout,
	applyDiscount,
	updateChange,
	overwritePromos
}
