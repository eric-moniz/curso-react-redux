function geraNumero() {
  return parseInt(Math.random() * 60) + 1;
}

export default function geraSequencia(qtd) {
  let sequencia = [];

  while (sequencia.length < qtd) {
    const numGerado = geraNumero();

    if (!sequencia.includes(numGerado)) sequencia.push(numGerado);
  }

  return sequencia.sort((n1, n2) => n1 - n2).toString();
}
