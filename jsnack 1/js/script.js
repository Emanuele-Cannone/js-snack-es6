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


const [{ nome, peso }, { nome, peso }] = bici;
console.log(peso);
console.log(nome);