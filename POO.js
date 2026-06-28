class Veiculo {
    constructor(veiculo, fabricante, modelo, ano, tipo, potencia, qtdPortas) {
        this.veiculo = veiculo
        this.fabricante = fabricante
        this.modelo = modelo
        this.ano = ano
        this.tipo = tipo
        this.potencia = potencia
        this.qtdPortas = qtdPortas
    }

    mostrarDadosVeiculo() {
        console.log(`
            Veiculo: ${this.veiculo},
            Fabricante: ${this.fabricante},
            Modelo: ${this.modelo},
            Ano: ${this.ano},
            Tipo:  ${this.tipo},
            Potencia: ${this.potencia},
            Quantidade Portas: ${this.qtdPortas} 
            `)
    }
}

class Moto extends Veiculo {
    constructor(veiculo, fabricante, modelo, ano, tipo, potencia) {
        super(veiculo, fabricante, modelo, ano, tipo, potencia)
    }
    mostrarDadosVeiculo() {
        console.log(`
            Veiculo: ${this.veiculo}
            Fabricante: ${this.fabricante},
            Modelo: ${this.modelo},
            Ano: ${this.ano},
            Tipo:  ${this.tipo},
            Potencia: ${this.potencia}
            `)
    }
}

class Carro extends Veiculo {
    constructor(veiculo, fabricante, modelo, ano, tipo, potencia, qntPortas) {
        super(veiculo, fabricante, modelo, ano, tipo, potencia, qntPortas)
    }
}

const minhaMoto = new Moto("Moto", "Yamaha", "FZ250", "2019", "Passeio", "250cc")
const meuCarro = new Carro("Carro", "Chevrolet", "Cruze", "2019", "Passeio", "1.4 Ecotec Turbo", "4")
minhaMoto.mostrarDadosVeiculo()
meuCarro.mostrarDadosVeiculo()