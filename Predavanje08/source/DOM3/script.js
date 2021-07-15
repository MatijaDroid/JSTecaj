var homeLink = document.querySelectorAll('a');
homeLink[0].addEventListener('click',linkHandler);
homeLink[1].addEventListener('click',linkHandler);
homeLink[2].addEventListener('click',linkHandler);
/* EVENT NA JEDNOM ELEMENTU */
function linkHandler(e){ //uvijek hvatamo objekt eventa u parametru handlera
    e.preventDefault();
    e.stopPropagation(); //zaustavlja trigger propagaciju bubblinga i samog eventa na druge
    var url = e.target.getAttribute('href') //dohvaćanje atributa href, sa target dolazimo do čvorišta nad kojim se događa event
    // console.log("Nešto se radi između");
    // setTimeout(function(){               recimo da se nešto odradi i na timeout redirecta
    //     window.location.assign(url);
    // },5000);
    console.log(url);
}
/* BUBBLING */
var body = document.querySelector('body');
body.addEventListener('click',bodyHandler);

function bodyHandler(e){
    e.preventDefault();
    console.log('Ovo je event koji se dogodio na body čvorištu');//ovaj event se pokrene ako nema e.stoppropagation na drugom elementu
}

homeLink[1].removeEventListener('click',linkHandler); // micanje eventa sa objekta
homeLink[2].removeEventListener('click',linkHandler); // micanje eventa sa objekta