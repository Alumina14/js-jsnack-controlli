// js
// 1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


// dichiarare variabili numero1 e numero2 con prompt
// faro un if di comparazione tra le due variabili e far stampare il numero maggiore tra i due


var numeroUno = parseInt(prompt("Inserisci un numero:"));

var numeroDue = parseInt(prompt("Inserisci un altro numero:"));

var numeroMaggiore;

if (numeroUno > numeroDue){
  numeroMaggiore = numeroUno;
  document.getElementById('numeromaggiore').innerHTML = numeroMaggiore + " è il numero maggiore!";
} else if (numeroUno < numeroDue){
  numeroMaggiore = numeroDue;
  document.getElementById('numeromaggiore').innerHTML = numeroMaggiore + " è il numero maggiore!";
} else if (numeroUno == numeroDue){
  document.getElementById('numeromaggiore').innerHTML ="I numeri hanno lo stesso valore!";
}
