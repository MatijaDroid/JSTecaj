var character = {
    name: "Nikola Tesla"
}

var quotes = [
    "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    "My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.",
    "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine",
    "My belief is firm in a law of compensation. The true rewards are ever in proportion to the labor and sacrifices made."
]


var proto1 = Object.getPrototypeOf(character); //dobivanje protototipa objekta
var proto2 = Object.getPrototypeOf(proto1); // neki objekti imaju null vrijenost svog proto objekta a to je ovaj
console.log(proto1);
console.log(proto2);

character.prototype = function(){ // nova metoda koja je u biti onaj drugi prototype(možemo staviti proizvoljno ime)
    var length = quotes.length
    var index = Math.floor(Math.random()*length);
    return quotes[index];
    // return quotes [Math.floor(Math.random()*quotes.length]
}
character.prototype(); // nemožemo pozvati prije nego što je definirana
var quote = character.prototype();
console.log(quote);
