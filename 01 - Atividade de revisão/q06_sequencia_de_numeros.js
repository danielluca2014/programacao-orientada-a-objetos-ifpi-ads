import prompt from 'prompt-sync'
var input = prompt()

function main(){
    let valor = Number(input('Valor: '))
    let vetor = []

    while (valor !== -1){
        vetor = adicionar_novos_valores(vetor, valor)
        valor = Number(input('Valor: '))
    } 
    
    const soma = calcular_soma_dos_valores(vetor)
    const media = calcular_media_dos_valores(vetor, soma)
    const desvio_padrao = calcular_desvio_padrao(vetor, media)

    console.log(`Soma: ${soma}`)
    console.log(`Média aritmética: ${media.toFixed(2)}`)
    console.log(`Desvio padrão: ${desvio_padrao}`)
}

function adicionar_novos_valores(vetor, valor){
    let vetor2 = new Array(vetor.length + 1)
    let j = 0

    for (let i = 0; i < vetor2.length; i++){
        if (i === vetor2.length - 1){
            vetor2[i] = valor
    
        }else{
            vetor2[i] = vetor[j]
            j++
        }
    }
    return vetor2
}

function calcular_soma_dos_valores(vetor){
    let soma = 0

    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
   return soma
}


function calcular_media_dos_valores(vetor, soma){
    let media = soma / vetor.length
    return media
}

function calcular_desvio_padrao(vetor, media){
    let variancia = 0

    for (let i = 0; i < vetor.length; i++) {
        variancia += (vetor[i] - media) * (vetor[i] - media)
    }

    variancia = variancia / vetor.length
    let desvio_padrao = Math.sqrt(variancia)

    return desvio_padrao
}

main()