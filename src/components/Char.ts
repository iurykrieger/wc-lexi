import { customElement, property, TemplateResult, html } from 'lit-element'
import Glyph from './Glyph'

@customElement('lexi-char')
export default class Char extends Glyph {
  @property({ type: String })
  private char: string = ''

  render(): TemplateResult {
    return html`${this.char}`
  }
}
