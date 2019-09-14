var first = document.getElementById("first");
var second = document.getElementById("second");
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function animation() {
	first.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
	second.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
	first.style.marginLeft = getRandomInt(300) + "px";
	first.style.marginTop = getRandomInt(300) + "px";
 setTimeout(function() {
 	first.style.animation = "0";
	second.style.animation = "0";
	console.log("lol")
}, 400);

}

function roll() {
	var rand1 = getRandomInt(6);
	var rand2 = getRandomInt(6);
	if (rand1!=rand2) {
		first.style.backgroundImage = "url(" + rand1 +".png)";
		second.style.backgroundImage = "url(" + rand2 +".png)";
}
	else if (rand1 === rand2) {
		first.style.backgroundImage = "url(" + rand1 +"b.png)";
		second.style.backgroundImage = "url(" + rand2+"b.png)";
		spin(1);
		spin(2);
	}
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


function spin(which) {
	if (which===2) {
		second.classList.add("lol");
		setTimeout(function() {
			second.classList.remove("lol");
		}, 2000);
	}
	else if (which===1) {
	first.classList.add("lol");
	setTimeout(function() {
			first.classList.remove("lol");
		}, 2000);
}
}