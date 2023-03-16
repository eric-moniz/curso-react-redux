import "./Input.css";
import React, { useState } from "react";

const Input = props => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>{valor}</h2>
        <input value={valor} onChange={quandoMudar} />

        {/*
        Usar readOnly quando tiver um elemento input sem a propriedade onChange, para eliminar o erro no console do react
        <input value={valor} readOnly />
        */}

        {/* 
        Quando quiser um elemento que não esteja vinculado a nenhum estado usamos:
        <input value={undefined} />
        */}
      </div>
    </div>
  );
};

export default Input;
