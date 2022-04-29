import Radium, { StyleRoot } from "radium";

const Item = (props) => {
  return (
    <StyleRoot>
      <div
        className="item"
        onClick={props.elemClick}
        style={props.styles}
        /*style={[
                    anim ? styles.fadeIn : styles.fadeOut,
                    done ? styles.elementStyle : null ]}*/
      >
        <div className="text">
          <span
            style={{
              textDecoration: props.done ? "line-through" : null,
            }}
          >
            {props.text}
          </span>
        </div>
        {!props.done && (
          <span className="edit" onClick={() => props.editClick(props.id)}>
            <span className="material-icons">edit</span>
          </span>
        )}
        <span
          className="close"
          onClick={(e) => props.deleteClick(props.id, e)}
          style={{ borderColor: props.done ? "#3dcd33" : null }}
        >
          <span className="material-icons">close</span>
        </span>
      </div>
    </StyleRoot>
  );
};

export default Item;
