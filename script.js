const enterTodo = document.getElementById("text-todo-entry");
const parentTodo = document.getElementById("box-all-task");

tabTodo = []

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
    f_detectCheck(tabTodo.length-1);
}

function f_downClassemment(first,second){
  document.parentTodo.insertBefore(first,second)
}

function f_upClassemment(first,second){
  document.parentTodo.insertBefore(second,first)
}

function f_reoganiseTodo(){
  for (let i  = tabTodo.length;i>0;i--){
    if (tabTodo[i][1] == false){
      document.parentTodo.insertBefore(first,second)
    }
  }
}

function f_detectCheck(numChekbox){

  document.querySelectorAll(".empty-chekbox")[numChekbox+1].addEventListener("click", function(){
    if (f_verifyCheck){
      tabTodo[numChekbox][1] = false;
    }
    else{
      tabTodo[numChekbox][1] = true;
    }
    console.log(tabTodo)
  })
}

function f_verifyCheck(numChekbox){
  return tdocument.querySelectorAll(".empty-chekbox")[numChekbox].checked

}

function f_supprimerValue(){
    enterTodo.value = "";  // deleted the text in the input 
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && enterTodo.value !="") { // verify if the key pressed is enter and if there is text in the input
      console.log("create new todo" ,enterTodo.value);
      tabTodo.push([enterTodo.value, true]);
      f_creerNewTodo(enterTodo.value);  // create a new todo
      

      f_supprimerValue();
    };
});

