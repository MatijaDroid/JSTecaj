var text = ' Lorem ipsum dolor sit amet';

var duljina = text.length;

var subString = 'sit'; //string za pretraživanje
var sitpoistion = text.indexOf(subString); //pozicija substringa
var subLength = subString.length; //koliko je dug string
var sit = text.substr(sitpoistion, subLength);

var amet = 'amet';
var elit = 'elit';
var replace = text.replace(amet, elit);

var konktext = 'consectetur adipiscing elit'
var text2 = text + ',' + konktext;

var text3 = text.toUpperCase(text);

var text4 = text.trim(text);

var pos12 = text.charAt(12);


console.log(duljina);
console.log(sitpoistion);
console.log(sit);
console.log(replace);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(pos12);