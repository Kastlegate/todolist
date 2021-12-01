import { setProjectTitle } from "./toDoListDom";

//factory that is used to create new function projects
function projectListFactory (title, task, priority, dueDate)
{
    title = title;
    task = task;
    priority = priority;
    dueDate = dueDate;
    let fullTask = task + " | Priority: " + priority + " | Due: " + dueDate;

            return {
                title, fullTask
            } 
}

// the functions and arrays working with the project title
let projectTitlesArray = new Array();


//returns the current value for the "title" form element
function getProjectTitle(){
    let title = document.getElementById("title").value;
    return title;
}

function getProjectTitlesArray(){
    return projectTitlesArray;
}

function setProjectTitlesArray(array){
    projectTitlesArray = array;
    return projectTitlesArray;
}

function addNewProjectToArray(){
    let title = document.getElementById("title").value;
    projectTitlesArray.push(title);
}

// functions and arrays to handle the to do list tasks
let projectTaskContainerArray = new Array();

// Outside array of a 2d array. each item inside is an array of tasks on each to do list
projectTaskContainerArray = [new Array("get the battery charged", "get mower out of storage"), new Array("research for best upgrade")]

// a function that returns the current project task in the form
function getProjectTask(){
    let firstTask = document.getElementById("firstTask").value;
    return firstTask;
}
// creates an array that hold a project's tasks and adds it to the projectTaskContainerArray, making a 2d array
function createListOfTasks(){
    let projectTasksArray = new Array();
    let firstTask = document.getElementById("firstTask").value;
    projectTasksArray = [firstTask]
    projectTaskContainerArray.push(projectTasksArray);   
    console.log(projectTaskContainerArray);
} 

function getProjectTaskContainterArray(){
    return projectTaskContainerArray;
}


function getProjectPriority(priority){
    priority = priority
    return priority;
}


function getProjectDueDate(){

}




//default projects
let projectOne = "Mow the Lawn";
let projectTwo = "Upgrade Computer ram";
projectTitlesArray = [projectOne, projectTwo];


export {  getProjectTitle, getProjectTitlesArray, addNewProjectToArray, getProjectTaskContainterArray, 
    createListOfTasks, getProjectTask, setProjectTitlesArray };