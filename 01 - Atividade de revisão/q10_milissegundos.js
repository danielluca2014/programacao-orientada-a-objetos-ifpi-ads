import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const milissegundos = Number(input('Digite um valor em milissegundos: '))

    const [dias, horas, minutos, segundos] = converter_milissegundos(milissegundos)

    console.log(`${dias}d ${horas}:${minutos}:${segundos}`)
    
}

function converter_milissegundos(milissegundos){
    const dias = Math.trunc(milissegundos / 86400000)
    let resto1 = milissegundos % 86400000

    const horas = Math.trunc(resto1 / 3600000)
    let resto2 = resto1 % 3600000

    const minutos = Math.trunc(resto2 / 60000)
    let resto3 = resto2 % 60000

    const segundos = Math.trunc(resto3 / 1000)
    
    return [dias, horas, minutos, segundos]
}

main()