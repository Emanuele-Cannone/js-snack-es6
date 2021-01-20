// jsnack 2
// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1, 4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
const nuovoArray = [];

const primoNumero = parseInt(prompt('inserisci un numero'))
const secondoNumero = parseInt(prompt('inserisci un numero'))



myArray.forEach((element, index) => {
    
    if (index >= primoNumero && index <= secondoNumero){
        nuovoArray.push(element);
    };

 });

 console.log(nuovoArray);