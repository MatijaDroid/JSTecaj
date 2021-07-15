var description = document.querySelector('.description');
var descContent = description.innerHTML; //dohvaća kompletan element sa tagovima vraća typeof string može iz stringa nanovo napraviti tagove ali ako ga dodamo sa append onda je samo tekst
// description.innerHTML = 'Grad na <a href="http://google.com">4 rijeke</a>';
description.innerHTML = descContent + '<a href="http://google.com">Pogledaj ovdje</a>'
console.log(descContent);

var textContent = description.innerText; //stari property i nema autocomplete
console.log(textContent);
var textContent = description.textContent; //isto ako i gore samo nova verzija, bolje je za koristiti
console.log(textContent);

// description.textContent = 'Ima 4 rijeke <span>blabla</span>'; //ako ima samo tekst možemo koristiti a ako ne bolje je ne koristiti jer pregazi sve i ignorira HTML tagove u tekstu

//var image = document.querySelector('img');
/*  DIREKTRAN PRISTUP SVOJSTVIMA ATRIBUTA NE KORISTITI */
//var imgSrc = image.src;
//image.src = '/images/blossom.jpg'; // ako nebi stavili / na početak onda misli da mora u mapu di je scripta a to je DOM2 mapa, radi neovisno o domeni
// svojstva se nemogu zaštiti u JS-u zato se preporučaju getteri i setteri da bi pristupali atributima
//daje putanju na sliku unutar IMG taga

// /*  PRISTUP SVOJSTVIMA PREKO GETERA I SETERA OVO KORISTITI */
// var imgSrc = image.getAttribute('src'); //dohvati atribut i putanju ali nema URL putanje gdje se točno nalazi 
// image.setAttribute('src','/images/blossom.jpg'); //ima dva parametra - koji atribut setupiramo i koji atribut ima vrijednosti
// image.removeAttribute('alt');
// console.log(imgSrc); 
// // get i set koristimo za dohvaćanje i setiranje atributa
//možemo ukloniti rijednost iz atributa tako da setiramo vrijednost u prazan string - nije isto ko micanje atributa!!!
var image = document.querySelectorAll('img');
if(image.length > 0){
    var imgSrc = image[0].getAttribute('src'); //dohvati atribut i putanju ali nema URL putanje gdje se točno nalazi 
    image[0].setAttribute('src','/images/blossom.jpg'); //ima dva parametra - koji atribut setupiramo i koji atribut ima vrijednosti
    for(var i = 0; i < image.length; i++){
        image[i].removeAttribute('alt');
    }
} 
//primjer kako raditi sa if ako radimo sa node listama, uvjet je loš ako stavio image jer će querySelectorAll vrati node listu uvijek čak i kad nema img elemenata


/* KAKO KORISTITI DATASET ATRIBUTE */
var footer = document.querySelector('#footer');
console.log(footer.dataset.userId); //kako doći do vrijednosti iz samo userId
//koristimo gotove atribute a ne svoje zbog jednostavnosti korištenja i reusanja koda i rada sa drugim programerima