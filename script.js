var first = document.getElementById("first");
var second = document.getElementById("second");
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function animation() {
	first.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
	second.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
	first.style.marginLeft = getRandomInt(100) + "px";
	first.style.marginBottom = getRandomInt(100) + "px";
 setTimeout(function() {
 	first.style.animation = "0";
	second.style.animation = "0";
	console.log("lol")
}, 400);

}

function roll() {
	first.style.backgroundImage = "url(" + getRandomInt(6) +".png)";
	second.style.backgroundImage = "url(" + getRandomInt(6) +".png)";
}
function animatq() {
	animation();
	roll();
}
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 32) {
    animatq();
  }
  
});