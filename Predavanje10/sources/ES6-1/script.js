"use strict";

const x = 3.14;
//x = 3.15;

let b = 34; // let ne može biti kombiniran sa var , ovaj let je dostupan globalno, let nema hoisting
console.log(b);

if (x < 10){
    let b = 25; // varijabla neće biti setirana jer je let block scope, let nema hoisting, nije dostupan izvan bloka
    console.log(b); // let varijablu možemo setirati ali isto tako možemo redeklarirati bez problema
}


const ime = 'Pero'; // vrijednost const se može primiti
const tekst = `Moje ime je ${ime}`; //Literal template ${} je placeholder
console.log(tekst);

// ime = 'Štef';
// var tekst = 'Moje ime je ' + ime; neće raditi jer nema naknadnih izmjeni zbog const
// console.log(tekst);

const users = [
    {ime : 'Pero', godine: 25}, //ovo je često u upotrebi u Reactu
    {ime : 'Štef', godine: 29},
    {ime : 'Barica', godine: 80}];

const ispisiKorisnika = function(prvi, drugi, treci){  // funkcije stavljamo u const jer onda nam nisu funkcije dostupne prije inicijalizacije tj u kodu iznad
    console.log(`${prvi.ime} ${prvi.godine}`);
    console.log(drugi.ime + ' ' + drugi.godine);
    console.log(treci.ime + ' ' + treci.godine);

};
ispisiKorisnika(...users); // sa Spread operatorom dodajemo sve elemente, sam razbija niz i raširi po parametrima

// if (true){
//     const ispisiKorisnika = function(){  // funkcije stavljamo u const jer onda nam nisu funkcije dostupne prije inicijalizacije tj u kodu iznad
//                                          // ovo funkcionira jer je block funkcija kao i let
//     };
// }

const ispisiImena = function(...imena){ // kada neznamo koliko podataka prosljeđujemo funkciji pretvara parametra koji šaljemo u niz elemenata (Rest operator)
    console.log(imena);
};
ispisiImena('Škoro', 'Boljševizam', 'Pero');

