import React from "react";

function ColorItem(props) {
    return <li style={{color: props}}>{props.color}</li>;
    
}
 
export default ColorItem;