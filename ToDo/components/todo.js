export class Todo //obavezno export!!!
{
    //Inicijalizacija DOM elemenata
    constructor(...params)
    {
        // params.forEach(function(value,index){  forEach se koristi da dobijemo vrijednost i index od params
        //     console.log(index + ':' + value); forEach je praktičniji ako manipuliramo arrayem i brišemo elemente
        // });
        for (const element of params) { //forof petlja u element je value od params value je iterator a params je object
            this[element] = document.querySelector('#' + element); //[] - koriste se uglate za izvlačenje vrijednosti iz arraya
        }

        this.storageKey = 'tasks';
    }
    //Inicijalizacija aplikacije
    init() //NE STAVLJAJ U KONSTRUKTOR
    {
        this.checkStorage();
        this.addListeners();
    }
    //Provjeri da li ima spremljena lista u lokalnoj pohrani i ako ima, rekonsturiraj listu
    checkStorage()
    {
        if(window.localStorage !== undefined){
            let tasks = localStorage.getItem(this.storageKey);

            if(tasks !== null){ //provjera dali ima ičega u storageu jer ako nema onda je null
                tasks = JSON.parse(tasks);
                for (const [key, value] of Object.entries(tasks)) {
                    const item = this.createItem(value.name);
                          item.dataset.createDate=value.createDate;
                    
                    if(value.done){
                        item.classList.add('done');
                        item.querySelector('input').checked = true;
                        item.dataset.doneDate=value.doneDate;
                    }
                    this.todoList.appendChild(item);
                }
            }
        }else{
            alert('Tvoj preglednik ne podržava lokalnu pohranu!');
        }
    }
    //Dodavanje event listenera
    addListeners() //NE STAVLJAJ U KONSTRUKTOR
    {
        this.taskInput.addEventListener('keyup', this.pressEnter);
        this.addTask.addEventListener('click', this.addNewTask);
        this.saveTaskList.addEventListener('click', this.saveList);
        this.deleteTaskList.addEventListener('click', this.deleteList);
    }
    //Dodavanje novog taska pritiskom na tipku Enter
    pressEnter = (event) => //arrow nam treba jer onda imamo referencu na objekt u suprotnom this.addNewTask neće raditi jer se pokušava referencirati na gumb event listenera
    {   
        if(event.keyCode == 13){
           // event.preventDefault(); // da spriječimo default samo na toj tipki jer ako je vani utječe na sve tipke tipkovnice i zaustavlja default / nije potrebno jer će addNewTask preventat
            this.addNewTask(event);
        }
    }
    //Dodavanje novog taska
    addNewTask = (event) => // stavljamo array function jer nam on daje da se this referencira na objekt a ne na add task gumb
    {
        event.preventDefault();

        const task = this.taskInput.value; // spremanje vrijednosti u const task

        const item = this.createItem(task);
        if(!task){ //not task neće prihvatiti null ili prazan string u inputu
            alert('Unesite task');
            return false;
        }

        this.todoList.appendChild(item);

        this.resetInput();
    }
    //Spremanje liste taskova u storage
    saveList = (event) =>
    {
        event.preventDefault();
        if(window.localStorage !== undefined){ // provjera dali preglednik podržava local Storage
            const li = this.todoList.querySelectorAll('li');

            if(li.length > 0){
                
                const tasks = {};
                for (let i= 0; i < li.length; i++) {
                    const doneDate = (li[i].dataset.doneDate) ? li[i].dataset.doneDate : null; //terarni if, ovime smo sigurni da je doneDate uvijek null ako nema vrijednosti
                    const checkbox = li[i].querySelector('input');

                    tasks['task'+ (i + 1)] = {
                        name: checkbox.nextSibling.textContent, // preko siblinga dolazimo do contenta za name
                        done: checkbox.checked,
                        createDate: li[i].dataset.createDate,
                        doneDate: doneDate
                    };

                }
                localStorage.setItem(this.storageKey, JSON.stringify(tasks));
                return true; // da se prekine izvođenje daljnjeg koda u saveList-u

            }

            alert('Niste dodali niti jedan task!!');

        }else{
            alert('Tvoj preglednik ne podržava lokalnu pohranu!');
        }
    }
    //Brisanje liste taskova iz storage-a
    deleteList(event)
    {
        event.preventDefault();
        console.log(event);
    }
    //Kreiranje taska
    createItem(task)
    {
        const item = document.createElement('li'); //kreira li element
              item.innerText = task; //innerText dodaje tekst iz inputa u listu
              item.dataset.createDate = this.createTimestamp();
        this.addCheckbox(item);  
        this.addRemoveTaskBtn(item);      
        return item;
    }
    //Dodaj checkbox u li element
    addCheckbox(item)
    {
        const checkbox = document.createElement('input');
              checkbox.setAttribute('type', 'checkbox');//setter za setiranje atributa
        item.prepend(checkbox); // pre append built in function
        checkbox.addEventListener('change',this.markDone);

    }
    //Dodaj gumb za brisanje pojedinog taska
    addRemoveTaskBtn(item)
    {
        const btn = document.createElement('button');
              btn.setAttribute('type', 'button');
              btn.innerText = 'X'; // special character koji daje X - &times

        item.appendChild(btn);
        btn.addEventListener('click', this.removeItem);
    }
    //Označi task riješenim/neriješenim
    markDone = (event) => //koristimo arrow function čim se metoda poziva preko event listenera
    {
        const checkbox = event.target;
        const item = checkbox.parentNode;
        item.classList.toggle('done'); // radi isto kao i ovo dolje napisano u komentaru i radi samo za klasu
        if(checkbox.checked){
            item.dataset.doneDate = this.createTimestamp();
        } else {
            item.dataset.doneDate = '';
        }
    }
    //Izbriši tekst u  input polju i napravi fokus na njega
    resetInput()
    {
        this.taskInput.value = ''; // poništavanje polja taskInput da se isprazni input polje
        this.taskInput.focus();
    }
    //Izbriši task iz liste
    removeItem = (event) =>
    {
        const btn = event.target;
        const li = btn.parentNode;

        if(!li.classList.contains('done')){ //contains je metoda kojom provjeravamo dali ima nekog dijela koji tražimo
            li.remove();
        }
    }
    
    //Kreiraj timestamp
    createTimestamp()
    {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        return  `${year}-${month}-${day} ${hour}:${min}`;
    }
}

