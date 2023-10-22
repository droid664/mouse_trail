import { MouseCursorCustom } from './mouseCursorCustom'
import './style.css'
import { Trail } from './trail'

const mouse = {
	x: 0,
	y: 0,
}

const customMouse = new MouseCursorCustom(mouse)
const trail = new Trail()

window.addEventListener('mousemove', mouseCoords)

function mouseCoords(e) {
	mouse.x = e.clientX
	mouse.y = e.clientY

	customMouse.update()
}

function tick() {
	trail.update(mouse.x, mouse.y).draw()

	requestAnimationFrame(tick)
}
tick()
