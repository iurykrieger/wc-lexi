import Row from './graphics/gui/Row'
import CanvasWindow from './graphics/window/CanvasWindow'
import Word from './graphics/gui/Word'

function init () {
  const window = new CanvasWindow()
  const editor = new Row()
  const row = new Row()
  const word = new Word('Iury Krieger')

  row.insert(word)
  editor.insert(row)
  editor.insert(row)

  editor.draw(window)
}

window.onload = init
