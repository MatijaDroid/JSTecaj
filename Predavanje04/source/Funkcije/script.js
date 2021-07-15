function zbroji(a,b){
    return a + b;
}

var rez = zbroji(2, 4);
console.log(rez);



var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

var najduzaRijec = trazinajduzuRijec(words);
console.log(najduzaRijec);

function trazinajduzuRijec(wordsNiz){
    var maxword = ' ';
    var maxlength = maxword.length;
    for (var i = 0; i<wordsNiz.length; i++){
        var word = wordsNiz[i]
        var wordlength = word.length;
        if(maxlength < wordlength ){
            maxlength = wordlength;
            maxword = word;
            maxlength = maxword.length;
        }
    }
    return maxword;
}


// function trazinajduzuRijec(wordsNiz){
//     var najduzaRijec = '';
//     for(let i = 0; i < wordsNiz.length; i++){
//         if(wordsNiz[i].length > najduzaRijec.length){
//             najduzaRijec = wordsNiz[i];
//         }
//     }

//     return najduzaRijec;
// }

