const enterTodo = document.getElementById("text-todo-entry");
const parentTodo = document.getElementById("box-all-task");
const btnOnlyActiveMobil = document.querySelectorAll(".middle-box-modil .middle-text")[1];
const btnOnlyCompletedMobil = document.querySelectorAll(".middle-box-modil .middle-text")[2];
const btnOnlyActiveDesktop = document.querySelectorAll(".three-middle-option .middle-text")[1];
const btnOnlyCompletedDesktop = document.querySelectorAll(".three-middle-option .middle-text")[2];
const btnAllDesktop = document.querySelectorAll(".three-middle-option .middle-text")[0];
const btnAllMobil = document.querySelectorAll(".middle-box-modil .middle-text")[0];
const btnclearCompleted = document.querySelector(".last-text");
const nbItemDisplay = document.querySelector(".nb-of-items");

let nbItems = 0
let tabTodo = [];

let dict = {
  ALL: true,
  Active: false,
  Completed: false,
  // etc.
};



function changeNbitems(x){
  nbItems += x
  nbItemDisplay.textContent = `${nbItems} items left` ;
}
function changeDisplay(){
  change = dict['Active'] ? false : (dict['ALL'] ? "different" : true)  
  for (i = 0;i<tabTodo.length;i++){
    document.querySelectorAll(".todo-box")[i+1].style.display = tabTodo[i][1] != change  ? (tabTodo[i][2] ? "flex" : "none"):"none";
    // console.log(tabTodo[i]);
  };
}

function changeColor(){
  btnAllDesktop.style.color = colorbtn[dict['ALL'] ? 1 : 0]
  btnAllMobil.style.color = colorbtn[dict['ALL'] ? 1 : 0]
  btnOnlyActiveDesktop.style.color = colorbtn[dict['Active'] ? 1 : 0]
  btnOnlyActiveMobil.style.color = colorbtn[dict['Active'] ? 1 : 0]
  btnOnlyCompletedDesktop.style.color = colorbtn[dict['Completed'] ? 1 : 0]
  btnOnlyCompletedMobil.style.color = colorbtn[dict['Completed'] ? 1 : 0]
}


function ALL(){
  dict['ALL'] = true;
  dict['Active'] = false;
  dict['Completed'] = false;
}

function Active(){
  dict['ALL'] = false;
  dict['Active'] = true;
  dict['Completed'] = false;
}

function Completed(){
  dict['ALL'] = false;
  dict['Active'] = false;
  dict['Completed'] = true;
}

function changeDico(focus){
  focus === 'ALL' ? ALL() : focus === 'Active' ? (dict['Active'] ? ALL() : Active() ): dict['Completed'] ? ALL() : Completed()
  changeColor();
  changeDisplay();
}


const colorbtn = ["var(--Dark-Grayish-Blue)","var(--selected-blue)"];



btnAllDesktop.style.color = colorbtn[1];
btnAllMobil.style.color = colorbtn[1]

function f_creerNewTodo(value){
    newTodo = document.createElement("div");
    newTodo.classList.add("todo-box");
    newTodo.setAttribute("draggable","true")
    newTodo.innerHTML = `
    <div class = "text-and-check" >
            <input type="checkbox" class = "empty-chekbox" name="" id="">
            <div class ="bg-checked"></div>
            <p class ="text-todo-normal">${value}</p>
            
          </div>
          <img src="images/icon-cross.svg" alt="image cross" class = "img-cross">`;
    parentTodo.appendChild(newTodo);
    changeNbitems(1);
    f_detectCheck(tabTodo.length-1);
    f_detectDelet(tabTodo.length-1,newTodo);
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
  for(i=0;i<tabTodo.length;i++){
    if (tabTodo[i][1] === false && tabTodo[i][2]){
      document.querySelectorAll(".todo-box")[i+1].style.display = "none"
      tabTodo[i][2] = false
      changeNbitems(-1);
    }
  }
})

function f_detectDelet(numChekbox,newTodo){
  document.querySelectorAll(".img-cross")[numChekbox].addEventListener("click",function(){
    document.querySelectorAll(".todo-box")[numChekbox+1].style.display = "none"
    tabTodo[numChekbox][2] = false
    changeNbitems(-1);
  },{once :true})
}

function f_detectCheck(numChekbox){
  document.querySelectorAll(".todo-box")[numChekbox+1].addEventListener("drag", (event)=>{
    console.log("draging")
  })
  document.querySelectorAll(".empty-chekbox")[numChekbox+1].addEventListener("click", function(){
    if (f_verifyCheck(numChekbox+1)){
      tabTodo[numChekbox][1] = false;
      
    }
    else{
      tabTodo[numChekbox][1] = true;
    }
    changeDisplay();
  })
}

function f_verifyCheck(numChekbox){
  return document.querySelectorAll(".empty-chekbox")[numChekbox].checked 

}

function f_supprimerValue(){
  enterTodo.value = ""
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && enterTodo.value !="") { // verify if the key pressed is enter and if there is text in the input
      console.log("create new todo" ,enterTodo.value);
      tabTodo.push([enterTodo.value, true,true]);
      f_creerNewTodo(enterTodo.value);  // create a new todo
      

      f_supprimerValue();
    };
});

