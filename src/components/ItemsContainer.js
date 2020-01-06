import React from "react";
import Item from "./Item";

function ItemsContainer({items}){

    const displayItems = () => {
        return items.map(item => {
            return(
                <div>
                    <Item 
                        key={item.id}
                        item={item} 
                    />
                </div>
            );
        });
    };

    return(
        <div>
            {displayItems()}
        </div>
    );

}

export default ItemsContainer;