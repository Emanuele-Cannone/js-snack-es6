// 3) Utilizzando const e/o let. Dare la possibilità di inserire due parole. 
// Verificare se le due parole hanno la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const primaParola = prompt('inserisci una parola');
const secondaParola = prompt('inserisci una parola');


if (primaParola > secondaParola){
    console.log(primaParola);
} else if (primaParola < secondaParola){
    console.log(secondaParola);
} else {
    console.log(primaParola, secondaParola);
};