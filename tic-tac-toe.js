//My tic-tac-toe jss 
document.addEventListener("DOMContentLoaded", function() {
    var list_div = document.querySelectorAll("#board div");
    for (var i = 0; i < list_div.length; i++) {
         list_div[i].classList.add('square');
    }
});