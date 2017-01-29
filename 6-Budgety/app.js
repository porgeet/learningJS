
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
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // -1 to get last index id
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
		expensesContainer: '.expenses__list'

	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMStrings.inputType).value, // will be either income or expense
				description: document.querySelector(DOMStrings.inputDescription).value,
				value: document.querySelector(DOMStrings.inputValue).value
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

		clearFields: function(){
			var fields, fieldsArray;

			fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

			fieldsArr = Array.prototype.slice.call(fields);

			fieldsArr.forEach(function(current, index, array){
				// forEach() loops over an array, callback functions to this accept three args, the current value of the array item, the index of that item and the array itself, in this case fieldsArr
				current.value = "";
			});

			fieldsArr[0].focus();

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
	};

	var ctrlAddItem = function(){
		var input, newItem;


		// 1. get filled input data

		input = UICtrl.getInput();

		// 2. add item to budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		// 3. add the new item to the UI
		UICtrl.addListItem(newItem, input.type);

		// 4. clear the fields
		UICtrl.clearFields();

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












