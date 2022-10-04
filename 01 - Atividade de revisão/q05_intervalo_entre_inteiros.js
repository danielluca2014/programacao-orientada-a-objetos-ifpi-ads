import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const max_value = Number(input('Valor máximo: '))
    const min_value = Number(input('Valor mínimo: '))

    let i = min_value + 1
    
    while (i < max_value){
        console.log(i)
        i++
    }
}

main()