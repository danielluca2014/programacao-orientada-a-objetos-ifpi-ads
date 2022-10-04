import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const vetor = new Array(5)

    for (let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input(`Valor ${i}: `))
    }

    const vetor_crescente = ordenar_de_forma_crescente(vetor)
    console.log(vetor_crescente)

    const vetor_decrescente = ordenar_de_forma_decrescente(vetor)
    console.log(vetor_decrescente)
}

function ordenar_de_forma_crescente(vetor){
    for (let i = 0; i < vetor.length; i++){ 
        for (var j = 0; j < (vetor.length - i - 1); j++){ 
            if (vetor[j] > vetor[j + 1]){
                let auxiliar = vetor[j] 
                vetor[j] = vetor[j + 1] 
                vetor[j + 1] = auxiliar
            }
        }        
    }
    return vetor
}

function ordenar_de_forma_decrescente(vetor){
    for (let i = 0; i < vetor.length; i++){ 
        for (var j = 0; j < (vetor.length - i - 1); j++){ 
            if (vetor[j] < vetor[j + 1]){
                let auxiliar = vetor[j] 
                vetor[j] = vetor[j + 1] 
                vetor[j + 1] = auxiliar
            }
        }        
    }
   return vetor
}

main()