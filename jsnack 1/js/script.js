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

// per ogni oggetto interno all'array
for (let i = 0; i < bici.length; i++){
    // prendi le proprietà peso e nome di ogni oggetto
    const {peso, nome} = bici[i];
    
    // confronta il valore peso con il valore di pesoPiccolo
    if (peso < pesoPiccolo){
        // se il peso è minore di pesoPiccolo allora salvalo in pesoPiccolo
        pesoPiccolo = peso;
        // e salva il valore nome di quell'oggetto in nomePiccolo
        nomePiccolo = nome;
    }
};

// restituisci il nome ed il peso della bici piu leggera, cioè quella con index di riga 42
console.log(nomePiccolo, pesoPiccolo);
