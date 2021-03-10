/**
 * 圆
 */

class Circle {
	constructor(args) {
		this.cx = args.cx || 0;
		this.cy = args.cy || 0;
		this.r = args.r || 100;
		this.startAngle = args.startAngle || 0;
		this.endAngle = args.endAngle == 0 ? 0 : (args.endAngle || 360);
		this.color = args.color || '#000000';
		this.callback = function() {
			args.callback && args.callback();
		}
		this.anticlockwise = !!args.anticlockwise; //逆时针,默认顺时针
		this.posArr = [];
		this.init();
	}
	init() {
		this.end = false;
		this.now = 0;
		var posArr = this.posArr = [];
		this.nowPos = [];
		if (this.startAngle < this.endAngle) {
			for (var angle = this.startAngle; angle <= this.endAngle; angle++) {
				posArr.push(this.position(angle, this.r, this.cx, this.cy));
			}
		} else {
			for (var angle = this.endAngle; angle <= this.startAngle; angle++) {
				posArr.push(this.position(angle, this.r, this.cx, this.cy));
			}
		}
	}
	drawImmediately(ctx) {
		var posArr = this.posArr;
		for (var i = 0; i < posArr.length - 1; i++) {
			ctx.beginPath();
			ctx.strokeStyle = this.color;
			ctx.moveTo(posArr[i][0], posArr[i][1]);
			ctx.lineTo(posArr[i + 1][0], posArr[i + 1][1]);
			ctx.stroke();
			ctx.closePath();
		}
	}
	update() {
		if (this.now >= this.posArr.length - 1 && !this.end) {
			this.callback();
			this.end = true;
			return true;
		}
		if (!this.end) {
			this.nowPos = [this.posArr[this.now++], this.posArr[this.now]];
		}

	}
	draw(ctx) {
		try {
			var nowPos = this.nowPos;
			if (nowPos.length >= 2) {
				ctx.beginPath();
				ctx.strokeStyle = this.color;
				ctx.moveTo(nowPos[0][0], nowPos[0][1]);
				ctx.lineTo(nowPos[1][0], nowPos[1][1]);
				ctx.stroke();
				ctx.closePath();
			}
		} catch (e) {
			console.log(this.nowPos)
		}
	}
	position(angle, r, cx, cy) {
		var sin = this.sin;
		angle = angle % 360;
		if (!this.anticlockwise) {
			if (angle < 90) {
				return [(cx + sin(angle) * r).toFixed(2), (cy - sin(90 - angle) * r).toFixed(2)];
			} else if (angle < 180) {
				return [(cx + sin(angle) * r).toFixed(2), (cy + sin(angle - 90) * r).toFixed(2)];
			} else if (angle < 270) {
				return [(cx - sin(angle - 180) * r).toFixed(2), (cy + sin(90 - angle + 180) * r).toFixed(2)];
			} else if (angle <= 360) {
				return [(cx - sin(90 - angle + 270) * r).toFixed(2), (cy - sin(angle - 270) * r).toFixed(2)];
			}
		} else {
			if (angle < 90) {
				return [(cx + sin(angle) * r).toFixed(2), (cy + sin(90 - angle) * r).toFixed(2)];
			} else if (angle < 180) {
				return [(cx + sin(angle) * r).toFixed(2), (cy - sin(angle - 90) * r).toFixed(2)];
			} else if (angle < 270) {
				return [(cx - sin(angle - 180) * r).toFixed(2), (cy - sin(90 - angle + 180) * r).toFixed(2)];
			} else if (angle <= 360) {
				return [(cx - sin(90 - angle + 270) * r).toFixed(2), (cy + sin(angle - 270) * r).toFixed(2)];
			}
		}
	}
	sin(v) {
		return Math.sin(Math.PI / (180 / v));
	}
}
