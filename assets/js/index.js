// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
var header = document.getElementById("topBarCover");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
