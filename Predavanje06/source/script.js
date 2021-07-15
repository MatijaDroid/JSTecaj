console.log('Širina: ' + window.innerWidth +  ' Visina: ' + window.innerWidth); //u globalnom scopeu koristimo window zbog preglednosti

console.log(window.location.hostname);

// window.location.replace("http://www.google.com"); ne sprema history
// window.location = "http://google.com"; ne sprema history
// window.location.assign("http://google.com"); //sprema history


window.confirm("Kaj hoćeš koristiti cookie??");


window.setTimeout(function(){
    console.log("Kasnim dvije sekunde")
}, 2000);
// timeout metoda ima funkciju kao prvi parametar i vrijeme u msec kao drugi parametar 2000msec = 2 sec