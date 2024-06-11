import {ProdutoEcologico} from './produtoEcologico';

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome:string;
    preco:number;
    volume:number;

    constructor(nome:string, preco:number, volume:number){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    exibirInformacoes():string {
        return `Nome: ${this.nome}\nPreço: ${this.preco}\nVolume: ${this.volume}ml` 
    }
}

const produto = new ProdutoLimpezaBiodegradavel('sabão em pasta', 10.90, 100);
console.log(produto.exibirInformacoes());