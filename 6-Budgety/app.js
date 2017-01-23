
// BUDGET CONTROLLER
var budgetController = (function(){

	var Expense = function(id, description, value){
		this.id = id;
		this. description = description;
		this.value = value;
	};

	var Income = function(id, description, value){
		this.id = id;
		this. description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			expense: [],
			income: []
		},
		totals: {
			expense: 0,
			income: 0
		}
	};

	return {
		addItem: function(type, des, val){
			var newItem, ID;
			// create new ID
			if(data.allItems[type].length > 0){
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
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
			return newItem;

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
		inputButton: '.add__btn' 

	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMStrings.inputType).value, // will be either income or expense
				description: document.querySelector(DOMStrings.inputDescription).value,
				value: document.querySelector(DOMStrings.inputValue).value
			};

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

			if(event === 13 || event.which === 13){
				ctrlAddItem();
			}

		});
	};

	var ctrlAddItem = function(){
		var input, newItem;


		// 1. get filled input data

		input = UICtrl.getInput();
		console.log(input);

		// 2. add item to budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		// 3. add the new item to the UI

		// 4. calculate the budget

		// 5. display the budget on the UI

	};

	return {
		init: function(){
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init();

// temp comment to force a git change












