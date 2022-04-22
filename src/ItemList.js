import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    return (
        <div className="list">
            {
                props.items.map((item, value) => {
                    return (
                      <Item text={item}
                        key={value}
                        editClick={(e) =>props.editHandler(e, item)}
                        deleteClick={(e) => props.deleteHandler(e, item)}
                      />
                    )
                })
            }
        </div>
    )
}

export default ItemList;
