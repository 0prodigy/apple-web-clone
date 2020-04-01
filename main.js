let input = document.getElementById("input");
let nav = document.getElementsByTagName("ul");
let search = document.getElementsByClassName("search");
input.addEventListener("focus", function () {
    nav[0].style.width = "781px";
    search[0].style.width = "170px";
});

function focusOut() {
    nav[0].style.width = "845px";
    search[0].style.width = "106px";
}