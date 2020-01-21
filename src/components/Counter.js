import React from "react";

function Counter({itemQuantity, deleteItem, increase, decrease, itemId, item}){

    return(
        <div className="item-counter">
            {itemQuantity === 1
                ? <button className="counter-button" onClick={() => deleteItem(item)}>🗑</button>
                : <button className="counter-button" onClick={() => decrease(itemId)}>➖</button>
            }
            <button className="counter-number">{itemQuantity}</button>
            <button className="counter-button" onClick={() => increase(itemId, item)}>➕</button>
        </div>
    );
}

export default Counter;