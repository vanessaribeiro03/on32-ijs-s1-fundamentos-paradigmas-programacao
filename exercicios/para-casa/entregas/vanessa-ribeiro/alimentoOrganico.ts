import {ProdutoEcologico} from './produtoEcologico';

class AlimentoOrganico implements ProdutoEcologico{
    nome:string;
    preco:number;
    dataValidate:Date;
    ingredientes:string[];

    constructor(nome:string, preco:number, dataValidate:Date, ingredientes:string[]){
        this.nome = nome;
        this.preco = preco;
        this.dataValidate = dataValidate;
        this.ingredientes = ingredientes;
    }

    exibirInformacoes():string {
        return `Nome: ${this.nome}\nPreço: ${this.preco}\nData de validade: ${this.dataValidate.toLocaleDateString()}\nIngredientes: ${this.ingredientes}` 
    }
}

const alimento = new AlimentoOrganico("Castanha", 25.50, new Date('2025/06/10'), ['castanha'])
console.log(alimento.exibirInformacoes());
 