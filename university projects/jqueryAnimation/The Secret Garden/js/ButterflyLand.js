//MAKE THE MAGIC HAPPEN
/*globals $:false, window:false, document:false*/

//Luke's Kingdom (Butterflies and All)

// The initial call to the moveBUtterfly function when page is loaded

$(document).ready(function() {
    $("#butterfly").css({"zIndex" : "5"});
    $("#net").css({"zIndex" : "10"});
    moveButterfly();
})

// Moving the net image to the location (well, almost - it is shifted by 20 px to match the net better) of the mouse everytime time the mouse moves (the event fires)

$(document).mousemove(function(e) {
    $("#net").css({top : e.clientY+1, left : e.clientX+1});
     
});

// Function takes the dimensions of the viewport (minus the dimensions of the butterfly image itself) and generates random coordinates

function newRandomPosition() {
    
    var w = $(window).width() - 200;
    var h = $(window).height() - 200;
    
    var rh = Math.floor(Math.random() * h);
    var rw = Math.floor(Math.random() * w);
    
    return [rh, rw];
}

/* Makes the butterfly infinitely (through recursion) move to random locations in the viewport. If the net approaches (closer than 200 px) the butterfly, it rapidly moves to a random location */

function moveButterfly() {
    var location = newRandomPosition();
    var currentNet = $("#net").position();
    var currentFly = $("#butterfly").position();
    if(Math.abs(currentNet.left - currentFly.left) < 200 && Math.abs(currentNet.top - currentFly.top) < 200) {  
      $("#butterfly").animate({top : location[0], left : location[1]}, function() {
        moveButterfly();
    });
    }
    else {
    
    $("#butterfly").animate({top : location[0], left : location[1]}, 4000, function() {
        moveButterfly();
    });
    }
    }
    

// The border of my Mighty Kingdom