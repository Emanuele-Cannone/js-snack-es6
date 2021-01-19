// 2) Utilizzando const e/o let e template literal. 
// Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let i = 0; i < numeri.length; i++){
//     if(numeri[i]%2 == 0){
//         document.getElementById('verde').innerHTML += ` 
//             ${numeri[i]} 
//         `;// e' necessario aggiungere il += perchè senno' vai a sovrascrivere il risultato invece che aggiungerlo
//     } else {
//         document.getElementById('rosso').innerHTML += `
//             ${numeri[i]}
//         `;
//     }
// };

for (let i = 0; i < numeri.length; i++){
    if(numeri[i]%2 == 0){
        document.getElementById('pari').innerHTML +=
        `
            <div id="verde">
                ${numeri[i]}
            </div>

        `;// e' necessario aggiungere il += perchè senno' vai a sovrascrivere il risultato invece che aggiungerlo
    } else {
        document.getElementById('dispari').innerHTML += `
        
            <div id="rosso">
                ${numeri[i]}
            </div>

        `;
    }
};