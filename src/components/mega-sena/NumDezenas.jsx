import React from "react";

const NumDezenas = props => {
  return (
    <div>
      <label htmlFor="passoInput">Número de dezenas: </label>
      <input
        id="passoInput"
        type="number"
        value={props.value}
        onChange={e => props.setNumDezenas(+e.target.value)}
        min="6"
      />
    </div>
  );
};

export default NumDezenas;
