function calcula() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let operador = document.getElementById("operador").value

    switch (operador) {
        case "+":
            resultado = num1 + num2
            break
        case "-":
            resultado = num1 - num2
            break
        case "*":
            resultado = num1 * num2
            break
        case "/":
            if (num2 == 0) {
                resultado = `Divisão por ${num2} é invalida.`
            } else {
                resultado = num1 / num2
            }
            break
        default:
            resultado = `Operador inválido. ${operador}`
    }

    document.getElementById("resultado").innerHTML = "O resultado da operação é: " + resultado
}