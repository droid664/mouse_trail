export class Trail {
	constructor() {
		this.canvas = document.getElementById('trail-canvas')
		this.context = this.canvas.getContext('2d')
		this.points = []
		this.particles = []
		this.particlesCount = 20
		this.arcRadius = 4
		this.color = '#4290FF'

		if (!this.canvas) {
			console.error('Canvas element is undefined')
			return false
		}

		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight

		this.init()
	}
	init() {
		for (let i = 0; i < this.particlesCount; i++) {
			this.particles.push({
				x: 0,
				y: 0,
			})
		}
	}
	update(x, y) {
		this.particles[this.particlesCount - 1].x = x
		this.particles[this.particlesCount - 1].y = y
		return this
	}
	draw() {
		this.clear()

		this.points = []
		this.particles.forEach((item, index, arr) => {
			const x = item.x
			const y = item.y
			const nextParticle = arr[index + 1]
			this.points.push({
				x: x,
				y: y,
			})
			this.context.beginPath()
			this.context.fillStyle = this.color
			this.context.arc(x, y, this.arcRadius, 0, 2 * Math.PI)
			this.context.fill()
			this.context.closePath()

			if (index !== arr.length - 1) {
				item.x += 0.6 * (nextParticle.x - x)
				item.y += 0.6 * (nextParticle.y - y)
			}
		})

		this.context.beginPath()
		this.context.strokeStyle = this.color
		this.context.lineJoin = 'round'
		this.context.lineCap = 'round'
		this.context.lineWidth = this.arcRadius * 2
		this.points.forEach((point, index, arr) => {
			const { x, y } = point
			if (index === 0) {
				this.context.moveTo(x, y)
			} else {
				this.context.lineTo(x, y)
			}
		})
		this.context.stroke()
		this.context.closePath()

		return this
	}
	clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

		return this
	}
}
