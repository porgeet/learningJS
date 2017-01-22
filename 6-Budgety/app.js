
// BUDGET CONTROLLER
var budgetController = (function(){

	// some code

})();

// UI CONTROLLER
var UIController = (function(){

	var DOMStrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn', 

	}

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

		var DOM = UIController.getDOMStrings();

		document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event){

			if(event === 13 || event.which === 13){
				ctrlAddItem();
			}

		});
	};

	var ctrlAddItem = function(){

		// 1. get filled input data

		var input = UICtrl.getInput();
		console.log(input);

		// 2. add item to budget controller

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












