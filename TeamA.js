var h1 = document.querySelector("h1");
var isGreen = false;

h1.addEventListener("mouseover", function (event) {
  event.target.style.color = "green";
});
h1.addEventListener("mouseout", function (event) {
  event.target.style.color = "black";
});
