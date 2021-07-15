// umjesto circle buleta na elementima liste prikažu redne brojke
var li = document.querySelectorAll('#footer li'); // kontekstualni selektor iz css-a id footer li elementi
for(var i = 0; i < li.length; i++){
//    li[i].style.listStyleType = "decimal"; //    list-style-type: decimal; u CSS-u kebab case u CSS camel case u JS

    if((i + 1) % 2 === 0){ //i + 1 ne mijenja iterator
        li[i].style.listStyleType = "decimal";
    }else {
        li[i].style.listStyleType = "armenian";
    }
}

// div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var info = document.querySelector('.description + .info'); //ako element sa klasom info dolazi nakon elementa sa klasom description
info.classList.add('hide');

// saznajte margin-left izračunati stil koji je primijenjen na body elementu
var body = document.querySelector('body'); //computed styles ne postoji na body objektu jer nije DOM nego BOM
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft =  bodyStyles.getPropertyValue('margin-left'); //propertyvalue nam daje value određenog traženog propertya koji se piše onako kako je u CSS-u
console.log(marginLeft);

// animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji
var marginNum = parseInt(marginLeft);//parsira vrijednost i uzme samo numeričku vrijednost i izbacuje slova iz stringa
// parser ako je prvo slovo ne radi, ako ima 45a46b47c onda samo parsira prva dva broja do slova i izbaci samo broj
// ako želimo parsirati takav string onda moramo koristiti petlje
var reverse = false;
var animation = setInterval(animate, 60);//poziva funckciju i setira interval 200 ms
setTimeout(function(){
    clearInterval(animation);
}, 5000)

function animate(){
    if(reverse){
        marginNum--;
    }else{
        marginNum++;
    }

    if(marginNum == 30){
        reverse = true;
    }
    if(marginNum == 8){
        reverse = false;
    }
    body.style.marginLeft = marginNum + 'px'; //kokvetenacija px jer nam treba jedinica
}