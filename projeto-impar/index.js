let botao1 = document.querySelector(".start");
let valor = document.querySelector(".valor");
let pJogador = document.querySelector(".pJogador");
let pComputador = document.querySelector(".pComputador");
let elmensagem = document.querySelector(".mensagem");


let botaoReiniciar = document.createElement("button");
botaoReiniciar.innerHTML = "Reiniciar Jogo";

let placarJogador = 0;
let placarComputador = 0;

botaoReiniciar.addEventListener("click", reiniciar);

botao1.addEventListener("click", comecarJogo);

function comecarJogo(){
    
    let conteudoTexto = valor.value;

    if(conteudoTexto !== ""){

        if(conteudoTexto >= 0 && conteudoTexto <=10){
            let v = parseInt(conteudoTexto);
            console.log(v);
            let aleatorio = Math.floor( Math.random() *11);
            let s = parseInt(aleatorio + v);
            console.log(s);
            if(s % 2 == 1){
                placarComputador++;
                pComputador.innerHTML = placarComputador;
                elmensagem.innerHTML = "<h3>O Computador Venceu</h3>";
            }else{
                placarJogador++;
                pJogador.innerHTML = placarJogador;
                elmensagem.innerHTML = "<h3>O Player 2 venceu</h3>";
            }

            elmensagem.appendChild(botaoReiniciar);
            botao1.disabled = true;
        }else{
            alert("Deve ser lançado valor entre 0 e 10");
        }
        
    }else{
        alert("Prencha o espaço indicado")
    }

}

function reiniciar(){
    elmensagem.innerHTML = "";
    valor.value = '';
    botao1.disabled = false;
}