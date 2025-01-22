/* Descrizione
Attraverso l’apposita API di Boolean
 https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) */

// Collegamento a elementi del DOM
const emailListHTML = document.getElementById('email-list');


let emailNumber = 10;
for (let i = 0; i < emailNumber; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        let mail = response.data.response;
        emailListHTML.innerHTML += `<li> ${mail} </li>`
    })
    .catch(error => {
        console.error(error)
    });
}
