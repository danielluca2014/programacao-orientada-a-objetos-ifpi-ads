function pronomeTratamento(nome: string, pronome_de_tratamento: string = "Sr."): string {
    return pronome_de_tratamento + " " + nome;
}

console.log(pronomeTratamento("Daniel"));