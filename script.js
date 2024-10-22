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
let ActiveOrNot = true;
let CompletedOrNot = true;
let AllOrNot = false;


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

function f_displayUndisplay(display1,display2,type){
  for(let i = 0; i<tabTodo.length; i++){  //verify for each todo if it is checked
    if (type ===false){
      if (tabTodo[i][1] === false){  
        document.querySelectorAll(".todo-box")[i+1].style.display = display1;
      }
     else{  
          document.querySelectorAll(".todo-box")[i+1].style.display = display2;
      }
    }else{
      if (tabTodo[i][1] === false){  
        document.querySelectorAll(".todo-box")[i+1].style.display = display2;
      }
     else{  
          document.querySelectorAll(".todo-box")[i+1].style.display = display1;
      }
    }

  }
}

function changeActive(togle,color){
  btnOnlyActiveMobil.style.color =color;
  btnOnlyActiveDesktop.style.color =color;
  ActiveOrNot = togle;
}

function changeCompleted(togle,color){
  btnOnlyCompletedMobil.style.color =color;
  btnOnlyCompletedDesktop.style.color =color;
  CompletedOrNot = togle;
}

function changeAll(togle,color){
  btnAllDesktop.style.color = color;
  btnAllMobil.style.color = color;
  AllOrNot = togle;
}

function f_checkActive(){
  if(ActiveOrNot){
    if (CompletedOrNot === false){
      CompletedOrNot = true
      changeCompleted(true,colornormal)
    }else if(AllOrNot === false){
      AllOrNot = true
      changeAll(true,colornormal)
    }
    f_displayUndisplay("none","flex",false);
    changeActive(false,colorfocus)


  }else{
    f_displayUndisplay("flex","flex",false);
    changeActive(true,colornormal);
    changeCompleted(true,colornormal);
    ActiveOrNot = true;
    changeAll(false,colorfocus);
  }
}


function f_checkCompleted(){
  if(CompletedOrNot){
    if (ActiveOrNot === false){
      ActiveOrNot = true
      changeActive(true,colornormal)
    }
    f_displayUndisplay("none","flex",true);
    changeCompleted(false,colorfocus)
  }else{

    f_displayUndisplay("flex","flex",true);
    changeCompleted(true,colornormal)
    changeActive(true,colornormal)
    CompletedOrNot = true
  }
}

function f_activeAll(){
  if(AllOrNot){
    changeAll(true,colornormal)
    AllOrNot = false
  }else{
    changeAll(false,colorfocus)
    AllOrNot = true
    
  }
  if(CompletedOrNot == false){
    CompletedOrNot = true
    changeCompleted(true,colornormal)
  }
  if (ActiveOrNot == false){
    ActiveOrNot = true
    changeActive(true,colornormal)
  }
  changeCompleted(true,colornormal)
  changeActive(true,colornormal)
  CompletedOrNot = true
  ActiveOrNot = true
  f_displayUndisplay("flex","flex",true);
    

  
}

function f_deleteChecked(){
  let children = parentTodo.children;
  
  for (let i  = tabTodo.length-1;i>0;i--){
    console.log(tabTodo[i]);
    if (tabTodo[i][1] == false){

      parentTodo.removeChild(children[i])
      tabTodo.splice(i,1);
    }
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

btnAllDesktop.addEventListener("click",function(){
  f_activeAll()
})

btnAllMobil.addEventListener("click",function(){
  f_activeAll()
})

btnclearCompleted.addEventListener("click", function(){
  f_deleteChecked()
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

