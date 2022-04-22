import {React, useState} from 'react'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const Item = (props) => {
  let [done, setDone] = useState(false)
  let [anim, setAnim] = useState('')
  let elementStyle = { backgroundColor: '#3dcd3360', borderColor: '#3dcd33' }
  const elemClick = () => {
    setDone(!done);
  }
  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

  return (
    <StyleRoot>
      <div className="item"
        onClick={elemClick}
        style={styles.fadeIn}//styles.fadeIn
        // style={ done ? elementStyle : null }
        >
        <div className="text">
          <span style={{ textDecoration: done ? 'line-through' : null }}>{props.text}</span>
        </div>
        {
          !done &&
          <span className="edit" onClick={props.editClick}>
            <span className="material-icons">edit</span>
          </span>
        }
        <span className="close" onClick={props.deleteClick}
         style={{ borderColor: done ? '#3dcd33' : null }}>
          <span className="material-icons">close</span>
        </span>
      </div>
    </StyleRoot>
  )
}

export default Item;
