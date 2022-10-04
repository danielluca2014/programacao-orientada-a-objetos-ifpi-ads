"use strict";
function pronomeTratamento(nome, pronome_de_tratamento = "Sr.") {
    return pronome_de_tratamento + " " + nome;
}
console.log(pronomeTratamento("Daniel"));
