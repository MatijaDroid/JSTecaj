// console.log(document.getElementById("footer"));
// console.log(document.getElementsByClassName("desc"));
// console.log(document.getElementsByTagName("li")); //vrati HTML collection


// console.log(document.querySelector("li")); //vraća jedan li, prvi koji vidi
// console.log(document.querySelectorAll("li")); //vraća sve elemente li koje nađe i vraća NodeList

var footer = document.querySelector('#footer');
var div = document.createElement('div');
footer.appendChild(div); //element iz varijable div je dodan na kraj footera iza ul ali se nije pojavio u HTML dokumentu
// querySelectorAll vraća NodeList i nije moguće s njim koristit appendChild!!!

// var footer = document.querySelectorAll('#footer');
// var div = document.createElement('div');
// footer[0].appendChild(div);
footer.remove(); //radi u potpunosti ali element ostaje u varijabli
//footer.parentNode.removeChild(footer); //isto kao i ovo gore (stara verzija ECMA)
console.log(footer);

var body = document.querySelector('body');
body.appendChild(footer);