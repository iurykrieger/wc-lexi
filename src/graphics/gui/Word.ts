import Window from '../window/Window'
import Glyph from './Glyph'

export default class Word extends Glyph {
  private word: string

  constructor(word: string) {
    super()
    this.word = word
  }

  draw(window: Window): void {
    window.drawText(this.word, 10, 100)
  }
}
