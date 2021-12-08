// import {  } from "./toDoListDom";

//factory that is used to create new function projects
function projectFactory (title, tasks, priority)
{
    title = title;
    //another factory that hold a task object, it's priority and it's due date 
    function fullTask (task){
        tasks = task;
        priority = priority;

        return{tasks, priority}
    }

    let tasky = fullTask(tasks, priority)

    //an Array that holds each To do list's tasks
    let tasksArray = new Array();
    tasksArray.push(tasky);
    // an array that holds all finsished and checked tasks
    let finishedTasksArray = new Array();

    // priority = priority;
    // dueDate = dueDate;

    return { title, tasksArray, finishedTasksArray, }
}

//  adds a task to the tasksArray
function addTask(array, tasks, priority){

    function fullTask (task, priority){
        tasks = task;
        priority = priority;

        return{tasks, priority}
    }

    let tasky = fullTask(tasks, priority)

    array.tasksArray.push(tasky);
}

//adds a task to the completed task array
function removeTask(array, tasks, priority){
    function fullTask (task, priority){
        tasks = task;
        priority = priority;

        return{tasks, priority}
    }

    let tasky = fullTask(tasks, priority)

    array.finishedTasksArray.push(tasky);
}

let defaultProjectOne = projectFactory("Mow The Lawn", "Charge the battery", "High");
let defaultProjectTwo = projectFactory("Get stuff for Tacos", "Hamburger", "Medium");


// defaultProjectOne.addTask("Get mower out of storage");
// defaultProjectTwo.addTask("Shells");
// defaultProjectTwo.addTask("Shredded Mexican Cheese");

let allProjects = new Array();
allProjects.push(defaultProjectOne);
allProjects.push(defaultProjectTwo);

// addTask(allProjects[0], "Get mower out of storage");
addTask(allProjects[1], "Shells", "medium");
addTask(allProjects[1], "Shredded Mexican Cheese");
removeTask(allProjects[1], "Seasoning", "Low")

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