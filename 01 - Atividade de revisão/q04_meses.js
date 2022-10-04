import prompt from 'prompt-sync'
var input = prompt()

function main(){
    const num_mes = Number(input('Número do mês: '))

    const mes_por_extenso = determinar_mes_por_extenso(num_mes)

    const quantidade_de_dias = determinar_quantidade_de_dias(mes_por_extenso)

    console.log(`${mes_por_extenso} - ${quantidade_de_dias} dias`)
}


function determinar_mes_por_extenso(num_mes){
    if (num_mes === 1){
        return 'Janeiro'
    }else if (num_mes === 2){
        return 'Fevereiro'
    }else if (num_mes === 3){
        return 'Março'
    }else if (num_mes === 4){
        return 'Abril'
    }else if (num_mes === 5){
        return 'Maio'
    }else if (num_mes === 6){
        return 'Junho'
    }else if (num_mes === 7){
        return 'Julho'
    }else if (num_mes === 8){
        return 'Agosto'
    }else if (num_mes === 9){
        return 'Setembro'
    }else if (num_mes === 10){
        return 'Outubro'
    }else if (num_mes === 11){
        return 'Novembro'
    }else if (num_mes === 12){
        return 'Dezembro'
    }
}

function determinar_quantidade_de_dias(mes){
    if (mes === 'Fevereiro'){
        return 28
    }else if (mes === 'Abril' || mes === 'Junho' || mes === 'Setembro' || mes === 'Novembro'){
        return 30
    }else{
        return 31
    }
}

main()