import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = props => {
  let nome = "?";
  let idade = 0;
  let nerd = false;

  function fornecerInformacoes(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>
        <span>{nome}</span>
        <span>
          {" "}
          <strong>{idade}</strong>
        </span>
        <span> {nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};

export default IndiretaPai;
