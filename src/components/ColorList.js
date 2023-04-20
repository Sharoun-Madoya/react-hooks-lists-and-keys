import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

const colorElements = colors.map((colors) => {
  return <ColorItem key ={color} color={color}/>
});
}

export default ColorList;
