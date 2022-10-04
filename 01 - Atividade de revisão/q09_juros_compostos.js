import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const v = Number(input('Valor em real: '))
    const t = Number(input('Taxa de juros (%): '))

    const taxa_aplicada = calcular_juros_compostos(v, t)

    console.log(taxa_aplicada)
}

function calcular_juros_compostos(v, t){
    const array = new Array(12)
    let juros

    for (let i = 0; i < array.length; i++){
        juros = v * (t / 100)
        v += juros
        array[i] = v
    }
    return array
}

main()