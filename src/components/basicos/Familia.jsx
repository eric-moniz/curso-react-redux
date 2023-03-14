import React, { cloneElement } from "react";

const Familia = props => {
  return (
    <div>
      {/* 1. metodo  */}
      {React.Children.map(props.children, (child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
      {/* 2. Metodo */}
      {/* {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })} */}
    </div>
  );
};

export default Familia;
