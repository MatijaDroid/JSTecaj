"use strict"

const bark = () => "Wuf Wuf"; //Arrow funkcija mora biti dodijeljena varijabli (const)
console.log(bark());

const users = [
    {ime : 'Pero', godine: 25}, //ovo je često u upotrebi u Reactu
    {ime : 'Štef', godine: 29},
    {ime : 'Barica', godine: 80}
];

users.forEach((element, index) => { // bolje je koristiti () kada koristimo arrow funkcije da možemo koristiti više parametara a ne samo jedan
    // console.log(this); //this se referencira na globalni objekt, bitno je zbog evenata
    console.log(index);
    console.log(element);
    return element;
});

class Dog { 
    name; // ovdje NE koristimo var,let,const jer je ovo PROPERTY i nikad se vrijednost ne hardkodira
    constructor(name){ //konstruktor je funkcija i ime mora biti constructor
        this.name = name; //sa this pristupamo propertyu i setira se name property sa vrijednosti parametra name iz konstruktora
    }
}

class Golden extends Dog { 
    breed; 
    constructor(name, breed){ 
        super(name); // poziva konstruktor iz klase koju extendamo i mora biti parametra dodan
        this.breed = breed; 
    }
}

const dog = new Dog('Rex');
const golden = new Golden('Azra', 'Golden retriver');
console.log(dog);
console.log(golden);

const getX = () => Math.random() >= 0.5;
const wait = new Promise((resolve, reject) => { //promise vraća ili resolve ili reject // promise rezultat se može naknadno pozvati
    const x = getX();
    if(x){
        return setTimeout(resolve, 1000); //time out je 1 sec
    }
    return setTimeout(reject, 1000);
});


const check = (wait) => { // moramo putem parametra prosljediti wait 
    wait.then(() => console.log('Yeah!!!!'))
        .catch(()=> console.log('Oh Noooo!!'));
}
check(wait);