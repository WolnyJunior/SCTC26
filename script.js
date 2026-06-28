function verificarAprovacao() {
    var nota = document.getElementById("nota").value

    if (nota >= 7) {
        console.log(`Aluno aprovado. Nota:${nota}`)
        document.getElementById("resultado").innerHTML = `Aluno Aprovado. Nota:${nota}`
        alert(`Aluno Aprovado. Nota:${nota}`)
    }
    if (nota < 7 && nota >= 0 && nota !== null) {
        console.log(`Aluno reprovado. Nota:${nota}`)
        document.getElementById("resultado").innerHTML = `Aluno Reprovado. Nota:${nota}`
        alert(`Aluno Reprovado. Nota:${nota}`)
    }
}


function calculaDesconto() {
    var valorProduto = Number(document.getElementById("preco").value)
    var desconto = Number(document.getElementById("desconto").value)

    if (valorProduto < 1 || desconto < 1) {
        alert("Não é permitido informar valores negativos.");
        console.log("Não são permitidos valores negativos")
        return;
    }

    var porcentagem = valorProduto * (desconto / 100)

    var valorFinal = valorProduto - porcentagem
    console.log(
        `Valor Produdo ${valorProduto}`,
        `Desconto: ${porcentagem}%`,
        `Valor Final: ${valorFinal}`
    )

    document.getElementById("valorProduto").innerHTML = `Valor Produto: $${valorProduto}`
    document.getElementById("descontoProduto").innerHTML = `Desconto: ${porcentagem}%`
    document.getElementById("valorFinal").innerHTML = `Preço Final: $${valorFinal}`

    alert(`Valor Final: ${valorFinal}`)
}

