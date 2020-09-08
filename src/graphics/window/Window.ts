export default abstract class Window {
  abstract drawText(text: string, x: number, y: number): void
  abstract drawRectangle(width: number, height: number, color: string): void
}
