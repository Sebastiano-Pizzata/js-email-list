//Attraverso l'apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista

const lista = document.getElementById("lista")

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {
    for(let i = 0; i < 10; i++){
        let email = data.response
        lista.innerHTML += `<li>${email}</li>`
    }
})
.catch(error => {
    console.error(error);
} );

