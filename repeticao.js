const carros = ["uno", "fusca", "escort", "gol"]

const conteudo = document.getElementById("conteudo")
let dados
let i

function criaSecao(titulo, dadosFuncao) {
    const secao = document.createElement("div")
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosFuncao
    conteudo.appendChild(secao) 
}

dados = ""
i = 0
while (i < 4) {

    dados += "<p>" + carros[i] + "</p>"
    i++
}
criaSecao("Loop while", dados)



dados = ""
i = 0
while (i < carros.length) {

    dados += "<p>" + carros[i] + "</p>"
    i++
}
criaSecao("While melhorado", dados)

do {
    dados += "<p>" + carros[i] + "</p>"
    i++
} while (i < carros.length)
criaSecao("While Iinvertido", dados)

dados = ""
for (i = 0; i < carros.length; i++) {
    dados += "<p>" + carros[i] + "</p>"
}
criaSecao("Loop For", dados)

dados = ""
for (let carro of carros) {
    if (carro === "escort")
        break
        dados += "<p>" + carro + "</p>"
}
criaSecao("Loop For of", dados)

let moto = { marca: "Yamaha", modelo: "Fz250", ano: "2019" }
let moto2 = { marca: "Honda", modelo: "Fan", ano: "2022" }

let motos = []
motos.push(moto)
motos.push(moto2)

dados = ""
for (let moto of motos) {

    let propriedades = ""

    for (let prop in moto) {

        propriedades += moto[prop] + "|"

    }
    dados += "<p>" + propriedades + "</p>"
}
criaSecao("Loop for in", dados)

dados = ""

carros.forEach((carro) => {
    dados += "<p>" + carro + "</p>"
})
criaSecao("Loop ForEach", dados)
