import Conta from "./q04_conta";
import Banco from "./q03_banco";

let b: Banco = new Banco();

b.inserir(new Conta("1", 100));
b.inserir(new Conta("2", 500));
console.log(b.consultar("2").saldo); //500

let c2 = new Conta("2", 600);
b.alterar(c2);
console.log(b.consultar("2").saldo); //600

b.inserir(new Conta("3", 700));
b.depositar("3", 200);
console.log(b.consultar("3").saldo); //900