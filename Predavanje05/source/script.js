var auto ={
    brend : {
        tip: 'Volvo',
        model: 'V40'
        // da ovdje napravio funkciju this ključna riječ bi se odnosila samo na ovaj objekt
    },
    godinaProizvodnje : 1998,
    boja : 'crvena',
    brzina : 60,
    maxBrzina: 160,
    ubrzaj : function(sekunde){ //funkcija nema imena jer pozivamo sa svojstvo
        while(sekunde && this.brzina < this.maxBrzina){ // ispituje sve uvjete dok god su svi uvjeti true
            this.brzina += 5;
            sekunde--; //sekunde koristimo kao brojač
        }
        return this.brzina;
    },
    zakoci : function(sekunde){
        while(sekunde && this.brzina > 0){ 
            this.brzina -= 10;
            sekunde--; 
        }
        return this.brzina;
    },
    // promjenu svojstva je najbolje raditi preko metode
    promijeniboju : function(boja){
        this.boja = boja;
        return this.boja;
        // this ključna riječ je ugrađeni objekt koji se referencira na objekt unutar kojeg se nalazi
        // bez this traži lokalnu varijablu u funkciji
    }
};
console.log(auto.promijeniboju('zelena'));
// console.log(auto.boja = 'žuta'); nije dobra praks makar radi
// console.log(auto.promijeniboju()); kada pozivamo funkciju obavezno iza properties-a stavljamo ()
console.log(auto.ubrzaj(30));
console.log(auto.zakoci(40));

for (svojstvo in auto){
    var vrijednost = auto[svojstvo];
    if (auto.propertyIsEnumerable(svojstvo)){
        console.log(svojstvo + ':' + vrijednost);
    }
    
}
// for in petlja služi da prođemo kroz sve atribute objekta
// isEnumerable se koristi da vidimo dali su svojstva prebrojiva

console.log('Boja mog ' + auto.brend.tip + ' auta je ' + auto.boja);

console.log(JSON.stringify(auto));
// pozivanje JSON file-a koji pretvara objekt u JSON format u stringu