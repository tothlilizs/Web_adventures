//Allie

/*globals $:false, document:false*/

//rx() returns a random x-value within the crown of the tree
//min is a variable finding the tree's left offset, adding an apple's width of 70px and margin of 35px
//max is a variable declaring how wide the available space of the tree's crown:
//tree width = 759px --> approx. = 750px | double apple width + double margin = 210px | 750-210 = 580px
function rx() {var min = $("#tree").offset().left + 105, max = min + 540, x = Math.floor(Math.random() * (max - min) + min); return x; }

//ry() is the same as rx() except for the y-value within the tree's crown
// max: apple height + margin = 105px --> Apple's stem needs to be connected to a branch = 120px | tree height = 800px --> crown height approx. = 450px --> excluding top part that doesn't span the whole width approx. = 430px | 430-210 = 220px
function ry() {var min = $("#tree").offset().top + 120, max = min + 220, y = Math.floor(Math.random() * (max - min) + min); return y; }
//load(x) changes the argument's css "left" and "top" values to the result of rx() and ry(), respectively
function load(x) {x.css({"left": (rx()), "top": (ry())}); }

//public variable declaration so I don't have to write them in the method's themselves
var a1 = $("#apple1"), a2 = $("#apple2"), a3 = $("#apple3"), basket = $(".basket");

//$(document).ready(...) calls the methods it contains when the document has been loaded
//I changed the css z-index values of the apples to be greater than the basket's, apple2's value to greater than the other two apples and the apple class bigger just for aesthetics as well as making basketfront's z-index value greater than the highest of the apples
$(document).ready(function () {load(a1); load(a2); load(a3); $(".apple").css({"zIndex": "1", "height": "70px"}); a2.css({"zIndex": "2"}); $("#basketfront").css({"zIndex": "3"}); });

//$("#appleX").click(...) animating appleX's move to the basket when clicked
a1.click(function () {var x = a1.offset().left * 0 + basket.offset().left + 15, y = a1.offset().top * 0 + basket.offset().top + 160; a1.animate({left: x, top: y}); });
a2.click(function () {var x = a2.offset().left * 0 + basket.offset().left + 65, y = a2.offset().top * 0 + basket.offset().top + 160; a2.animate({left: x, top: y}); });

a3.click(function () {var x = a3.offset().left * 0 + basket.offset().left + 115, y = a3.offset().top * 0 + basket.offset().top + 160; a3.animate({left: x, top: y}); });

//$("#basketfront").click(...) checks what apples are to the left of the tree and calls the load() method on them, returning them to a random position within the tree's crown
$("#basketfront").click(function () {if (a1.offset().left < $("#tree").offset().left) {load(a1); } if (a2.offset().left < $("#tree").offset().left) {load(a2); } if (a3.offset().left < $("#tree").offset().left) {load(a3); } });