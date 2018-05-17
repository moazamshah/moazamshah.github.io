
$(".color1").click(changeColor);

function changeColor() {
	console.log("changeColor");

	$(".play_bg").css("background-color", "#1A1377");;
}

$(".color2").click(changeColor2);

function changeColor2() {

	$(".play_bg").css("background-color", "#7376F1");;
}

$(".color3").click(changeColor3);

function changeColor3() {

	$(".play_bg").css("background-color", "#6A4DDD");;
}

$(".color4").click(changeColor4);

function changeColor4() {

	$(".play_bg").css("background-color", "#432AA8");;
}




// FAQs section


//$(".row").click(function(event) {
  //$(event.currentTarget).find(".wrapper").slideToggle();
//});



// Draggable thing

jQuery(document).ready(function($){
   //function to check if the .cd-image-container is in the viewport here
   // ...
    
   //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
   $('.cd-image-container').each(function(){
      var actual = $(this);
      drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
   });

   //function to upadate images label visibility here
   // ...
});

//draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
function drags(dragElement, resizeElement, container) {
   dragElement.on("mousedown vmousedown", function(e) {
      dragElement.addClass('draggable');
      resizeElement.addClass('resizable');

      var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - e.pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
        
      dragElement.parents().on("mousemove vmousemove", function(e) {
         leftValue = e.pageX + xPosition - dragWidth;
            
         //constrain the draggable element to move inside its container
         if(leftValue < minLeft ) {
            leftValue = minLeft;
         } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
         }

         widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

         $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
         });

         $('.resizable').css('width', widthValue); 

         //function to upadate images label visibility here
         // ...

      }).on("mouseup vmouseup", function(e){
         dragElement.removeClass('draggable');
         resizeElement.removeClass('resizable');
      });
      e.preventDefault();
   }).on("mouseup vmouseup", function(e) {
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
   });
}




// Static Image Switch on Breakpoints:

// Hiding Sections on Breakpoints:





