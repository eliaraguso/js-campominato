// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50





// definisco un'array che conterrà i 16 numeri casuali compresi tra 1  e 100 delle bombe

let numeriBombe = [];
console.log(numeriBombe);


// Genero un array di 16 numeri casuali univoci tra 1 e 100 

while(numeriBombe.length < 16){
    var r = Math.floor(Math.random() * 100) + 1;
    if(numeriBombe.indexOf(r) === -1) {
        numeriBombe.push(r);
    } 
}


// definisco una variabile per indicare l' id del campo

let idCampo = "campo";

// Creo una funzione per creare la griglia di gioco

function creaGriglia(cellsNumber, idCampo){
    for (let i = 1; i <= cellsNumber; i++) {
    document.getElementById(idCampo).innerHTML += `<div class="quadrato">${i}</div>`;
    }

}


// faccio generare la griglia al mio programma eseguendo la funzione

creaGriglia(5, "campo");


// definisco la funzione che rende rossi i quadrati al click utente

function onClick (event){
    event.target.classList.add("cliccato");
    alert("hai cliccato!!");
}



// scateno la funzione per applicare l'effetto ON CLICK
document.getElementById(idCampo).addEventListener("click", onClick);









