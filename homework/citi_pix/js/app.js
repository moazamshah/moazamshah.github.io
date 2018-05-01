// As a user
// When I change my selection
// I expect the background image to change into the image of my selection

$("#city-type").change(changeImage);

function changeImage () {
	var userSelection = $("#city-type").val();
	//$("body").html(userSelection + ".jpg")

	$("body").addClass(userSelection);
};