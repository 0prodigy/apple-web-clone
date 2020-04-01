let input = document.getElementById("input");
let nav = document.getElementsByTagName("ul");
let search = document.getElementsByClassName("search");
let fa = document.getElementsByClassName("fa-search")
input.addEventListener("focus", function () {
    nav[0].style.width = "781px";
    search[0].style.width = "170px";
    fa[0].style.color = "#333"
});

input.addEventListener("blur", function () {
    nav[0].style.width = "845px";
    search[0].style.width = "106px";
    fa[0].style.color = "#fff"
});