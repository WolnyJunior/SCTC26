const produtos = [
    { id: 1, nome: "Celular", preco: 1500.00 },
    { id: 2, nome: "Capacete", preco: 900.00 },
    { id: 3, nome: "Camiseta", preco: 49.99 },
    { id: 4, nome: "Luva", preco: 9.99 },
]

const produtosJson = JSON.stringify(produtos)
console.log(produtos)
console.log(produtosJson)


const produtosObjeto = JSON.parse(produtosJson)
console.log(produtosObjeto)