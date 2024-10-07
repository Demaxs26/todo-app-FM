const enterTodo = document.getElementById("text-todo-entry");
const parentTodo = document.getElementById("box-all-task");
const btnOnlyActiveMobil = document.querySelectorAll(".middle-box-modil .middle-text")[1];
const btnOnlyCompletedMobil = document.querySelectorAll(".middle-box-modil .middle-text")[2];
const btnOnlyActiveDesktop = document.querySelectorAll(".three-middle-option .middle-text")[1];
const btnOnlyCompletedDesktop = document.querySelectorAll(".three-middle-option .middle-text")[2];

let tabTodo = [];
let ActiveOrNot = true;
let CompletedOrNot = true;


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

function f_displayUndisplay(display1,display2,type){
  for(i = 0; i<tabTodo.length; i++){  //verify for each todo if it is checked
    if (type ===false){
      if (tabTodo[i][1] === false){  
        document.querySelectorAll(".todo-box")[i+1].style.display = display1;
      }
    }else{
      if (tabTodo[i][1]){  
        document.querySelectorAll(".todo-box")[i+1].style.display = display2;
      }
    }

  }
}

function f_checkActive(){
  if(ActiveOrNot){
    
    f_displayUndisplay("none","flex",false);
    btnOnlyActiveMobil.style.color ="var(--Very-Light-Gray)";
    btnOnlyActiveDesktop.style.color ="var(--Very-Light-Gray)";
    ActiveOrNot = false;
  }else{
    
    f_displayUndisplay("flex","flex",false);
     btnOnlyActiveMobil.style.color ="var(--Dark-Grayish-Blue)";
     btnOnlyActiveDesktop.style.color ="var(--Dark-Grayish-Blue)";
    ActiveOrNot = true;
  }
}

function f_checkCompleted(){
  if(CompletedOrNot){

    f_displayUndisplay("none",true);
    btnOnlyCompletedMobil.style.color ="var(--Very-Light-Gray)";
    btnOnlyCompletedDesktop.style.color ="var(--Very-Light-Gray)";
    CompletedOrNot= false;
  }else{

    f_displayUndisplay("flex",true);
    btnOnlyCompletedMobil.style.color ="var(--Dark-Grayish-Blue)";
     btnOnlyCompletedDesktop.style.color ="var(--Dark-Grayish-Blue)";
    CompletedOrNot = true;
  }
}


btnOnlyActiveDesktop.addEventListener("click",function(){
  f_checkActive()
})
btnOnlyActiveMobil.addEventListener("click", function(){
  f_checkActive()
})

btnOnlyCompletedDesktop.addEventListener("click",function(){
  f_checkCompleted()
})
btnOnlyCompletedMobil.addEventListener("click",function(){
  f_checkCompleted()
})



function f_reorderThisTodo(todo){
  if (ActiveOrNot === false){
    document.querySelectorAll(".todo-box")[todo].style.display ="none";
  }
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
    console.log(tabTodo)
  })
}

function f_verifyCheck(numChekbox){
  console.log(document.querySelectorAll(".empty-chekbox")[numChekbox].checked);
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

