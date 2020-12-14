// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction()
};

window.onresize = function () { }

// Get the navbar
var navbar = document.getElementById("naver");

var wrapper = document.getElementById("wrapper");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

window.onresize = changeSticky;
window.onload = func;

// this forces the sticky value to chane onload...
// needed bc of tiny navbar jump to top
function func() {

    console.log("onload")
    sticky = navbar.offsetTop;
}


function changeSticky() {

    console.log("onresize")
    sticky = navbar.offsetTop;
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

    //keeping for debug
    //var element = document.getElementById('naver');
    //var position = element.getBoundingClientRect();
    //var x = position.left;
    //var y = position.top;
    //console.log("sticky: " + sticky)
    //console.log("Y: " + y);
    //console.log("window: " + window.pageYOffset);


    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        wrapper.classList.add("nav-wrapper");
        // space.classList.add("mobile-block");
    } else {
        navbar.classList.remove("sticky");
        wrapper.classList.remove("nav-wrapper");
        // space.classList.remove("mobile-block");
    }
}