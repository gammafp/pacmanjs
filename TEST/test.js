var gamepadDisponible = false;
var repGP;
var checkGP;
function reportOnGamepad() {
	var gp = navigator.getGamepads()[0];
 	console.log(gp.id);

	for(var i=0;i<gp.buttons.length;i++) {
		if(gp.buttons[i].pressed) console.log(i + ' ' + gp.buttons[i]);
	}


	// for(var i=0;i<gp.axes.length; i+=2) {
	// 	html+= "Stick "+(Math.ceil(i/2)+1)+": "+gp.axes[i]+","+gp.axes[i+1]+"<br/>";
	// }

}

function init() {	
	window.addEventListener("gamepadconnected", conectado, false);


	window.addEventListener("gamepaddisconnected", function() {
			console.log("disconnection event");
			window.clearInterval(repGP);
	});
}
function conectado(e) {

	gamepadDisponible = true;
	console.log("Se ha conectado el gamepad: evento conection");
	repGP = window.setInterval(reportOnGamepad, 100);

}

checkGP = window.setInterval(function() {
	if(navigator.getGamepads()[0]) {
		if(!gamepadDisponible) {
			conectado();
		}
		window.clearInterval(checkGP);
	}
}, 500);
window.addEventListener("load", init, false);