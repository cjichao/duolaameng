var cx = 400;
var cy = 200;
var cv = document.getElementById('canvas');
var ctx = cv.getContext('2d');

var head = new Circle({
	cx: cx,
	cy: cy,
	r: 100,
	startAngle: 310,
	endAngle: 50,
	anticlockwise: true,
	// color: 'skyblue'
});

var mouth = new Circle({
	cx: cx,
	cy: cy + 10,
	r: 50,
	startAngle: 120,
	endAngle: 240,
	// color: 'skyblue'
});
// 眼睛
var leftEye = new Ellipse({
	x: cx - 20,
	y: cy - 40,
	a: 20,
	b: 25,
	// color: 'skyblue'
});
var rightEye = new Ellipse({
	x: cx + 20,
	y: cy - 40,
	a: 20,
	b: 25,
	// color: 'skyblue'
});

//眼珠子
var yzz1 = new Circle({
	cx: cx - 15,
	cy: cy - 30,
	r: 5,
	// color: 'skyblue'
});
var yzz2 = new Circle({
	cx: cx + 15,
	cy: cy - 30,
	r: 5,
	// color: 'skyblue'
});

// 脸：要分2段
var face1 = new Ellipse({
	x: cx,
	y: cy + 20,
	a: 80,
	b: 65,
	startAngle: 51,
	endAngle: 145,
	anticlockwise: true,
	// color: 'skyblue'
});
var face2 = new Ellipse({
	x: cx,
	y: cy + 20,
	a: 80,
	b: 65,
	startAngle: 215,
	endAngle: 310,
	anticlockwise: true,
	// color: 'skyblue'
});

var nose = new Circle({
	cx: cx,
	cy: cy - 12,
	r: 10,
	color: 'red'
});

var line = new Line({
	y1: 198,
	y2: 260,
	x: cx,
	// k: 0,
	// b: 200
});
// 胡子左边1
var hzl1 = new Line({
	x1: 340,
	y1: 198,
	x2: 380,
	y2: 260,
	k: 0.4,
	b: 50
});
var hzl2 = new Line({
	x1: 340,
	x2: 380,
	y: 210,
});
var hzl3 = new Line({
	x1: 340,
	y1: 0,
	x2: 380,
	y2: 260,
	k: -0.4,
	b: 370
});

// 胡子右边1
var hzr1 = new Line({
	x1: 420,
	y1: 0,
	x2: 460,
	y2: 260,
	k: -0.4,
	b: 370
});
var hzr2 = new Line({
	x1: 420,
	x2: 460,
	y: 210,
});
var hzr3 = new Line({
	x1: 420,
	y1: 0,
	x2: 460,
	y2: 260,
	k: 0.4,
	b: 50
});
// 脖子
var neck = new Line({
	x1: cx - 80,
	x2: cx + 80,
	y: cy + 65,
});
var neckR = new Circle({
	cx: cx + 71,
	cy: cy + 69,
	r: 10,
	startAngle: 60,
	endAngle: 120,
	anticlockwise: !true
});
var neck2 = new Line({
	x1: cx - 80,
	x2: cx + 80,
	y: cy + 75,
});
var neckL = new Circle({
	cx: cx - 71,
	cy: cy + 69,
	r: 10,
	startAngle: 240,
	endAngle: 300,
	anticlockwise: true
});

// var face = [
// 	head, mouth, leftEye, rightEye, yzz1,
// 	yzz2, face1, face2, nose, line,
// 	hzl1, hzl2, hzl3, hzr1, hzr2,
// 	hzr3, neck, neckR, neck2, neckL
// ];
