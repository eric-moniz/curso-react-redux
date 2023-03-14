import React from "react";
import { produtos } from "../../../data/produtos";
import "./Tabela.css";

const TabelaProdutos = () => {
  const tabela = produtos.map(el => {
    return (
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.produto}</td>
        <td>R$ {el.preço.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <table className="Tabela">
      <thead>
        <tr>
          <th>Id</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>

      <tbody>{tabela}</tbody>
    </table>
  );
};

export default TabelaProdutos;
