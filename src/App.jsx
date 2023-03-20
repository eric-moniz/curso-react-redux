import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametros";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/basicos/repeticao/ListaAlunos";
import TabelaProdutos from "./components/basicos/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicação/DiretaPai";
import IndiretaPai from "./components/comunicação/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega-sena/Mega";

const App = () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#14 - Desafio Mega Sena" color="#AB274F">
        <Mega numeroDezenas={6} />
      </Card>

      <Card titulo="#13 - Contador #01" color="#FFBF00">
        <Contador numeroInicial={10} />
      </Card>

      <Card titulo="#12 - Componente Controlado" color="#503255">
        <Input />
      </Card>

      <Card titulo="#11 - Comunicação Indireta" color="#1dd8f8">
        <IndiretaPai />
      </Card>

      <Card titulo="#10 - Comunicação Direta" color="#012500">
        <DiretaPai />
      </Card>

      <Card titulo="#09 - Renderização Condicional #02" color="#122548">
        <UsuarioInfo usuario={{ nome: "Eric" }} />
        {/* <UsuarioInfo usuario={{}} />
        <UsuarioInfo /> */}
      </Card>

      <Card titulo="#08 - Renderização Condicional #01" color="#452135">
        <ParOuImpar numero={21} />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#588c73">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Lista de Alunos" color="#ff4c65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00c8f8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Pedro" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#fa6900">
        <Aleatorio max={20} min={10} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#e94c6f">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#e8b71a">
        <ComParametro titulo="Situação Do Aluno" aluno="João" nota={6.9} />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#588c73">
        <Primeiro />
      </Card>
    </div>
  </div>
);

export default App;
