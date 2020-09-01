import { LitElement, TemplateResult } from 'lit-element'

interface Renderable {
  render (): TemplateResult
}

export default abstract class Glyph extends LitElement implements Renderable {
  abstract render (): TemplateResult
}
