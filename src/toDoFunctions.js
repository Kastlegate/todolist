// import {  } from "./toDoListDom";

//factory that is used to create new function projects
function projectFactory (title, tasks, priority)
{
    title = title;
    tasks = tasks;
    //an Array that holds each To do list's tasks
    let tasksArray = new Array();
    tasksArray.push(tasks);
    // an array that holds all finsished and checked tasks
    let finishedTasksArray = new Array();

    priority = priority;
    // dueDate = dueDate;

    // function removeTask(task){
    //     finishedTasksArray.push(task);
    // }

    // function addTask(task){
    //     tasksArray.push(task);
    // }

    return { title, tasksArray, finishedTasksArray, priority, }
}

//  adds a task to the tasksArray
function addTask(array, task){
    array.tasksArray.push(task);
}

//adds a task to the completed task array
function removeTask(array, task){
    array.finishedTasksArray.push(task);
}

let defaultProjectOne = projectFactory("Mow The Lawn", "Charge the battery", "High");
let defaultProjectTwo = projectFactory("Get stuff for Tacos", "Hamburger", "Medium");


// defaultProjectOne.addTask("Get mower out of storage");
// defaultProjectTwo.addTask("Shells");
// defaultProjectTwo.addTask("Shredded Mexican Cheese");

let allProjects = new Array();
allProjects.push(defaultProjectOne);
allProjects.push(defaultProjectTwo);

addTask(allProjects[0], "Get mower out of storage");
addTask(allProjects[1], "Shells");
addTask(allProjects[1], "Shredded Mexican Cheese");

function getAllProjectsArray(){
    return allProjects;
}

function getIndividualProject(i){
    return allProjects[i];
}

function addProject(title, task, priority){
    let newProject = projectFactory(document.getElementById("title").value, 
    document.getElementById("firstTask").value, priority)
    allProjects.push(newProject);
}

function setallProjects(array){
    allProjects = array;
    return allProjects;
}


 export { getAllProjectsArray, getIndividualProject, addProject, setallProjects, addTask, removeTask };