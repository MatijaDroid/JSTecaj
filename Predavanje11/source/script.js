"use strict";

const renderData = (data) => { // separation of concernes, koristimo poziv funkcije s kojom se renderaju podatci
    console.log(data); // podatak ne ostaje živ
}

const fetchData = (e) =>{ // u e se nalazi mouse event (zbog clicka na gumb)
    e.preventDefault();

    const data = fetch('https://api.github.com/users/octocat')
    data.then((response) => response.json()) //prvi korak kad koristimo fetch je da json prebacimo u objekt i ništa drugo ne radimo
    .then((data) =>{ // u drugome then spremamo podatke koji smo dobili iz API-a
        renderData(data);
    })
    .catch((error) => {
        console.log(error);
    });
};

class Github
{
    data;
    fetchData = (e) =>{
        e.preventDefault();
        const data = fetch('https://api.github.com/users/octocat')
        data.then((response) => response.json()) 
        .then((data) =>{ 
            this.data = data; // spremanje podatka u property data jer nije moguće koristiti funkciju unutar classa, podatak ostaje živ u klasi
            this.renderData(); //metodu moramo pozvati sa this.renderData jer se nalazimo u objektu
        })
        .catch((error) => {
            console.log(error);
        });
    }

    renderData = () =>{
        console.log(this.data);
    }

    getData = () => { //getter
        return this.data;
    }
}

const button = document.querySelector('#fetchData');
const gitHub = new Github();
// gitHub.fetchData();
button.addEventListener('click', gitHub.fetchData);

//console.log(gitHub.getData());

// setTimeout(() =>{
//     console.log(gitHub.getData());
// },5000)