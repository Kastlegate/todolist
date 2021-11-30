import { getProjectTitlesArray, getProjectTaskContainterArray, createListOfTasks } from "./toDoFunctions";

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
}

//function to be called when a project from the list in the sidebar is clicked
function sideBarProjectClicked(){
    let titleArray = getProjectTitlesArray();    
    let projectContent = document.getElementById("projectContent");
    let currentProjectTitle = document.getElementById("currentProjectTitle");
    let index = this.getAttribute("data-sideBarid");
    let taskArray = getProjectTaskContainterArray();
    // console.log(addTasksToCurrentProject(taskArray, index))
    // console.log("titleArray[index]" + titleArray[index]) 
    currentProjectTitle.textContent = titleArray[index]; 
    addTasksToCurrentProject(taskArray, index);
    // projectContent.textContent = addTasksToCurrentProject(taskArray, index);
}

//adds each Project title to the sidebar
function addProjectsToSideBar(thisArray){
    let projectsList = document.getElementById("projectListContainer");
    let array = thisArray;
    projectsList.textContent = "";
    array.forEach(element => {
        let projectToBeAddedToList = document.createElement("div");
        projectToBeAddedToList.id = element + " " +array.indexOf(element);
        projectToBeAddedToList.dataset.sidebarid = array.indexOf(element);
        projectToBeAddedToList.classList.add("sideBarProjectList")
        projectToBeAddedToList.textContent = element;
        projectToBeAddedToList.addEventListener("click", sideBarProjectClicked)
        projectsList.appendChild(projectToBeAddedToList);
        
    });
}

function createNewTaskClicked(){
    console.log("creating a new task clicked")
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
function addTasksToCurrentProject(thisArray, i){
    let index = i;
    let array = thisArray[index];
    let projectContent = document.getElementById("projectContent");
    //erases tasks that are displayed in the project content
    projectContent.textContent = "";

    // createNewTaskInProject();
    let createNewTask = document.createElement("div");
    createNewTask.id = "createNewTask";
    createNewTask.textContent = "+ Create new task"
    createNewTask.classList.add("taskContainer");
    createNewTask.addEventListener("click", createNewTaskClicked)
    projectContent.appendChild(createNewTask);

    // running through the tasks array and creating an object for each task
    
    array.forEach(element => {
        let taskToAdd = document.createElement("div");
        taskToAdd.id = element;
        taskToAdd.dataset.taskid = array.indexOf(element);
        taskToAdd.classList.add("taskContainer")
        taskToAdd.textContent = element;
        taskToAdd.addEventListener("click", sideBarProjectClicked)
        projectContent.insertBefore(taskToAdd, createNewTask);
        console.log("Item in array: " + element)
    });

}



export { newProjectFormActivate , newProjectFormDeactivate, setProjectTitle, addProjectsToSideBar,
     sideBarProjectClicked, addTasksToCurrentProject, createNewTaskInProject }