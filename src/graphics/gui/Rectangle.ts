import Window from '../window/Window'
import Glyph from './Glyph'

export default class Rectangle extends Glyph {
  private width: number
  private height: number
  private color: string

  constructor(width: number, height: number, color: string) {
    super()
    this.width = width
    this.height = height
    this.color = color
  }

  draw(window: Window): void {
    window.drawRectangle(this.width, this.height, this.color)
  }
}
