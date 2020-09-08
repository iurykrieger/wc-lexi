import Window from '../window/Window'
import Glyph, { Point } from './Glyph'

export default class Word extends Glyph {
  private children: Glyph[]

  constructor(children: Glyph[] = []) {
    super()
    this.children = children
  }

  draw(window: Window): void {
    this.children.forEach(child => child.draw(window))
  }

  insert(glyph: Glyph): void {
    this.children.push(glyph)
  }

  intersects(point: Point): boolean {
    return this.children.some(child => child.intersects(point))
  }
}
