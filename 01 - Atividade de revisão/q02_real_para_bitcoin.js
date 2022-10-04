import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const num_real = Number(input('Digite um valor em real: '))

    const num_bitcoin = converter_para_bitcoin(num_real)

    console.log(`Valor em bitcoin: ${num_bitcoin.toFixed(8)}`)
}

function converter_para_bitcoin(num_real){
    return num_real * 0.00000839
}

main()