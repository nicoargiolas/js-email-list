/* Descrizione
Attraverso l’apposita API di Boolean
 https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) */

// Collegamento a elementi del DOM
const emailListHTML = document.getElementById('email-list');
const resetButtonHTML = document.getElementById('reset-btn');

function getNEmails(emailN) {
    const emailList = [];
for (let i = 0; i < emailN; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        let mail = response.data.response;
        // emailListHTML.innerHTML += `<li> ${mail} </li>`
        emailList.push(mail);
        if (emailList.length === emailN) {
            emailListHTML.innerHTML = "";
            console.log(emailList);
            for (let i = 0; i < emailN; i++) {
                emailListHTML.innerHTML += `<li> ${emailList[i]} </li>`
            }
        }
    })
    .catch(error => {
        console.error(error)
    });
}
}

let emailNumber = 10;
getNEmails(emailNumber);

resetButtonHTML.addEventListener("click", () => {
    // emailListHTML.innerHTML = "";
    getNEmails(emailNumber);
});


// Ho usato questa soluzione per far si che la lista delle email comparisse contemporaneamente in pagina e non una dopo l'altra come nel primo commit, so di aver appesantito il codice ma ho cercato di ragionare per ottenere una soluzione visiva più pulita



