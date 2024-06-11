import {ContaBancara} from './contaBancaria';

class ContaCorrente implements ContaBancara {
    saldo: number;

    constructor(saldoInicial:number){
        this.saldo = saldoInicial
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if(valor > this.saldo){
            console.log("saldo insuficiente.");
        }else{
            this.saldo -= valor
        }
    }
}

const conta = new ContaCorrente(1000);
console.log('saldo inicial: ', conta.saldo);

conta.depositar(500);
console.log('saldo apos deposito: ', conta.saldo);

conta.sacar(200);
console.log('saldo apos saque: ', conta.saldo);

conta.sacar(2000);


