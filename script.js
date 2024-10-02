const enterTodo = document.getElementById("text-todo-entry");
const parentTodo = document.getElementById("box-all-task");

function f_creerNewTodo(value){
    newTodo = document.createElement("div");
    newTodo.classList.add("todo-box");
    newTodo.innerHTML = `
    <div class = "text-and-check">
            <input type="checkbox" class = "empty-chekbox" name="" id="">
            <div class ="bg-checked"></div>
            <p class ="text-todo-normal">${value}</p>
            
          </div>
          <img src="images/icon-cross.svg" alt="image cross" class = "img-cross">`;
    parentTodo.appendChild(newTodo);
}

function f_supprimerValue(){
    enterTodo.value = "";  // deleted the text in the input 
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && enterTodo.value !="") { // verify if the key pressed is enter and if there is text in the input
      console.log("create new todo" ,enterTodo.value);
      f_creerNewTodo(enterTodo.value);  // create a new todo
      f_supprimerValue();
    };
});