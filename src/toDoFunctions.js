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

function addNewProjectToArray(){
    let title = document.getElementById("title").value;
    projectTitlesArray.push(title);
}

let projectTasks = new Array();

function createNewTask(){
    let projectTasksArray = new Array();
    
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


export {  getProjectTitle, getProjectTitlesArray, addNewProjectToArray };