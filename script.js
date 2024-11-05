const enterTodo = document.getElementById("text-todo-entry");
const parentTodo = document.getElementById("box-all-task");
const btnOnlyActiveMobil = document.querySelectorAll(".middle-box-modil .middle-text")[1];
const btnOnlyCompletedMobil = document.querySelectorAll(".middle-box-modil .middle-text")[2];
const btnOnlyActiveDesktop = document.querySelectorAll(".three-middle-option .middle-text")[1];
const btnOnlyCompletedDesktop = document.querySelectorAll(".three-middle-option .middle-text")[2];
const btnAllDesktop = document.querySelectorAll(".three-middle-option .middle-text")[0];
const btnAllMobil = document.querySelectorAll(".middle-box-modil .middle-text")[0];
const btnclearCompleted = document.querySelector(".last-text")

let tabTodo = [];

let dict = {
  ALL: true,
  Active: false,
  Completed: false,
  // etc.
};
function ALL(){

}

function Active(){

}

function Completed(){

}
function changeDico(focus){
  if (focus == 'ALL'){
    dict['ALL'] = true;
    dict['Active'] = false;
    dict['Completed'] = false;
  }
  else if (focus == 'Active'){
    if (dict['Active'] == true){
      ALL()
    }
    else{
      dict['ALL'] = true;
      dict['Active'] = false;
      dict['Completed'] = false;
      Active()
    }
  }
  else{
    if (dict['Completed'] == true){
      ALL()
    }else{
      dict['ALL'] = true;
      dict['Active'] = false;
      dict['Completed'] = false;
      Completed()
    }

  }
}

const colornormal = "var(--Dark-Grayish-Blue)";
const colorfocus = "var(--Very-Light-Gray)";


btnAllDesktop.style.color = colorfocus
btnAllMobil.style.color = colorfocus

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
    f_detectDelet(tabTodo.length-1,newTodo);
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



btnOnlyActiveDesktop.addEventListener("click",function(){
  changeDico("Active")
})
btnOnlyActiveMobil.addEventListener("click", function(){
  changeDico("Active")
})

btnOnlyCompletedDesktop.addEventListener("click",function(){
  changeDico("Completed")
})
btnOnlyCompletedMobil.addEventListener("click",function(){

  changeDico("Completed")
})

btnAllDesktop.addEventListener("click",function(){
  changeDico("ALL")
})

btnAllMobil.addEventListener("click",function(){
  changeDico("ALL")
})

btnclearCompleted.addEventListener("click", function(){
  changeDico("Completed")
})


function f_reorderThisTodo(todo){
  if (ActiveOrNot === false){
    document.querySelectorAll(".todo-box")[todo].style.display ="none";
  }
}

function f_detectDelet(numChekbox,newTodo){
  document.querySelectorAll(".img-cross")[numChekbox].addEventListener("click",function(){
    parentTodo.removeChild(newTodo);
    tabTodo.splice(numChekbox,1);
  },{once :true})
}

function f_detectCheck(numChekbox){

  document.querySelectorAll(".empty-chekbox")[numChekbox+1].addEventListener("click", function(){
    if (f_verifyCheck(numChekbox+1)){
      tabTodo[numChekbox][1] = false;
      f_reorderThisTodo(numChekbox+1)
    }
    else{
      tabTodo[numChekbox][1] = true;
    }
  })
}

function f_verifyCheck(numChekbox){
  return document.querySelectorAll(".empty-chekbox")[numChekbox].checked

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

