"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const q04_conta_1 = __importDefault(require("./q04_conta"));
const q03_banco_1 = __importDefault(require("./q03_banco"));
let b = new q03_banco_1.default();
b.inserir(new q04_conta_1.default("1", 100));
b.inserir(new q04_conta_1.default("2", 500));
console.log(b.consultar("2").saldo); //500
let c2 = new q04_conta_1.default("2", 600);
b.alterar(c2);
console.log(b.consultar("2").saldo); //600
b.inserir(new q04_conta_1.default("3", 700));
b.depositar("3", 200);
console.log(b.consultar("3").saldo); //900
