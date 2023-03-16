import "./Contador.css";
import React from "react";

class Contador extends React.Component {
  // 1. modo de setar a variavel numero com props passada
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  // 2. modo usando construtor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     numero: props.numeroInicial,
  //   };
  // }

  // Incrementar o valor de numero
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = evento => {
    this.setState({
      passo: +evento.target.value,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <h3>
          <strong>{this.state.numero}</strong>
        </h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Contador;
