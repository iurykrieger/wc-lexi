import { customElement, property, TemplateResult, html } from 'lit-element'
import Glyph from './Glyph'
import './Char'

@customElement('lexi-word')
export default class Word extends Glyph {
  @property({ type: String })
  private word: String = ''

  render(): TemplateResult {
    return html`${this.word.split('').map(char => html`<lexi-char char="${char}"></lexi-char>`)}`
  }
}
