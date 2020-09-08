import Window from './Window'

export default class CanvasWindow extends Window {
  private canvas: HTMLCanvasElement

  constructor() {
    super()
    this.canvas = document.createElement('canvas')
    document.body.appendChild(this.canvas)
  }

  get context (): CanvasRenderingContext2D | null {
    return this.canvas.getContext('2d')
  }

  drawText(text: string, x: number, y: number): void {
    this.context?.fillText(text, x, y)
  }

  drawRectangle(x: number, y: number, color: string): void {
    this.context?.fillRect(x, y, 0, 0)
  }

}
