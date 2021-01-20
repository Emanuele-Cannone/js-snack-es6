// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


const bici = [
    {
        nome : 'bici1',
        peso : 40
    },
    {
        nome : 'bici2',
        peso : 30
    },
    {
        nome : 'bici3',
        peso : 20
    },
    {
        nome : 'bici4',
        peso : 50
    },
    {
        nome : 'bici5',
        peso : 60
    }
];


// const [{ nome, peso }] = bici; // in questo modo prendo i valori 'nome' e 'peso' del primo oggetto dell'array
// console.log(peso);// stampo il peso
// console.log(nome);// stampo il nome

let pesoPiccolo = 0;
let i = 0;
// prendi i pesi di ogni bici
for (i = 0; i < bici.length; i++){
    console.log(bici[i].peso);
    
    // confronta i pesi
    if (bici[0].peso > bici[i].peso){
        pesoPiccolo = bici[i].peso;
        nomePiccolo = bici[i].nome;
    }
};

// restituisci il nome ed il peso della bici piu leggera, cioè quella con index di riga 42
console.log(nomePiccolo, pesoPiccolo);
