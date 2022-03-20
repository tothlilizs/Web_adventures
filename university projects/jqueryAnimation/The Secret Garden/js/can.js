//MAKE THE MAGIC HAPPEN

/* globals $:false, window:false, document:false */

/* Lili & Yoana*/

var w1 = $("#1");
var w2 = $("#2");
var w3 = $("#3");

$(document).ready(function () {
    
   w1.hide();
   w2.hide();
   w3.hide();
    
});


/* initially hiding the waterdrops so that we can call for their apperance via mouse down */

function bottompos() {
    
    var pos = $(window).height();
    
    return pos;
    
}

/* calculates the height of page */

function randominator() {

    var x = $('img#wateringcan').offset().top + 90 + Math.floor(Math.random() * (25 - 0 + 0));
    var y = $('img#wateringcan').offset().left +Math.floor(Math.random() * (50 - 0 + 0)) ;
    
    return [x, y];
    
}

/* gets position of #wateringcan x & y then for top adds 10 pixels so that its kinda at the tip, then chooses a random pixel from that between +0-5px for top and +0-10px for bottom */


function drop(id) {
    
var loc = randominator();
var bpos = bottompos();
    
    id
        .css({top : loc[0], left : loc[1]}).delay(400).stop()
        .show()
        .animate({top: bpos}, 3000, function () { 
        id.hide();
        drop(id); })
    
}

/* css gets moved to the position chosen by the randominator \see above\ then its set to show from hidden, animate to reach bottom of the page and hides it afterwards, final animation makes it a loop */
  
$("#wateringcan").on("mousedown", function () {
    $("#wateringcan").css({'transform': 'rotate(-30deg)'});
        
    drop(w1);
    
    w2.delay(500).queue(function() {
            drop(w2); 
            $(this).dequeue();})
    w3.delay(1000).queue(function() {
            drop(w3); 
            $(this).dequeue();})                     
    
});

/* calls the animation functions and turns the watering can */

$("#wateringcan").on("mouseup", function () {
    
   var loc = randominator();
    
   w1.stop(true).css({top : loc[0], left : loc[1]});
   w1.hide();
   w2.stop(true).css({top : loc[0], left : loc[1]});
   w2.hide();
   w3.stop(true).css({top : loc[0], left : loc[1]});    
   w3.hide();
   $("#wateringcan").css({'transform': ''});
   });

/* breaks the drop loops and resets watering can */

