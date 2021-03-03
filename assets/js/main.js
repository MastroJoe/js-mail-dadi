// Mail
// INPUT
// mail utente
var mail = prompt("Inserisci la tua mail:");
console.log(mail);

// OUTPUT
// array mail utenti
var listaMail = ["random.mail@libero.it", "random.mail@gmail.com", "random.mail@yahoo.com", "random.mail@virgilio.it", "random.mail@tim.it"];
console.log(listaMail);

// scorro la lista delle mail
var sentinella = false;

for (var i = 0; i < listaMail.length; i++) {
  if (listaMail[i] === mail) {
    sentinella = true;
    i = listaMail.lenght;
  }
}

// stampo il risultato del controllo
var accettato = "Accesso Consentito";
var negato = "Accesso Negato";

if (sentinella) {
  console.log(accettato);
} else {
  console.log(negato);
}
