function Dog(name){ //pametna icijalizacija varijable name = 'Rex' je SE6 i to je default vrijednost name
    this.name = name || 'Rex';     //moramo imati this da se pozovemo na konstruktor sa prototype objektom || 'Rex' je da imamo default vrijednost
    this.bark = function(){
        return 'WUF WUF'
    }
    this.getName = function(){ // funkcija kojom vraćamo name
        return this.name;
    }
    this.setName = function(name){
        this.name = name;
    }
}

var dog = new Dog('Pero'); // poziv konstruktora
var dog1 = new Dog('Štef');
var dog2 = new Dog();
// dog.name = 'Mirko'; //promjeni svojstvo u objektu dog i to je problem koji sa closure se može riješiti
dog.setName('Fido'); //bolji pristup preko setera i getera i onda ne gazimo direktna svojstva u funkciji izvana
console.log(dog);
console.log(dog1);
console.log(dog2);

Dog.prototype.setBreed = function(breed){ // samo ne kreira breed u konstruktoru nego se nalazi u prototype objektu unutar Dog objekta
    this.breed = breed;
}

var dog4 = new Dog('Skippy');
dog4.setBreed('Golden Retriver'); // dodaje breed u dog4, ovakav način ne radi u drugim programskim jezicima
console.log(dog4);
