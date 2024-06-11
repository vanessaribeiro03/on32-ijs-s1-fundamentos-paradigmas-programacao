import {Animal} from './animal';

class Cachorro implements Animal{
    nome:string;
    idade:number;
    raca:string;

    constructor(nome:string, idade:number, raca:string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca
    }

    som(): void {
        console.log('cachorro faz au-au');
    }
}

class Gato implements Animal{
    nome:string;
    idade:number;
    cor:string;

    constructor(nome:string, idade:number, cor:string){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor
    }

    som(): void {
        console.log('Gato faz miau');
    }
}

const meuCachorro = new Cachorro('Rex', 3, 'Labrador');
console.log(meuCachorro.nome);
console.log(meuCachorro.idade);
console.log(meuCachorro.raca);
meuCachorro.som();


const meuGato = new Gato('Paçoca', 1, 'preto');
console.log(meuGato.nome);
console.log(meuGato.idade);
console.log(meuGato.cor);
meuGato.som();