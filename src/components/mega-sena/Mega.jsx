import "./Mega.css";
import React from "react";
import Display from "./Display";
import Botao from "./Botao";
import NumDezenas from "./NumDezenas";
import geraSequencia from "./gerador";

class Mega extends React.Component {
  // 1. modo de setar a variavel numero com props passada
  state = {
    numDezenas: this.props.numeroDezenas || 6,
    dezenasSorteadas: "",
  };

  // 2. modo usando construtor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     numero: props.numeroInicial,
  //   };
  // }

  geraDezenas = () => {
    this.setState({
      dezenasSorteadas: geraSequencia(this.state.numDezenas),
    });
  };

  setNumDezenas = num => {
    this.setState({
      numDezenas: num,
    });
  };

  render() {
    return (
      <div className="Mega">
        <h2>Mega Sena</h2>
        <Display sequencia={this.state.dezenasSorteadas} />
        <NumDezenas
          value={this.state.numDezenas}
          setNumDezenas={this.setNumDezenas}
        />
        <Botao geraDezenas={this.geraDezenas} />
      </div>
    );
  }
}

export default Mega;
