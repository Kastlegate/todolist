import { getAllProjectsArray, getIndividualProject } from "./toDoFunctions";

// unhides the project form
function newProjectFormActivate(){
    let form = document.getElementById("newProjectForm");
    form.className = "";    
    newProjectForm.classList.add("newProjectForm")
}

// Sets the Project title
function setProjectTitle(){
    console.log("adding project?")
    let title = document.getElementById("title").value;
    document.getElementById("title").value = ""
    return title;

}

// hides the form 
function newProjectFormDeactivate(){
    let form = document.getElementById("newProjectForm");
    form.className = "";    
    newProjectForm.classList.add("hideNewProjectForm")
    document.getElementById("title").value = "";
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
    // projectContent.textContent = "pewpewpew";
}

//adds each Project title to the sidebar
function addProjectsToSideBar(thisArray){
    let projectsList = document.getElementById("projectListContainer");
    let array = thisArray;
    projectsList.textContent = "";
    array.forEach(element => {
        let projectToBeAddedToList = document.createElement("div");
        projectToBeAddedToList.id = element + " " + array.indexOf(element);
        projectToBeAddedToList.dataset.sidebarid = array.indexOf(element);
        projectToBeAddedToList.classList.add("sideBarProjectList")
        projectToBeAddedToList.textContent = element.title;
        projectToBeAddedToList.addEventListener("click", sideBarProjectClicked)
        projectsList.appendChild(projectToBeAddedToList);
        
    });
}
let buttonIndex;
function addNewTaskButtonClicked(){
    console.log("ugh ugh ugh")
    let index = buttonIndex;
    
    let taskArray = getProjectTaskContainterArray();
    let newTask = getNewProjectTask();
    console.log(newTask)
    updateTaskList(taskArray, index, newTask)
    localStorage.setItem('tasks', JSON.stringify(getProjectTaskContainterArray()))
}

function createNewTaskClicked(){
    let index = this.getAttribute("data-create-new-taskid");
    let newTaskForm = document.createElement("form");
    newTaskForm.id = "newTaskForm";
    newTaskForm.classList.add("newTaskForm");
    newTaskForm.setAttribute("onsubmit", "return false")
    // newProjectForm.classList.add("hideNewProjectForm");
    projectDisplay.insertBefore(newTaskForm, currentProjectTitle);

    //Gets the new task
    let newTask = document.createElement("input");
    newTask.id = "newTask";
    newTask.classList.add("formItem");
    newTask.setAttribute("placeholder", "New Task")
    newTaskForm.appendChild(newTask);

    // creates a button to add the project
    let addnewTaskButton = document.createElement("button");
    addnewTaskButton.id = "addnewTaskButton";
    
    addnewTaskButton.addEventListener("click", addNewTaskButtonClicked);
    addnewTaskButton.textContent = "+ Add To Do list";
    newTaskForm.appendChild(addnewTaskButton);


}

//a function that will allow new tasks to be added to each to do list
function createNewTaskInProject() {

    let createNewTask = document.createElement("div");
    createNewTask.id = "createNewTask";
    createNewTask.textContent = "+ Create new task"
    createNewTask.classList.add("taskContainer");
    createNewTask.addEventListener("click", createNewTaskClicked)
    projectContent.appendChild(createNewTask);
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
        taskToAdd.dataset.taskid = array.tasksArray.indexOf(element);
        taskToAdd.classList.add("taskContainer")
        taskToAdd.textContent = element;
        // taskToAdd.addEventListener("click", sideBarProjectClicked)
        projectContent.insertBefore(taskToAdd, createNewTask);
        console.log("Item in array: " + element)
            
    
        // console.log(addTasksArray) 
    });

}



export { addProjectsToSideBar, addTasksToCurrentProject, newProjectFormActivate, newProjectFormDeactivate }