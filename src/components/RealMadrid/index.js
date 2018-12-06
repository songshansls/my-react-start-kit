import React from 'react'
import SadMan from 'components/Common/SadMan'

import style from './style.css'

class RealMadrid extends React.Component {
	draw () {
		const canvas = this.canvas;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.drawSin(ctx, this.xOffset);
		this.drawSin(ctx, this.xOffset+ Math.PI * 0.5, 0, 0.04, 3.5, '#4f86ec');

		this.xOffset += this.speed;
		requestAnimationFrame(this.draw.bind(this));
		// setTimeout(this.draw.bind(this), 20);
	}

	anime () {
		requestAnimationFrame(this.anime.bind(this));
		// setTimeout(this.anime.bind(this), 16);
	}

	drawSin (
		ctx, 
		xOffset = 0, 
		startX = 0,
		waveWidth = 0.05,
		waveHeight = 4,
		color = '#a7c3f8'
	) {
			const canvasWidth = this.canvas.width;
			const canvasHeight = this.canvas.height;
			const points = [];

			ctx.beginPath();
			for (let x = startX; x < startX + canvasWidth; x += 0.04) {
				const y = waveHeight * Math.sin((startX + x) * waveWidth + xOffset);
				points.push([x,canvasHeight + y]);
				ctx.lineTo(x, (canvasHeight / 2) + y);
			}
			// ctx.stroke();

			ctx.lineTo(canvasWidth, canvasHeight);
			ctx.lineTo(startX, canvasHeight);
			ctx.lineTo(points[0][0], points[0][1]);

			ctx.fillStyle = color;
			ctx.fill();
		}

	componentDidMount () {
		this.canvas = this.refs.canvas
		this.canvas.height = 400
		this.canvas.width = 500
		this.ctx = this.canvas.getContext('2d')
		this.drawSin(this.ctx)
		this.speed = 0.05
		this.xOffset = 0
		requestAnimationFrame(this.draw.bind(this))
	}

	render () {
		return <div className={style.root}>
				<canvas ref='canvas'></canvas>	
		</div>
	}
}

export default RealMadrid
