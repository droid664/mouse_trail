export class MouseCursorCustom {
	constructor(mouseCoords) {
		this.el = document.querySelector('.cursor')
		this.coords = mouseCoords

		if (!this.el) {
			console.error('Element is undefined')
			return false
		}

		this.rect = this.el.getBoundingClientRect()
	}
	update() {
		this.el.style.transform = `translate(${this.coords.x - this.rect.width / 2}px, ${
			this.coords.y - this.rect.height / 2
		}px)`
	}
}
