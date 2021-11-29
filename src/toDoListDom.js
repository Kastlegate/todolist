import { getProjectTitlesArray } from "./toDoFunctions";

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
    let array = getProjectTitlesArray();
    let projectContent = document.getElementById("projectContent");
    let currentProjectTitle = document.getElementById("currentProjectTitle");
    let index = this.getAttribute("data-sideBarid");
    // projectContent.textContent = array[index].fullTask; 
    currentProjectTitle.textContent = array[index]; // <--- WILL HAVE TO BE ITS OWN OBECT
}

//adds each Project title to the sidebar, MAY NEED TO GO TO THE DOM MANIPULATION MODULE
function addProjectsToSideBar(thisArray){
    let projectsList = document.getElementById("projectListContainer");
    let array = thisArray;
    projectsList.textContent = "";
    array.forEach(element => {
        let projectToBeAddedToList = document.createElement("div");
        projectToBeAddedToList.id = element;
        projectToBeAddedToList.dataset.sidebarid = array.indexOf(element);
        projectToBeAddedToList.classList.add("sideBarProjectList")
        projectToBeAddedToList.textContent = element;
        projectToBeAddedToList.addEventListener("click", sideBarProjectClicked)
        projectsList.appendChild(projectToBeAddedToList);
    });
}

export { newProjectFormActivate , newProjectFormDeactivate, setProjectTitle, addProjectsToSideBar, sideBarProjectClicked }