// const livro = function (nome, editora, paginas) {
//     gNome = nome,
//         gEditora = editora,
//         gPaginas = paginas

//     this.getNome = function () {
//         return gNome
//     }
//     this.getEditora = function () {
//         return gEditora
//     }
//     this.getPaginas = function () {
//         return gPaginas
//     }
// }

// const graphQL = new livro("GraphQL", "Casa do Código", 143);
// console.log(graphQL.getNome());
// console.log(graphQL.getEditora());
// console.log(graphQL.getPaginas());

// const nome = "Alura";

// const temp = new String(nome)
// console.log(temp.toString())

////////////////
class livro {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`);
    }
    descreverTítulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`);
    }
}

// const nodeJS = new livro("Primeiros passos com NodeJS", "Casa do Código", 195);
// nodeJS.anunciarTitulo();
// nodeJS.descreverTítulo();

class livroCloecao extends livro {
    constructor(nome, nomeColecao) {
        super(nome);
        this.nomeColecao = nomeColecao
    }
    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
}

const logicaDeProgramacao = new livroCloecao("Lógica de Programação", "Comece a Programar");
logicaDeProgramacao.descreverColecao();