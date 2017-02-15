
// BUDGET CONTROLLER
var budgetController = (function(){

	var Expense = function(id, description, value){
		this.id = id;
		this. description = description;
		this.value = value;
		this.percentage = -1;
	};

	Expense.prototype.calcPercentage = function(totalIncome) {
		if(totalIncome > 0){
			this.percentage = Math.round((this.value / totalIncome) * 100);
		} else {
			this.percentage = -1;
		}
		// calculate the value of the individual object's percentage based on what it is in relation to the current total income. It then updates the objects percentage property
	};

	Expense.prototype.getPercentage = function() {
		return this.percentage; // returns that percentage property for use outside the object
	};

	var Income = function(id, description, value){
		this.id = id;
		this. description = description;
		this.value = value;
	};

	var calculateTotal = function (type){
		var sum = 0;

		data.allItems[type].forEach(function(cur){
			sum += cur.value;
			//  cur is the current value in the array on each iteration
		});

		data.totals[type] = sum;
	};

	var data = {
		allItems: {
			expense: [],
			income: []
		},
		totals: {
			expense: 0,
			income: 0
		},
		budget: 0,
		percentage: -1
	};

	return {
		addItem: function(type, des, val){
			var newItem, ID;
			// create new ID
			if(data.allItems[type].length > 0){
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // -1 to get last index id. this function is creating an array of items with unique numbers, even if items get deleted the numbers will increase from the last array item added
			} else {
				ID = 0;
			}

			// create new item based on income or expense type
			if(type === 'expense'){
				newItem = new Expense(ID, des, val);
			} else if(type === 'income'){
				newItem = new Income(ID, des, val);
			}
			
			// push it do our data structure
			data.allItems[type].push(newItem);

			// return the new element
			return newItem; // returns the object from the constructor to be used in  addListItem() in global app controller
		},

		deleteItem: function (type, id) {
			var ids, index;

			// ids = [1 2 3 6 8]

			ids = data.allItems[type].map(function(current){
				return current.id;
			}); // creates new array of all current array items that is what map does, loops over an array

			index = ids.indexOf(id); // finds the index position of a value passed to the id argument of the function

			if(index !== -1){

				data.allItems[type].splice(index, 1);

			}

		},

		calculateBudget: function (){

			// calculate total income and expenses
			calculateTotal('expense');
			calculateTotal('income');

			// calculate budget: income - expenses

			data.budget = data.totals.income - data.totals.expense;

			// calculate the percentage of income that we spend
			if(data.totals.income > 0) {
				data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
			} else {
				data.percentage = -1;
			}

		},

		calculatePercentages: function () {

			/*
			a=20
			b=10
			c=40
			income = 100
			a = 20/100=20%
			b = 10/100=10%
			c = 40/100=40%
			*/

			data.allItems.expense.forEach(function(cur){
				cur.calcPercentage(data.totals.income);
			}); // loops over all expenses and runs the calcPercentage() method, updating the percentage of all instances of the Expenses object. Until this calculatePercentages() is called all objects have no percentage property

		},

		getPercentages: function (){
			var allPercentages = data.allItems.expense.map(function (cur){
				return cur.getPercentage(); // .map() returns a new array filled with the result of iterating over expense and running the getPercentage() method, which itself returns the percentage of an expense objects
			});

			return allPercentages; // returns an array with all percentages in. NOT SURE WHY YET 7/2/17
		},

		getBudget: function (){
			return {
				budget: data.budget,
				totalInc: data.totals.income,
				totalExp: data.totals.expense,
				percentage: data.percentage
			};
		},

		testing: function(){
			console.log(data);
		}
	};

})();


// UI CONTROLLER
var UIController = (function(){

	var DOMStrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expenseLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		container: '.container',
		expensesPercLabel: '.item__percentage'

	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMStrings.inputType).value, // will be either income or expense
				description: document.querySelector(DOMStrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
			};

		},

		addListItem: function (obj, type){
			var html, newHTML, element;		
			// create HTML string with placeholder text

			
			if (type === 'income'){
				element = DOMStrings.incomeContainer;
				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if(type === 'expense'){
				element = DOMStrings.expensesContainer;
				html ='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}

			// replace the placeholder text with actual data
			newHTML = html.replace('%id%', obj.id);
			newHTML = newHTML.replace('%description%', obj.description);
			newHTML = newHTML.replace('%value%', obj.value);

			// insert the HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

		},

		deleteListItem: function (selectorID) {

			var el = document.getElementById(selectorID);

			el.parentNode.removeChild(el) // just a weird thing with js DOM manipulation. you can only remove a child, so we have to jump up to it's parent node, then remove child (el)

		},

		clearFields: function(){
			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

			fieldsArr = Array.prototype.slice.call(fields);
			// using .call() calls a function on an argument, in this case a list. tricking the parser into treating it as an array

			fieldsArr.forEach(function(current, index, array){
			// forEach() loops over an array, callback functions to this accept three args, the current value of the array item, the index of that item and the array itself, in this case fieldsArr
				current.value = "";
			});

			fieldsArr[0].focus();

		},

		displayBudget: function (obj) {

			document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
			document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
			document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp;
			

			if(obj.percentage > 0) {
				document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
			} else {
				document.querySelector(DOMStrings.percentageLabel).textContent = '---';
			}

		},

		displayPercentages: function (percentages){

			var fields = document.querySelectorAll(DOMStrings.expensesPercLabel); // returns a node list

			console.log(fields);

			var nodeListForEach = function(list, callback){

				for (var i = 0; i < list.length; i++){
					callback(list[i], i);
				}

			}; // function that loops over a node list and fires a callback function on each iteration

			nodeListForEach(fields, function(current, index){

			if(percentages[index] > 0) { // if percentages[index], that is the value of percentages at the index position [index] is greater than 0
			 	current.textContent = percentages[index] + "%"; // add the value at the current position in the fields node list with a % sign
			 } else {
			 	current.textContent = "---"; // else add this string
			 } 

			}); // nodeListForEach() called with the node list of expenses as first arg and a callback function

		},

		getDOMStrings: function(){ 
			return DOMStrings;
		}
	};

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

	var setupEventListeners = function(){

		var DOM = UICtrl.getDOMStrings();

		document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event){

		// this is the same as forEach() callback function event references the current value, in this case is it keypress 13, enter
			if(event === 13 || event.which === 13){
				ctrlAddItem();
			}

		});

		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
	};

	var updateBudget = function() {
		
		// 1. calculate the budget
		budgetCtrl.calculateBudget();

		// 2. return the budget
		var budget = budgetCtrl.getBudget(); // getBudget() returns items from data structure
		// 3. display the budget on the UI
		UICtrl.displayBudget(budget);
	};

	var updatePercentages = function () {

		// 1. calculate the percentages
		budgetCtrl.calculatePercentages();
		// 2. read them from the budget controller
		var percentages = budgetCtrl.getPercentages(); // is an array with all percentages in
		// 3. update the UI with the new percentages
		console.log(percentages);
		UICtrl.displayPercentages(percentages);
	};

	var ctrlAddItem = function(){
		var input, newItem;

		// 1. get filled input data

		input = UICtrl.getInput();

		if(input.description !== "" && !isNaN(input.value) && input.value > 0){

			// 2. add item to budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		// 3. add the new item to the UI
		UICtrl.addListItem(newItem, input.type);

		// 4. clear the fields
		UICtrl.clearFields();

		// 5. calculate and update budget
		updateBudget();

		// 6. calculate and update percentages
		updatePercentages();

		}
		

	};

	var ctrlDeleteItem = function(event) {
		var itemID, splitID, type, ID;

		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; // event delegation is to thank for selecting the clicked on item within the DOM list of items

		if(itemID) {

			// inc-1

			splitID = itemID.split('-'); // split() splits at a designated character. An array is returned of items either side of the character and that character is removed
			type = splitID[0];
			ID = parseInt(splitID[1]);

			// 1. delete item from data structure
			budgetCtrl.deleteItem(type, ID);
			// 2. delete item from UI
			UICtrl.deleteListItem(itemID);
			// 3. update and show new budget
			updateBudget();
			// 4. calculate and update percentages
			updatePercentages();

		}
	};

	return {
		init: function(){
			setupEventListeners();
			
			UICtrl.displayBudget({budget: 0,
				totalInc: 0,
				totalExp: 0,
				percentage: 0
			});
		}
	};

})(budgetController, UIController);

controller.init();












