import {Todo} from './components/todo.js'; //pristup koji se koristi u Reactu

(function(){
    "use strict";

    const todo = new Todo('taskInput', 'addTask', 'todoList', 'saveTaskList','deleteTaskList');
    todo.init(); 
    //ovo je metoda kojom se radi daljnja inicijalizacija
    // window.addEventListener('load', todo.init()); sa ovim načinom se na load pokreće metoda init
    console.log(todo);
})();
