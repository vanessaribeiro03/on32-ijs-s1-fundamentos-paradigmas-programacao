import {Livro} from './livros';

class LivroDigital implements Livro{
    titulo:string;
    autor:string;
    formato:string;

    constructor(titulo:string, autor:string, formato:string){
        this.titulo = titulo;
        this.autor = autor;
        this.formato = formato;
    }

    detalhes(): string {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}` 
    }
}

const livro = new LivroDigital('Interestelar', 'Christopher Nolan', 'PDF')
console.log(livro.detalhes());
