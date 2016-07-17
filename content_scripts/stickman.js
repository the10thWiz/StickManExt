var running = true;
document.body.innerHTML+= '<canvas id="StickManCanvas0000000" width="100" height="200"></canvas>';
var canvas = document.getElementById('StickManCanvas0000000');
canvas.style.position = 'fixed';

canvas.style.left = '0px';

canvas.style.top = (window.innerHeight-200)+'px';

canvas.style.backgroundColor = 'rgba(0, 0, 0, 0)';
canvas.style.border = '1px dashed red';

var ctx = canvas.getContext('2d');


var pos = {
	x:0,
	headX:50,
	headY:20,
	bodyX:50,
	bodyY:150,
	leftArmX:25,
	leftArmY:90,
	rightArmX:75,
	rightArmY:90,
	leftLegX:30,
	leftLegY:200,
	rightLegX:70,
	rightLegY:200,
};

var setPos = function(x, y) {
	canvas.style.left = x+'px';

	canvas.style.top = (window.innerHeight-y-200)+'px';
};
var drawMan = function(time) {
	setPos(pos.x, 0);
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.arc(pos.headX, pos.headY, 20, 0, Math.PI*2, false);
	ctx.moveTo(pos.headX, pos.headY);
	ctx.lineTo(pos.bodyX, pos.bodyY);
	ctx.lineTo(pos.rightLegX, pos.rightLegY);
	ctx.moveTo(pos.bodyX, pos.bodyY);
	ctx.lineTo(pos.leftLegX, pos.leftLegY);
	ctx.moveTo((pos.bodyX+pos.headX)/2, ((pos.bodyY+pos.headY)/5)*2);
	ctx.lineTo(pos.rightArmX, pos.rightArmY);
	ctx.moveTo((pos.bodyX+pos.headX)/2, ((pos.bodyY+pos.headY)/5)*2);
	ctx.lineTo(pos.leftArmX, pos.leftArmY);
	ctx.stroke();
	
	ctx.fillStyle = '#888888';
	ctx.beginPath();
	ctx.arc(pos.headX, pos.headY, 20, 0, Math.PI*2, false);
	ctx.fill();
	if(running) {
		window.requestAnimationFrame(drawMan);
	}
};

drawMan();

browser.runtime.onMessage.addListener(function(m) {
	if(m === 'End') {
		running = false;
		document.body.removeChild(canvas);
	}
});
