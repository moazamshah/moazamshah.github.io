// As a user
// When I click on the row
// I expect to see the text appear underneath

$(".row").click(showText)

function showText(event) {
	$(event.currentTarget).children(".wrapper").slideToggle(400);

}

// As a user
// When I click on an opened row
// I expect to see the text disappear

//Below code toggles all of the .wrappers all at once.
//$(".row").click(hideText)

 //function hideText() {
	 //$(".wrapper").toggle(400);
 //}

// It should animate like this: https://imgur.com/ivlcesG

// Hint: remember traversal (parent, child) and event arguments
// Also, might be worth looking into event.target vs. event.currentTarget

// Extra Credit:
// 
// As a user
// When I click on an opened row
// I expect the text to disappear more slowly than how it appeared