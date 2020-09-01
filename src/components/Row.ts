import { customElement, html } from 'lit-element'
import Glyph from './Glyph'

@customElement('lexi-row')
export default class Row extends Glyph {
  // static get styles() {
  //   return css`
  //     #root {
  //       text-align: center;
  //     }
  //   `;
  // }

  public render() {
    return html`
      <td>
        <slot></slot>
      </div>
    `
  }
}
