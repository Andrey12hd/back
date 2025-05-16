const livros = require("./livros.json");

function motrarlivros(){
    console.log("TÍTULo - AUTOR - ANO - PÁGINAS - PREÇO");
    livros.forEach((livro) =>{
        console.log(livro.titulo + "-" + 
        livro.autor + "Ano:" + 
        livro.ano + "Páginas:" + 
        livros.paginas + "Preço: R$ " + 
        livro.preco)
    })
}

function adicionarLivro(titulo, autor, editora, ano, sinopse, paginas, genero, preco){
    livros.push({
        titulo: titulo,
        autor: autor,
        editora:editora,
        ano: ano,
        sinopse: sinopse,
        paginas: paginas,
        genero:genero,
        preco:preco
    })
    console.log("Livro adicionado com sucesso!");
}
adicionarLivro("O Pequeno Princepe",
    "Leonardo davinci",
    "Tilibra",
    "2025",
    "Um Principe que era pequeno",
    1,
    ["teror, comedia"],
    500.99);


function criarArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require('fs');
    fs.writeFileSync("livros.json", livrosTexto);
}

//criarArquivo();

motrarlivros();