import React from "react";

const Botao = props => {
  return (
    <div>
      <button onClick={props.geraDezenas}>Gerar sequência</button>
    </div>
  );
};

export default Botao;
