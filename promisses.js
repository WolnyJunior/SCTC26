// function alerta() {
//     console.log("Alerta")
// }
// setTimeout(() => {
//     console.log("Alertaaaa")
// }, 5000)
// setTimeout(alerta, 3000)
// setInterval(() => {
//     console.log("SetInterval 3s")
// }, 3000)

function buscaDadosServidor() {
    return new Promise((resolve, reject) => {
        console.log('Buscando dados no servidor...')
        setTimeout(() => {
            let sucesso = Math.random() > 0.5

            if (sucesso) {
                resolve("Dados coletados com sucesso.")
            } else {
                reject("Falha ao buscar dados no servidor.")
            }
        }, 2000)
    })
}

// buscaDadosServidor().then((mensagem) => {
//     console.log(mensagem)
// }).catch((erro) => {
//     console.error(erro)
// })

const minhaFuncaoAssincrona = async () => {
    try {
        const resultado = await buscaDadosServidor()
        console.log(resultado)
    } catch (erro) {
        console.error(erro)
    }
}

minhaFuncaoAssincrona()