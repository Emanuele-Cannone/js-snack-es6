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

let pesoPiccolo = 99;


// utilizzando il ciclo for


// per ogni oggetto interno all'array
// for (let i = 0; i < bici.length; i++){
//     // prendi le proprietà peso e nome di ogni oggetto
//     const {peso, nome} = bici[i];
//     console.log(nome, peso);// in questo modo sto creando diversi const con i valori di ogni ogetto
    
//     // confronta il valore peso con il valore di pesoPiccolo
//     if (peso < pesoPiccolo){
//         // se il peso è minore di pesoPiccolo allora salvalo in pesoPiccolo
//         pesoPiccolo = peso;
//         // e salva il valore nome di quell'oggetto in nomePiccolo
//         nomePiccolo = nome;
//     }
// };

// // restituisci il nome ed il peso della bici piu leggera, cioè quella con index di riga 42
// console.log(nomePiccolo, pesoPiccolo);

// utilizzando il forEach

bici.forEach((element, index) => {

    const { peso, nome } = bici[index];// prendi gli elementi peso e nome di bici con index crescente
    console.log(nome, peso);// vedi se funziona


    if (peso < pesoPiccolo){ // se il peso(con idex sempre crescente) è minore di pesoPiccolo
        pesoPiccolo = peso; // quel peso viene sovrascritto in pesoPiccolo
        nomePiccolo = nome; // quel nome viene salvato in nomePiccolo
    };


});

// console.log(pesoPiccolo, nomePiccolo);// stampa le due variabili


console.log(
    `
    il nome della bici più leggera è ${nomePiccolo}
    il peso della bici più leggera è ${pesoPiccolo}
    `
);