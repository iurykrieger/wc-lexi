import { customElement, property, TemplateResult, html } from 'lit-element'
import Glyph from './Glyph'
import './Char'

@customElement('lexi-image')
export default class Image extends Glyph {
  @property({ type: URL })
  private src: URL | null = null

  render(): TemplateResult {
    return this.src
      ? html`<img src="${this.src}" />`
      : html``
  }
}
