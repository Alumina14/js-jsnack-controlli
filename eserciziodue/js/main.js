// 2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// dichiaro variabile parola, parola corta e parola lunga con prompt

// con lenght poi stampo prima la parola piu corta e poi la piu lunga

var msg1;
var msg2;
var parolaUno = prompt("Inserisci una parola: ");
var parolaDue = prompt("Inserisci un'altra parola: ");

if (parolaUno.length > parolaDue.length) {
    msg1 = "Questa è la parola più corta: ";
    msg2 = " Questa è la parola più lunga: ";
    document.getElementById('cortalunga').innerHTML = msg1 + parolaDue;
    document.getElementById('cortalunga2').innerHTML = msg2 + parolaUno;

} else if (parolaUno.length < parolaDue.length){
  msg1 = "Questa è la parola più corta: ";
  msg2 = " Questa è la parola più lunga: ";
  document.getElementById('cortalunga').innerHTML = msg1 + parolaUno;
  document.getElementById('cortalunga2').innerHTML = msg2 + parolaDue;
} else if (parolaUno.length == parolaDue.length) {
  document.getElementById('cortalunga').innerHTML = "Le parole hanno la stessa lunghezza";
  document.getElementById('cortalunga2').innerHTML = "Le parole hanno la stessa lunghezza";
}
