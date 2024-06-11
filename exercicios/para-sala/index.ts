// let numero:number = 10;
// console.log(numero);

// let nome:string = "vanessa";
// console.log(nome);

// const pi:number = 3.14;
// console.log(pi);

// function saudacao(nome: string){
//     console.log(`Olá ${nome}`);
// }

// const nomeUsuario = "Vanessa";

// saudacao(nomeUsuario);


// objeto
// const pessoa = {
//     nome: 'Vanessa',
//     idade: 23,
//     cidade: 'Recife',
//     apresentar: function (): string{
//         return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou de ${this.cidade}` 
//     }
// }

// console.log(pessoa.apresentar());

// classe

class Carro {
    marca: string;
    modelo:string;
    ano:number

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
const meuCarro = new Carro("Toyota", "Corolla", 2024)
console.log(meuCarro);
