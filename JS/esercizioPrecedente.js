// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.


// ----------------FUNZIONI-----------------

// Funzione per creare la griglia di gioco
function creaGriglia(numCelle, idCampo){
    for (let i = 1; i <= numCelle; i++) {
    document.getElementById(idCampo).innerHTML += `<div class="quadrato">${i}</div>`;
    }
}

// Funzione per verificare, dato l'array e l'elemento da cercare, se l'elemento è presente = true altrimenti false
function inArray(arr, el) {
    
    let count = 0;
    let trovato = false;
    
    while(count < arr.lenght && trovato == false) {
        if (arr[count] == el){
            return true;
        }

        count++;

    }

    return falso;
}

// ---------------PROGRAMMA PRINCIPALE-----------

// Chiedo all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
let totaleCelle = parseInt(prompt("Inserisci il numero di celle che andranno a formare il campo da gioco in modo che sia sempre una scacchiera quadrata. Il valore dev'essere compreso tra 4 e 100 e gli unici valori consentiti corrispondano al quadrato del numero di celle o colonne di cui sarà composto il campo (4, 9, 16, 25, 36, 49, 64, 81, 100)"));


// definisco una variabile per indicare l'id del campo da gioco in html
let idCampo = "campo";


// definisco una variabile di controllo per la forma della scacchiera (deve essere un quadrato)
// let totaleRighe = Math.sqrt(totaleCelle);
// console.log(totaleRighe);

// Creo un ciclo per verificare che
while (isNaN(totaleCelle) || totaleCelle < 4 || totaleCelle >100 ) {

    // l'input utente sia un numero e che
    if (isNaN(totaleCelle)) {
        totaleCelle = parseInt(prompt("Ti ho detto di inserire un numero!!!!"));

    // sia compreso tra 4 e 100
    } else if (totaleCelle < 4 || totaleCelle >100) {
        totaleCelle = parseInt(prompt("Ti ho detto di inserire un numero tra 4 e 100 !!!!"));
    }
    
}


// e che sia sempre il quadrato del numero di righe o colonne così da formare sempre una scacchiera quadrata (DA COMPLETARE)
// while (!Number.isInteger(totaleRighe)){
//     totaleCelle = parseInt(prompt("Occhio che le tue scelte sono limitate (4, 9, 16, 25, 36, 49, 64, 81, 100)!!!!"));
// }


// faccio si che all'evento click sopra ogni cella, una funzione che creo, 
// faccia cambiare colore alla cella e riporti un alert col numero della cella selezionata

let numeriSelezionati = [];

function onClick (event){
    event.target.classList.add("cliccato");
    alert(event.target.innerHTML);
}


document.getElementById(idCampo).addEventListener("click", onClick);





// Scateno la funzione per creare la griglia
creaGriglia(totaleCelle, "campo");

// Creo un array di 16 numeri casuali non ripetuti
let arrayBombe = [];

while(arrayBombe.length < 16){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arrayBombe.indexOf(r) === -1) {
        arrayBombe.push(r);
    } 
}
// console.log(arrayBombe);



