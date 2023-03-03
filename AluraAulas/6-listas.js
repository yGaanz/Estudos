console.log(`Trabalhando com Listas`)
// const Salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`)//Adicionando um item na lista
console.log("Destinos possíveis:")
//console.log(Salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos)
//listaDeDestinos = 2  < Vai dar erro

listaDeDestinos.splice(1,1)
console.log(listaDeDestinos)
console.log(listaDeDestinos[1])