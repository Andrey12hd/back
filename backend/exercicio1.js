let av1 = 5.0;
let av2 = 6.0;
let recup1 = 7.0;
let recup2 = 3.0;

 if (recup1 > av1) {
     av1 = recup1;  
}

    if (recup2 > av2) {
    av2 = recup2; 
}
let media = (av1 + av2) /2;
let situacao;
    if (media >= 6.0){
        situacao = "Aprovado"
    } else{
        situacao = "reprovado"
    }
    console.log("media aluno:"+ media);
    console.log("Situacao:"+ situacao);
