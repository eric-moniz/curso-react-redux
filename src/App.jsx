import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/basicos/layout/Card';

const App = () => (
  <div className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>
      <Card titulo='#04 - Desafio Aleatório'>
        <Aleatorio
          max={20}
          min={10}
        />
      </Card>
      <Card titulo='#03 - Fragmento'>
        <Fragmento />
      </Card>
      <Card titulo='#02 - Com Parâmetro'>
        <ComParametro
          titulo='Situação Do Aluno'
          aluno='João'
          nota={6.9}
        />
      </Card>
      <Card titulo='#01 - Primeiro Componente'>
        <Primeiro />
      </Card>
    </div>
  </div>
);

export default App;
