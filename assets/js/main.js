// Mail
// INPUT
// mail utente
var mail = prompt("Inserisci la tua mail:");
console.log(mail);

// OUTPUT
// array mail utenti
var listaMail = ["random.mail@libero.it", "random.mail@gmail.com", "random.mail@yahoo.com", "random.mail@virgilio.it", "random.mail@tim.it"];
console.log(listaMail);

// controllo la lista delle mail
var soldatino = false;

for (var i = 0; i < listaMail.length; i++) {
  if (listaMail[i] = mail) {
    soldatino = true;
  }
}

// stampo il risultato del controllo
