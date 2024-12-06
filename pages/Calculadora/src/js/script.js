/* Essa função ira analisar o valor digitado e com base nisso irar fazer o calculo*/
function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      document.getElementById('resultado').value = ""
    }
    if (valor === "+" || valor === "-" || valor === "*"
      || valor === "/" || valor === "."
    ) {
      document.getElementById('resultado').value += valor
    }
    if (valor === "=") {
      var valor_campo = document.getElementById('resultado').value

      /* A propriedade Eval() é Simplismente magnifica, ela pega o valor do tipo str e calcula par um valor number*/
      document.getElementById('resultado').value = eval(valor_campo)


    }
  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
  }
}