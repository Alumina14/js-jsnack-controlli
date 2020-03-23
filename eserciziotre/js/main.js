// 3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


var numeroUno = parseInt(prompt("Inserisci il primo numero:"));
var numeroDue = parseInt(prompt("Inserisci il secondo numero:"));
var numeroTre = parseInt(prompt("Inserisci il terzo numero:"));
var numeroQuattro = parseInt(prompt("Inserisci il quarto numero:"));
var numeroCinque = parseInt(prompt("Inserisci il quinto numero:"));

var somma = numeroUno + numeroDue + numeroTre + numeroQuattro + numeroCinque;

 document.getElementById('somma').innerHTML ="La somma dei cinque numeri inseriti è pari a: " + somma;
