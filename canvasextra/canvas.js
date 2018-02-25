function  canvasClicked(event){
	var canvas = document.getElementById("drawCanvas");
	var context = canvas.getContext("2d");


	context.lineWidth = 4;
	context.strokeStyle = 'rgb(200, 0, 0)';
	context.rect(event.offsetX, event.offsetY, 50, 50);
	context.stroke();
}

/*function drawSomething{
	console.log("Tick tog")
}*/

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function drawSomething(){
	
	var canvas = document.getElementById("drawCanvas");
	var context = canvas.getContext("2d");
	context.beginPath();

	var x = getRandomNumber(740);
	var y = getRandomNumber(540);

	var size = getRandomNumber(60);
	context.rect(x,y,size,size);
	context.stroke();
	context.closePath();



}


function start() {
	window.setInterval(drawSomething, 300);
}
