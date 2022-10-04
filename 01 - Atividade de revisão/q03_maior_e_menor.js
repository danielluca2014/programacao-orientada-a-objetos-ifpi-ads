import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const [num1, num2, num3] = input('Digite três valores inteiros: ').split(' ').map(Number)

    const maior = determinar_maior_valor(num1, num2, num3)
    const menor = determinar_menor_valor(num1, num2, num3)

    console.log(`Maior número: ${maior}`)
    console.log(`Menor número: ${menor}`)
}

function determinar_maior_valor(num1, num2, num3){
    let num_maior = num1

    if(num2 > num_maior){
        num_maior = num2  
    } 

    if(num3 > num_maior){
        num_maior = num3
    } 
    
    return num_maior
}
    
function determinar_menor_valor(num1, num2, num3){
    let num_menor = num1

    if(num2 < num_menor){
        num_menor = num2
    } 

    if(num3 < num_menor){
        num_menor = num3
    } 

    return num_menor
}
    
main()