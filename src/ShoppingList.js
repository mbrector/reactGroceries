import React from "react";

function ShoppingList(props){
    return(
        <div>
            <h3>{props.item}</h3>
            <h4>Brand: {props.brand}</h4>
            <h4>Quantity: {props.quantity}</h4>
            <h4>Units: {props.units}</h4>
        </div>
    )
}

export default ShoppingList