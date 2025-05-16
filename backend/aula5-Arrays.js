let cardapio = ["X-lombo", "X-egg", "X-frango", "X-costela", "pizza"];
 let precos = [10.50, 6.00, 9.00, 15.00, 7.50]; 
 function mostrarCardapio() {
     console.log("Cardápio de Lanches:");
      let i = 0; while (i < cardapio.length) {
        console.log(cardapio[i] + " - R$" + precos[i].toFixed(2)); 
        i++;
    }
} 

function adicionarLanche(nome, preco) {
     cardapio.push(nome);
      precos.push(preco);
}

function mostrarCardapioComDesconto() { 
    console.log("\nLanches com 15% de desconto:"); 
    let i = 0;
    while (i < cardapio.length) { 
        let precoComDesconto = precos[i] * 0.85; 
        console.log(cardapio[i] + " - R$" + precoComDesconto.toFixed(2)); 
        i++; 
    } 
}

mostrarCardapio();
adicionarLanche("X-egg", 9.00);
console.log("\nAdicione um novo lanche:"); 
mostrarCardapio(); 
mostrarCardapioComDesconto();