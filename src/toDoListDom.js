import { getAllProjectsArray, getIndividualProject, addProject } from "./toDoFunctions";

// unhides the New Project project form
function newProjectFormActivate(){
    let form = document.getElementById("newProjectForm");
    form.className = "";    
    newProjectForm.classList.add("newForm")
}

// hides the New Project form 
function newProjectFormDeactivate(){
    let form = document.getElementById("newProjectForm");
    form.className = "";    
    newProjectForm.classList.add("hideForm")
    document.getElementById("title").value = "";
    document.getElementById("firstTask").value = "";
}

// unhides the New Task project form
function newTaskFormActivate(){
    let form = document.getElementById("newTaskForm");
    form.className = "";    
    newTaskForm.classList.add("newForm")
}

// hides the New Task form 
function newTaskFormDeactivate(){
    let form = document.getElementById("newTaskForm");
    console.log(form)
    form.className = "";    
    form.classList.add("hideForm")
    document.getElementById("firstTask").value = "";   
}

//function to be called when a project from the list in the sidebar is clicked
function sideBarProjectClicked(){
    let titleArray = getAllProjectsArray();    
    let projectContent = document.getElementById("projectContent");
    let currentProjectTitle = document.getElementById("currentProjectTitle");
    let index = this.getAttribute("data-sideBarid");
    currentProjectTitle.textContent = getIndividualProject(index).title;
    addTasksToCurrentProject(index);
}

//adds each Project title to the sidebar
function addProjectsToSideBar(thisArray){
    let projectsList = document.getElementById("projectListContainer");
    let array = thisArray;
    projectsList.textContent = "";
    array.forEach(element => {
        let projectToBeAddedToList = document.createElement("div");
        projectToBeAddedToList.id = "project: " + array.indexOf(element);
        projectToBeAddedToList.dataset.sidebarid = array.indexOf(element);
        projectToBeAddedToList.classList.add("sideBarProjectList")
        projectToBeAddedToList.textContent = element.title;
        projectToBeAddedToList.addEventListener("click", sideBarProjectClicked)
        projectsList.appendChild(projectToBeAddedToList);        
    });
}

// funtion to add the current form as a new To Do List project
function addProjectButtonClicked(){

    // adds the project
    currentProjectTitle.textContent = document.getElementById("title").value;
    addProject();
    addProjectsToSideBar(getAllProjectsArray());
    //deactivates the project form, hiding it again
    newProjectFormDeactivate();
    // Displays the newly created project's initial task
    let index = getAllProjectsArray().length - 1;
    addTasksToCurrentProject(index);

   
   // // projectContent.textContent = getProjectTask();
   // localStorage.setItem('titles', JSON.stringify(getProjectTitlesArray()))
   // localStorage.setItem('tasks', JSON.stringify(getProjectTaskContainterArray()))

}

// listener that adds a new task to the list if the add new task button is clicked
function addNewTaskButtonClicked(){
    let index = this.getAttribute("data-add-task-id");
    let newTask = document.getElementById("newTask").value;
    getIndividualProject(index).tasksArray.push(newTask);
    console.log(index);
    console.log(getIndividualProject(index) + " fail")
    newTaskFormDeactivate();
    addTasksToCurrentProject(index);
}

// listener for bringing up the Add new task form
function createNewTaskClicked(){
    
    let index = this.getAttribute("data-create-new-taskid");
    newTaskFormActivate()
    // creates a button to add the project
    let addnewTaskButton = document.getElementById("addnewTaskButton")
    addnewTaskButton.dataset.addTaskId = index; 

}

// deletes an item from the current to do list
function taskInListClicked(){
    
    let array = this.getAttribute("data-array-id")
    let index = this.getAttribute("data-task-id")
    console.log("array " + array)
    console.log("index " + index)
    

    if (index > -1) {
        getIndividualProject(array).tasksArray.splice(index, 1);}

        addTasksToCurrentProject(array);

}

//adds each task to the projectContent
function addTasksToCurrentProject(i){
    
    let array = getIndividualProject(i)
    let index = i;
    console.log(array);
    let projectContent = document.getElementById("projectContent");
    //erases tasks that are displayed in the project content
    projectContent.textContent = "";

    // createNewTaskInProject();
    let createNewTask = document.createElement("div");
    createNewTask.id = "createNewTask";
    createNewTask.dataset.createNewTaskid = index;
    createNewTask.textContent = "+ Create new task"
    createNewTask.classList.add("taskContainer");
    createNewTask.addEventListener("click", createNewTaskClicked)
    projectContent.appendChild(createNewTask);
    
    // running through the tasks array and creating an object for each task    
    array.tasksArray.forEach(element => {
        let taskToAdd = document.createElement("div");
        taskToAdd.id = element;
        taskToAdd.dataset.taskId = array.tasksArray.indexOf(element);
        taskToAdd.dataset.arrayId = index;
        taskToAdd.classList.add("taskContainer")
        taskToAdd.textContent = element;
        taskToAdd.addEventListener("click", taskInListClicked)
        projectContent.insertBefore(taskToAdd, createNewTask);
        console.log("Item in array: " + element)
    
    });

}



export { addProjectsToSideBar, addTasksToCurrentProject, newProjectFormActivate, newProjectFormDeactivate, newTaskFormActivate,
    newTaskFormDeactivate, addNewTaskButtonClicked, addProjectButtonClicked }