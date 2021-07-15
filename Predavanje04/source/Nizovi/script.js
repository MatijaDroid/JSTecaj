var names =['John', 'Jane', 'Bob',, 'Mike'];
console.log(names);

for(var i=0; i<names.length; i++){
    console.log(names[i]);
}

names.push('Matija'); //stavlja element na kraj niza i prihvaća bilo koliko elemenata
console.log(names);

for(var i=0; i<names.length; i++){
    console.log(names[i]);
    if(names[i] == 'Jane'){
        break;
    }
}

var users = [
    ['Pero','Peric'],
    ['Ana','Anic'],
    ['Ivo','Ivic']
];
// console.log(users);
// for(var i=0; i<users.length; i++){
//     var userName = users[i].join([i][0, 1]);
//     console.log(i+1 + "." + userName);
// }


for(var i=0; i<users.length; i++){
    var userName =  i+1 + '. ' + users[i][0] + ' ' + users[i][1];
    console.log(userName);
}