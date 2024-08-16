const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoReultado = document.querySelector(".texto-resultao");

const perguntas =

 {
    enunciado: "Pergunta 1",
    alternativas:
         "Alternativa 1",
         "Alternativa 2",
 },

 {
    enunciado: "Pergunta 2",
    alternativas:
         "Alternativa 1",
         "Alternativa 2",
 }

 let atual = 0;
 let perguntaAtual;

 function mostraPergunta() {
    perguntaAtual = perguntas [atual]; 
    caixaPerguntas. textContent = perguntaAtual.enunciado
    motraAlternativas();
 }

 function mostraPergunta() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
    }
 }

 mostraPergunta();