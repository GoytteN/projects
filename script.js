function deltaCalc (a, b, c) {

  const part1 = (b) ** 2
  const part2 = 4 * a * c
  // console.log(part1, part2)
  const resultado = part1 - (part2)
  // console.log(resultado)
  return resultado
}

function deltaRad (valorDelta) {
  const deltaRes = Math.sqrt(valorDelta)
  // console.log(valorDelta)
  return deltaRes
}

function minusB (x) {
  const b = x * (-1)
  return b
}

function enviar() {
    
  let a = document.getElementById('a').value
  let b = document.getElementById('b').value
  let c = document.getElementById('c').value

  let eq = deltaCalc(a, b, c)
  let deltaValue = deltaRad(eq)
  let bNeg = minusB(b)

  if (deltaValue > 0) {
  const deltaValue1 = (bNeg + deltaValue) / (2 * a)
  const deltaValue2 = (bNeg - deltaValue) / (2 * a)
  console.log(`O valor de x1 é ${deltaValue1} e x2 é ${deltaValue2}`)
} else {
  let delta = minusB(deltaValue)
  console.log(delta)
  console.log('O valor de delta é ' + delta + ', sendo assim, não tem raiz.')
  }
}

