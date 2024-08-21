var row1 = document.getElementsByClassName("skills_section");
var row2 = document.getElementsByClassName("skill-container");
// Declare a loop variable
var i;
// List View

// Grid View
function gridView() {
    for (i = 0; i < row2.length; i++) {
        row1[i].style.display = "";
        row2[i].style.display = "none";
    }
}
function listView() {
    for (i = 0; i < row1.length; i++) {
        row1[i].style.display = "none";
        row2[i].style.display = "";
    }
}
/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn2");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}