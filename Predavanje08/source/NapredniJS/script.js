/***************CLOSURE******************/

// function vanjska(){
//     var a = 10;
//     function unutarnja(){
//         var b = 20;
//         console.log(a + b);
//     }
//     return unutarnja; //vraća funkciju na poziv funckije i kod unutra se ne izvrši
// }

// var x = vanjska(); // x sadrži funkciju unutarnja
// console.log(x);

// x(); // kad pozovemo x kao funkciju odradi se unutarnja funkcija koja odradi a + b jer je a varijabla idalje živa i rezultat je 30

function vanjska(){
    var a = 10;
    function unutarnja(){
        var b = 20;
        console.log("a= " + a + " b= " + b);
        a++;
        b++;
    }
    return unutarnja; 
}

var x = vanjska(); 
console.log(x);

x(); 
x();
x();
x();
x(); // povećava se vrijednost svaki put samo za a ali ne i za b (a++ b++)

/***************ANONIMNA******************/
(function(){
    console.log("ovo je anonimna i samopozivajuća funckija"); // anonimna samopozivajuća funckija
})();

/***************REKURZIVNE FUNKCIJE******************/
//Uvjeti
// 1. Provjera baznog slučaja
// 2. Rješavanje problema
// 3. Rekurzivni poziv
// 4. Inicijalni poziv

function countDown(number){
    //Provjera baznog slučaja
    if(number <= 0){
        return;
    }
    //Rješavanje problema
    console.log(number);
    // Rekurzivni poziv
    countDown(--number);
}

// Inicijalni poziv
countDown(5);
// primjena 
let company = {
    sales : [{name: "", salary:1000}]
}

function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce(function(prev,curr){
            return prev + curr.salary;
        }, 0);
    }
}

var sumSalaries = sumSalaries(company);
console.log();