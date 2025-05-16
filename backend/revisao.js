const nome = "Felipe"; 
let numeroChamada = 10; 


const jogos = ["COD Mobile", "Clash Royale", "FIFA"];


console.log("####### EXERCÍCIO 3 #######");
console.log(`Jogos favoritos de ${nome} são:`);

var contador = 0;
while (contador < jogos.length) {
    console.log(jogos[contador]);
    contador++;
}

const objeto = [{
    nome,              
    nomef: "Capitão América",
    ano: 2011,
    nota: 7.9
}];


const notaFilme = objeto[0].nota;

if (notaFilme <= 4.0) {
    console.log("O filme possui uma nota considerada baixa.");
} else if (notaFilme > 4.0 && notaFilme <= 7.0) {
    console.log("O filme é considerado razoável.");
} else {
    console.log("O filme é muito bom!");
}
console.log();

const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
];

console.log("EXE 6");
console.log("Clima para essa semana:");

function verificarPrevisao(listaPrevisao) {
    var i = 0;

    while (i < listaPrevisao.length) {
        const dia = listaPrevisao[i];
        console.log(`Dia: ${dia.dia}`);

        if (dia.chanceDeChuva > 50) {
            console.log("Levar guarda-chuva.");
        } else {
            console.log("Tempo agradável.");
        }

        i++;
    }
}

verificarPrevisao(previsaoTempo);