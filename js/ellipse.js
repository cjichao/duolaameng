/**
 * 椭圆
 */

class Ellipse {
	constructor(args) {
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.a = args.a;
		this.b = args.b;
		this.color = args.color || '#000000';
		this.callback = function() {
			args.callback && args.callback();
		}
		this.startAngle = args.startAngle || 0;
		this.endAngle = args.endAngle || 360;
		this.anticlockwise = !!args.anticlockwise; //逆时针
		this.pos = [];
		this.now = 0;
		this.nowPos = [];
		this.init();
	}

	init() {
		this.end = false;
		this.now = 0;
		var x = this.x;
		var y = this.y;
		var a = this.a;
		var b = this.b;
		var pos = this.pos = [];
		this.nowPos = [];
		for (var angle = this.startAngle; angle <= this.endAngle; angle++) {
			pos.push(this.position(x, y, a, b, angle));
		}
	}
	drawImmediately(ctx) {
		var pos = this.pos;
		for (var i = 0; i < pos.length - 1; i++) {
			ctx.beginPath();
			ctx.strokeStyle = this.color;
			ctx.moveTo(pos[i][0].toFixed(2), pos[i][1].toFixed(2));
			ctx.lineTo(pos[i + 1][0].toFixed(2), pos[i + 1][1].toFixed(2));
			ctx.stroke();
			ctx.closePath();
		}
	}
	update() {
		if (this.now >= this.pos.length - 1 && !this.end) {
			this.callback();
			this.end = true;
			return true;
		}
		if(!this.end){
			this.nowPos = [this.pos[this.now++], this.pos[this.now]];
		}
		
	}
	draw(ctx) {
		if (this.now >= this.pos.length - 1) return;
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.nowPos[0][0].toFixed(2), this.nowPos[0][1].toFixed(2));
		ctx.lineTo(this.nowPos[1][0].toFixed(2), this.nowPos[1][1].toFixed(2));
		ctx.stroke();
		ctx.closePath();
	}
	position(x, y, a, b, angle) {
		var tan = this.tan;
		var angle = angle % 360;
		var posX;
		var posY;
		if (!this.anticlockwise) {
			if (angle === 0) {
				return [x, y - b];
			} else if (angle < 90) {
				posX = a * b * tan(angle) / (Math.sqrt(b * b * tan(angle) * tan(angle) + a * a));
				posY = a * b / (Math.sqrt(b * b * tan(angle) * tan(angle) + a * a));
				return [x + posX, y - posY];
			} else if (angle === 90) {
				return [x + a, y];
			} else if (angle < 180) {
				posX = a * b / (Math.sqrt(b * b + a * a * tan(angle - 90) * tan(angle - 90)));
				posY = a * b * tan(angle - 90) / (Math.sqrt(b * b + a * a * tan(angle - 90) * tan(angle - 90)));
				return [x + posX, y + posY];
			} else if (angle === 180) {
				return [x, y + b];
			} else if (angle < 270) {
				posX = a * b * tan(angle - 180) / (Math.sqrt(b * b * tan(angle - 180) * tan(angle - 180) + a * a));
				posY = a * b / (Math.sqrt(b * b * tan(angle - 180) * tan(angle - 180) + a * a));
				return [x - posX, y + posY];
			} else if (angle === 270) {
				return [x - a, y];
			} else if (angle < 360) {
				posX = a * b / (Math.sqrt(b * b + a * a * tan(angle - 270) * tan(angle - 270)));
				posY = a * b * tan(angle - 270) / (Math.sqrt(b * b + a * a * tan(angle - 270) * tan(angle - 270)));
				return [x - posX, y - posY];
			}
		} else {
			if (angle === 0) {
				return [x, y + b];
			} else if (angle < 90) {
				posX = a * b * tan(angle) / (Math.sqrt(b * b * tan(angle) * tan(angle) + a * a));
				posY = a * b / (Math.sqrt(b * b * tan(angle) * tan(angle) + a * a));
				return [x + posX, y + posY];
			} else if (angle === 90) {
				return [x + a, y];
			} else if (angle < 180) {
				posX = a * b / (Math.sqrt(b * b + a * a * tan(angle - 90) * tan(angle - 90)));
				posY = a * b * tan(angle - 90) / (Math.sqrt(b * b + a * a * tan(angle - 90) * tan(angle - 90)));
				return [x + posX, y - posY];
			} else if (angle === 180) {
				return [x, y - b];
			} else if (angle < 270) {
				posX = a * b * tan(angle - 180) / (Math.sqrt(b * b * tan(angle - 180) * tan(angle - 180) + a * a));
				posY = a * b / (Math.sqrt(b * b * tan(angle - 180) * tan(angle - 180) + a * a));
				return [x - posX, y - posY];
			} else if (angle === 270) {
				return [x - a, y];
			} else if (angle < 360) {
				posX = a * b / (Math.sqrt(b * b + a * a * tan(angle - 270) * tan(angle - 270)));
				posY = a * b * tan(angle - 270) / (Math.sqrt(b * b + a * a * tan(angle - 270) * tan(angle - 270)));
				return [x - posX, y + posY];
			}
		}

	}
	tan(v) {
		return Math.tan(Math.PI / (180 / v));
	}
}
