var x = "Lorem ipsum",
    y = 2345,
    z = "2345"
	q = false;
	
// 1. 
var trueFalse = !!"false" == !!"true";
console.log(trueFalse);
// vrijednost je true zbog toga što je podatak string a ne boolean
// 2. 
console.log(q || x || y || z);
// ispisuje x vrijednost jer ne provjerava dalje uvjete
// 3. 
var num = 6;
var dec = --num;  // moramo staviti dekrement prije jer se inače dogodi da se upiše vrijednost 6 u dec varijablu 
console.log(num);
console.log(dec);

// 4.
const price = 26.5;    
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
totalPrice = totalPrice.toFixed(2); //pretvara metodu u string, nikako ne koristiti tu vrijednost u proračunima !!!!!!! samo kada rezultat prikazujemo tada možemo koristiti

console.log("Total:", totalPrice);
