// 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo.


const numeroUtente = parseInt(prompt('inserisci un numero'));

if (numeroUtente%2 == 0){
    console.log(numeroUtente);
} else {
    console.log(numeroUtente + 1);
};

