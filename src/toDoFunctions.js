// import {  } from "./toDoListDom";

//factory that is used to create new function projects
function projectFactory (title, tasks, priority)
{
    title = title;
    tasks = tasks;
    //an Array that holds each To do list's tasks
    let tasksArray = new Array();
    tasksArray.push(tasks);
    priority = priority;
    // dueDate = dueDate;

    function addTask(task){
        tasksArray.push(task);
    }
    
    return { title, tasksArray, priority, addTask }
}

let defaultProjectOne = projectFactory("Mow The Lawn", "Charge the battery", "High");
let defaultProjectTwo = projectFactory("Get stuff for Tacos", "Hamburger", "Medium");

defaultProjectOne.addTask("Get mower out of storage");
defaultProjectTwo.addTask("Shells");
defaultProjectTwo.addTask("Shredded Mexican Cheese");

let allProjects = new Array();
allProjects.push(defaultProjectOne);
allProjects.push(defaultProjectTwo);

function getAllProjectsArray(){
    return allProjects;
}

function getIndividualProject(i){
    return allProjects[i];
}

// function getAllProjectsTasksArray(i){

    
//     return getAllProjectsArray(i).taskArray;
// }


 export { getAllProjectsArray, getIndividualProject };