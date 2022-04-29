import { useState, useEffect } from "react";
import "./App.css";
import Item from "./Item";
import Radium from "radium";
import { fadeIn, fadeOut } from "react-animations";
import Tooltip from "./components/ToolTip/Tooltip";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [showTip, setShowTip] = useState(false);
  const [items, setItems] = useState([]);
  const [done, setDone] = useState(false);
  const [anim, setAnim] = useState(true);

  const styles = {
    fadeIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
    fadeOut: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeOut, "fadeOut"),
    },
    elementStyle: {
      backgroundColor: "#3dcd3360",
      borderColor: "#3dcd33",
    },
  };
  let data = JSON.stringify(items);

  useEffect(() => {
    /****** Исправить ошибку split ******/
    /* Uncaught TypeError: Cannot read properties of null (reading 'split') */

    // let str = localStorage.getItem('todos')
    // let newItems = str.split(',')
    // if(items.length == 0) {
    //   return 0
    // } else {
    //   setItems(newItems)
    // }
    console.log(data)

    return () => {
      return 0;
    };
  }, []);

  const updateLocalStorage = () => {
    console.log(items);
    localStorage.setItem("todos", data);
  };

  const elemHandler = (e) => {
    setDone(!done);
    e.stopPropagation();
  };

  const addHandler = () => {
    if (inputText === "" || inputText === " ") {
      console.log(localStorage.getItem("todos"));
      setShowTip(true);
      setTimeout(() => {
        setShowTip(false);
      }, 2000);
    } else {
      setAnim(true)
      setItems([...items, inputText]);
      setInputText("");
      setShowTip(false);
      updateLocalStorage();
    }
  };

  const deleteHandler = (id, e) => {
    let itemIndex = items.indexOf();
    console.log(id, e)
    items.splice(id, 1);
    setItems([...items]);
    setAnim(false);
    // localStorage.setItem("todos", [...items]);
    e.stopPropagation();
  };

  const editHandler = (id) => {
    let s = prompt("Изменить текст", items[id]);
    if (s === null) {
      return;
    }
    setItems([...items]);
    localStorage.setItem("todos", data);
  };

  return (
    <div className="App">
      <h1>Список задач: {items.length}</h1>
      <div className="add">
        <div className="add-new-elem">
          {showTip ? <Tooltip text="Введите текст" /> : null}
          <input
            type="text"
            value={inputText}
            placeholder="Добавить задачу"
            onChange={(e) =>
              setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addHandler();
              }
            }}
          />
          <button onClick={() => addHandler()}>Добавить</button>
          <span onClick={() =>
            setItems(localStorage.getItem("todos"))}>
            Получить данные
          </span>
        </div>
        {
          items.map((item, value) => {
            return (
              <Item
                // styles={anim ? styles.fadeIn : styles.fadeOut}
                key={value}
                id={value}
                text={item}
                done={done}
                styles={[
                  anim ? styles.fadeIn : styles.fadeOut,
                  done ? styles.elementStyle : null ]}
                elemClick={(e, i) => elemHandler(e, i)}
                editClick={(e, i) => editHandler(e, i)}
                deleteClick={(id, e) => deleteHandler(id, e)}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default App;
