import './style.css';
import { getAllProjectsArray } from './toDoFunctions.js';
import { addProjectsToSideBar, addTasksToCurrentProject, } from './toDoListDom.js';
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
let logoBoxOne = document.createElement("div");
    logoBoxOne.id = "logoBoxOne";
    logoBoxOne.classList.add("logoBox");
    logoBoxContainer.appendChild(logoBoxOne);
let logoBoxTwo = document.createElement("div");
    logoBoxTwo.id = "logoBoxTwo";
    logoBoxTwo.classList.add("logoBox");
    logoBoxContainer.appendChild(logoBoxTwo);
let logoBoxThree = document.createElement("div");
    logoBoxThree.id = "logoBoxThree";
    logoBoxThree.classList.add("logoBox");
    logoBoxContainer.appendChild(logoBoxThree);


// function for the create new project button
function createNewProjectButtonPressed(){
    let defaultProject = getAllProjectsArray();
    console.log(defaultProject);
    // newProjectFormActivate();
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
    sideBar.textContent = "To Do";
    mainContent.appendChild(sideBar);
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
    
// creates the project Form
let newProjectForm = document.createElement("form");
    newProjectForm.id = "newProjectForm";
    newProjectForm.setAttribute("onsubmit", "return false")
    newProjectForm.classList.add("hideNewProjectForm");
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

// funtion to add the current form as a new project
function addProjectButtonClicked(){

   
    // console.log("adding project?");
    // currentProjectTitle.textContent = getProjectTitle();
    // createListOfTasks();
    // //calls the function that adds a project to the project array
    // addNewProjectToArray();
    // //updates with the new sidebar to do list array and fills all to do projects into the sidebar
    // addProjectsToSideBar(getProjectTitlesArray());
    // //deactivates the project form, hiding it again
    // newProjectFormDeactivate();
    // // projectContent.textContent = getProjectTask();
    // localStorage.setItem('titles', JSON.stringify(getProjectTitlesArray()))
    // localStorage.setItem('tasks', JSON.stringify(getProjectTaskContainterArray()))

}
// if statement that checks if the local storage contains a "titles" string and, if so, populates
// uses it to fill the projects array. If not, it populates the array with the 2 default titles
// if (localStorage.getItem('titles'))
// {
    
    // localStorage.removeItem('titles')
    // localStorage.removeItem('tasks')  
    // console.log(localStorage.getItem('tasks'))
    
    // let titlesArray = JSON.parse(window.localStorage.getItem('titles'));
    // let tasksArray = JSON.parse(window.localStorage.getItem('tasks'));
    // console.log(tasksArray)
   
    // setProjectTitlesArray(titlesArray);
    // setProjectTaskContainterArray(tasksArray);
    // addProjectsToSideBar(getProjectTitlesArray());
// }
// else{
//      addProjectsToSideBar(getAllProjectsArray);
// }

addProjectsToSideBar(getAllProjectsArray());
// addTasksToCurrentProject(1);
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








    