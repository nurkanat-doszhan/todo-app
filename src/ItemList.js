import Item from "./Item";

const ItemList = (props) => {
  return (
    <div className="list">
      {props.items.map((item, value) => {
        return (
          <Item
            text={item}
            styles={props.styles}
            done={props.done}
            key={value}
            elemClick={(e) => props.elemHandler(e, item)}
            editClick={(e) => props.editHandler(e, item)}
            deleteClick={(e) => props.deleteHandler(e, item)}
          />
        );
      })}
    </div>
  );
};

export default ItemList
