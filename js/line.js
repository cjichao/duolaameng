class Line {
	constructor(args) {
		this.x = args.x;
		this.y = args.y;
		this.k = args.k || 1;
		this.b = args.b || 0;
		this.x1 = args.x1 || 0;
		this.y1 = args.y1 || 0;
		this.x2 = args.x2 || 0;
		this.y2 = args.y2 || 0;
		this.color = args.color || '#000000';
		this.callback = function() {
			args.callback && args.callback();
		}
		this.pos = [];
		this.nowPos = [];
		this.now = 0;
		this.init();
	}
	init() {
		this.end = false;
		this.now = 0;
		this.nowPos = [];
		var pos = this.pos = [];
		if (this.x) {
			var min = Math.min(this.y1, this.y2);
			var max = Math.max(this.y1, this.y2);
			this.posy = min;
			this.range = Math.abs(this.y1 - this.y2);
			for (; this.posy <= max; this.posy++) {
				pos.push(this.position(this.posy));
			}
		} else if (this.y) {
			var min = Math.min(this.x1, this.x2);
			var max = Math.max(this.x1, this.x2);
			this.posx = min;
			this.range = Math.abs(this.x1 - this.x2);
			for (; this.posx <= max; this.posx++) {
				pos.push(this.position(this.posx));
			}
		} else {
			this.posx = this.x1;
			this.range = Math.abs(this.x1 - this.x2);
			for (; this.posx <= this.x2; this.posx++) {
				pos.push(this.position(this.posx));
			}
		}

	}
	update() {
		if (this.now > this.range - 1 && !this.end) {
			this.callback();
			this.end = true;
			return true;
		}
		if (!this.end) {
			this.nowPos = [this.pos[this.now++], this.pos[this.now]];
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
	draw(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.nowPos[0][0].toFixed(2), this.nowPos[0][1].toFixed(2));
		ctx.lineTo(this.nowPos[1][0].toFixed(2), this.nowPos[1][1].toFixed(2));
		ctx.stroke();
		ctx.closePath();
	}
	position(x) {
		if (this.x) {
			return [this.x, x];
		} else if (this.y) {
			return [x, this.y];
		} else {
			var y = this.k * x + this.b
			return [x, y];
		}

	}
}
