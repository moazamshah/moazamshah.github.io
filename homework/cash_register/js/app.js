// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

// Input field that takes the value you'll be adding to the total
var entryInput = $("#newEntry");

// Total value on the page (Ex. $0 or $15)
var totalValueElement = $("#total");

// Button you click to submit
var submitBtn = $("#submitBtn");

// Form element that wraps the input field and submit button
var totalForm = $("#totalForm");


var appearTable = function(event) {
	event.preventDefault();

	// Value of the input field when a user submits
	var newInputValue = entryInput.val();
	var currentTotalValue = totalValueElement.text();

	totalValueElement.html(addValues(parseInt(currentTotalValue), parseInt(newInputValue)));
}	

totalForm.on('submit', appearTable);


var addValues = function(curVal, inputValue) {
	return curVal += inputValue;
}

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared
