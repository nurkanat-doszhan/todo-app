import {React, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import ItemList from './ItemList'
import Tooltip from './components/ToolTip/Tooltip'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [showTip, setShowTip] = useState(false)
  const [items, setItems] = useState([])
  const [showText, setShowText] = useState(true)

  const addHandler = () => {
    if(inputText == '' || inputText == ' ') {
      setShowTip(true)
      setTimeout(() => {
        setShowTip(false)
      }, 2000)
    } else {
      setInputText('')
      setShowTip(false)
      setItems([...items, inputText])
      localStorage.setItem('test', 1)
    }
    // localStorage('key', 'value')
  }

  const deleteHandler = (e, i) => {
    let itemIndex = items.indexOf(i)
    items.splice(itemIndex, 1)
    setItems([...items])
    e.stopPropagation()
  }

  const editHandler = (e, i) => {
    let s = prompt("Изменить текст", i)
    if (s === null) {
      e.stopPropagation()
      return
    }
    let itemIndex = items.indexOf(i);
    items[itemIndex] = s;
    setItems([...items])
    e.stopPropagation()
  }

  return (
    <div className="App">
      <h1>Список задач: {items.length}</h1>
      <div className="add">
        <div className="add-new-elem">
          { showTip ? <Tooltip text="Введите текст" /> : null }
          <input
            type="text" value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Добавить задачу"
          />
          <button onClick={addHandler}>Добавить</button>
        </div>
        <ItemList
          items={items}
          editHandler={(e, i) => editHandler(e, i)}
          deleteHandler={(e, i) => deleteHandler(e, i)}
        />
      </div>
    </div>
  );
}

export default App;
