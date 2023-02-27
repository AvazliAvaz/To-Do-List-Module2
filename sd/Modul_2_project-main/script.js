let addTask = [];
let inputTask = document.querySelector("#input-task");
const ul = document.querySelector(".task-list");
displayTasks()



function displayTasks() {
  if (addTask.length != 0) {
    ul.style.display = "block";
  }


  ul.innerHTML = "";
   for (task of addTask) {
    let li = `<li class = "task-list_element">
    <div class = "tasksList">
    <div class="task">${task} </div>
    <div class="deletTask"> <button type ="button" class = "deleteBtn"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
     <path d="M6 6L14 14" stroke="#C4C4C4"/>
     <path d="M6 14L14 6" stroke="#C4C4C4"/>
     </svg>
     </button>
     </div>
     </div>
    </li>`;

    ul.insertAdjacentHTML("beforeend", li);
  }
}


let btnAdd = document.querySelector(".button--text");

btnAdd.addEventListener('click', event => {
  event.preventDefault();
  if (inputTask.value == "") {
    alert('Bir tapsiriq qeyd edin')
  } else {
    addTask.push(inputTask.value);

    displayTasks();

    deleteTask();
   

    inputTask.value = "";
  }
});

// btnAdd.addEventListener('keydown', function(event){
//     if (event.key ==13){
//       document.btnAdd(click())
//       event.preventDefault();
//     }
// });





function deleteTask() {
  const dlt = document.querySelectorAll(".deletTask")
  for (let i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener('click', () => {
      dlt[i].parentElement.remove();

      const index = addTask.indexOf(i)
      addTask.splice(index, 1)

    })

  }
}



function rotate() {
  let filterRect = document.querySelector(".task_filter rect")
  let filterPath = document.querySelector(".task_filter path")
 
  if (filterRect.classList.contains("rot")) {
    filterRect.classList.remove("rot");
    filterPath.classList.remove("rot")
   
  } else {
    filterRect.classList.add("rot");
    filterPath.classList.add("rot");

  }

}
let hideButton = document.querySelector(".button--icon")
hideButton.addEventListener("click",(e)=> {
  
  let hideButton = document.querySelector(".button--icon")
 
 
  if (inputTask.classList.contains("hide_input")) {
    inputTask.classList.remove("hide_input");
    
   
  } else {
    inputTask.classList.add("hide_input");

  }
  e.preventDefault();
})


const filterBtn = document.querySelector('.task_filter');
filterBtn.addEventListener("click", (event) => {
 
  let isSorted = document.getElementById("sort");
 
   if (isSorted.value == "1") {
    addTask.sort();
   isSorted.value = 0;
  }
  
  else if(isSorted.value == "0")  {
    addTask.reverse();
    isSorted.value = 1;
    
  }
//  console.log(isSorted + "3");
 

  
 displayTasks();
 deleteTask();

   rotate()
 event.preventDefault()
  
})


