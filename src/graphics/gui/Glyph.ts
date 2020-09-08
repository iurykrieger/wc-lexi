import Window from '../window/Window'

export interface Bounds {
  left: number
  right: number
  top: number
  bottom: number
}

export interface Point {
  x: number
  y: number
}

interface Renderable {
  bounds: Bounds

  draw(window: Window): void
  intersects(point: Point): boolean
}

export default abstract class Glyph implements Renderable {
  bounds: Bounds

  constructor() {
    this.bounds = {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0
    }
  }

  abstract draw(window: Window): void

  intersects(point: Point): boolean {
    if (point.x < this.bounds.left || point.x >= this.bounds.right) {
      return false
    } else if (point.y < this.bounds.top || point.y >= this.bounds.bottom) {
      return false
    }

    return true
  }
}
