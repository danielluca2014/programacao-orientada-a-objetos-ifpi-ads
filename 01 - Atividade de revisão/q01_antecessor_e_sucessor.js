import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const num = Number(input('Digite um número ponto flutuante: '))

    const antecessor = determinar_antecessor(num)
    const sucessor = determinar_sucessor(num)

    console.log(`Antecessor: ${antecessor} \nSucessor: ${sucessor}`) 
}

function determinar_antecessor(num){
    let numero_arredondado = Math.trunc(num)
    let numero_antecessor = numero_arredondado - 1 
    return numero_antecessor
}

function determinar_sucessor(num){
    let numero_arredondado = Math.trunc(num)
    let numero_sucessor = numero_arredondado + 1 
    return numero_sucessor
}

main()