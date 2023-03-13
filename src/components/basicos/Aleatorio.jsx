import React from 'react';
/**
 * Retorna um número aleatório entre min e máx
 * @param {number} props.min
 * @param {number} props.max
 * @returns um número aleatório
 */
const Aleatorio = props => {
  const { min, max } = props;
  const aleatorio = Math.floor(Math.random() * (max + 1 - min)) + min;
  return (
    <p>
      Número aleatório entre {min} e {max} = {aleatorio}
    </p>
  );
};

export default Aleatorio;
