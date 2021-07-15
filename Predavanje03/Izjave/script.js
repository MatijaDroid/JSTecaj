var i = 3;
var n = 20;

// while(i <= n){
//     if( i%9 == 0){
//         i++;
//         continue;
//     }
//     else if(i >= 3){
//         console.log(i);
//     }
//     i++;
// }


// while petlja koja ispisuje brojeve od 3 do 20 osim onih djeljivih sa 9 


while(i <= n){
    if( i%9 == 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}