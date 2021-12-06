import './style.css';
import { getAllProjectsArray, addProject } from './toDoFunctions.js';
import { addProjectsToSideBar, addTasksToCurrentProject, newProjectFormActivate, 
    newProjectFormDeactivate, newTaskFormActivate, newTaskFormDeactivate, addNewTaskButtonClicked, 
    addProjectButtonClicked } from './toDoListDom.js';
import { compareAsc, format } from 'date-fns'



// creates the header
let header = document.createElement("header");
    header.id = "header";
document.body.appendChild(header);
//container for the logo text and boxes
let logoContainer = document.createElement("div");
    logoContainer.id = "logoContainter";
    header.appendChild(logoContainer);

// creates the logo for the site
let logo = document.createElement("div");
    logo.id = "logo";
    logo.textContent = "To Do Lists";
    logoContainer.appendChild(logo);

    //container for the logo boxes
let logoBoxContainer = document.createElement("div")
    logoBoxContainer.id = "logoBoxContainer";
    logoContainer.appendChild(logoBoxContainer)    
// little boxes for the logo
// let logoBoxOne = document.createElement("div");
//     logoBoxOne.id = "logoBoxOne";
//     logoBoxOne.className = "far fa-square";
//     logoBoxContainer.appendChild(logoBoxOne);
let logoBoxTwo = document.createElement("div");
    logoBoxTwo.id = "logoBoxTwo";
    logoBoxTwo.className = "far fa-square";
    logoBoxContainer.appendChild(logoBoxTwo);
let logoBoxThree = document.createElement("div");
    logoBoxThree.id = "logoBoxThree";
    logoBoxThree.className = "far fa-check-square";
    logoBoxContainer.appendChild(logoBoxThree);


// function for the create new project button
function createNewProjectButtonPressed(){
    let defaultProject = getAllProjectsArray();
    console.log(defaultProject);
    newProjectFormActivate();
}

let createNewProject = document.createElement("button");
    createNewProject.id = "createNewProject";
    createNewProject.textContent = "+ Create new To do Project";
    createNewProject.addEventListener("click", createNewProjectButtonPressed)
    header.appendChild(createNewProject);


// the main content of the page. A div that holds the navigation sidebar and the current project display
let mainContent = document.createElement("div");
    mainContent.id = "mainContent";
    document.body.appendChild(mainContent);
// navigation sidebar
let sideBar = document.createElement("div");
    sideBar.id = "sideBar";
    mainContent.appendChild(sideBar);
    let sideBarInfo = document.createElement("div");
    sideBarInfo.id = "sideBarInfo"
    sideBarInfo.textContent = "To Do";
    sideBar.appendChild(sideBarInfo);

//Used in sidebar to display a list of all projects
let projectListContainer = document.createElement("div");
    projectListContainer.id = "projectListContainer";
    sideBar.appendChild(projectListContainer);
// current project display
let projectDisplay = document.createElement("div");
    projectDisplay.id = "projectDisplay";
    mainContent.appendChild(projectDisplay);
// title for the current project
let currentProjectTitle = document.createElement("h1");
    currentProjectTitle.id = "currentProjectTitle";
    currentProjectTitle.textContent = "Select a To Do List to begin";
    projectDisplay.appendChild(currentProjectTitle);
// content for the current project
let projectContent = document.createElement("div");
    projectContent.id = "projectContent";
    projectDisplay.appendChild(projectContent);
    
// creates the new Project Form
let newProjectForm = document.createElement("form");
    newProjectForm.id = "newProjectForm";
    newProjectForm.setAttribute("onsubmit", "return false")
    newProjectForm.classList.add("hideForm");
    projectDisplay.insertBefore(newProjectForm, currentProjectTitle);

 //Gets the project name
let title = document.createElement("input");
    title.id = "title";
    title.classList.add("formItem");
    title.setAttribute("placeholder", "Enter The name of Your new To Do List")
    newProjectForm.appendChild(title);

//Gets the projects first task
let firstTask = document.createElement("input");
    firstTask.id = "firstTask";
    firstTask.classList.add("formItem");
    firstTask.setAttribute("placeholder", "Enter the first Task in your To Do List")
    newProjectForm.appendChild(firstTask);

    // creates a button to add the project
    let addProjectButton = document.createElement("button");
    addProjectButton.id = "addProjectButton";
    
    addProjectButton.addEventListener("click", addProjectButtonClicked);
    addProjectButton.textContent = "+ Add To Do list";
    newProjectForm.appendChild(addProjectButton);

// Creates a form to collect a new task to add to the To Do List
let newTaskForm = document.createElement("form");
    newTaskForm.id = "newTaskForm";
    newTaskForm.classList.add("newTaskForm");
    newTaskForm.classList.add("hideForm");
    newTaskForm.setAttribute("onsubmit", "return false")
    // newProjectForm.classList.add("hideNewProjectForm");
    projectDisplay.insertBefore(newTaskForm, currentProjectTitle);

    //Gets the new task
    let newTask = document.createElement("input");
    newTask.id = "newTask";
    newTask.classList.add("formItem");
    newTask.setAttribute("placeholder", "New Task")
    newTaskForm.appendChild(newTask);

    let addnewTaskButton = document.createElement("button");
    addnewTaskButton.id = "addnewTaskButton";
    addnewTaskButton.addEventListener("click", addNewTaskButtonClicked)
    addnewTaskButton.textContent = "+ Add To Do list";
    
    newTaskForm.appendChild(addnewTaskButton);
    


addProjectsToSideBar(getAllProjectsArray());

    // checks to see if local storage is available
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    console.log("Local storage is available");
  }
  else {
    console.log("Local storage is not available");
  }








    