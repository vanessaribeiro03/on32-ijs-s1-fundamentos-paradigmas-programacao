import {ProdutoEcologico} from './produtoEcologico';

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome:string;
    preco:number;
    material:string;
    dimensoes: {
        largura:number;
        altura:number;
        profundidade:number;
    }

    constructor(nome:string, preco:number, material:string, dimensoes: { largura: number; altura: number; profundidade: number }){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    exibirInformacoes():string {
        return `Nome: ${this.nome}\nPreço: ${this.preco}\nMaterial: ${this.material}\nDimensões: L ${this.dimensoes.altura}cm x A ${this.dimensoes.largura}cm x P ${this.dimensoes.profundidade}cm` 
    }
}

const item = new ItemDecoracaoSustentavel('Saboneteira bambu', 49.99, 'bambu', {largura: 14, altura: 3, profundidade:14});
console.log(item.exibirInformacoes());
