console.log(`Trabalhando com Condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 11
console.log(`Destinos possíveis:`)
console.log(listaDeDestinos)

if(idadeComprador >= 18){

    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1,1) //Removendo item
}else{

console.log("Não é maior de Idade e não posso vender")
}