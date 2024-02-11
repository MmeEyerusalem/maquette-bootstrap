let formContact = document.querySelector('form');
let inputEmail = document.querySelector('email');
let inputSujet = document.querySelector('sujet');
let inputMessage = document.querySelector('message');

let inputs = document.querySelectorAll('input');


formContact.addEventListener('envoyer', function(event) {

    event.preventDefault();

    let valueEmail = inputEmail.value.tirm();
    let valueSujet = inputSujet.value();
    let valueMessage = inputMessage.value();


    let lengthSujet = valueSujet.length;

    console.log(lengthSujet);

    let donnees = [valueSujet, valueEmail, valuePassword];

    if (donnees.includes('')){
        error.innerHTML += "<p> Tout les champs sont requis !</p>";
        error.classList.add('error');
    }else{
        
    }


});