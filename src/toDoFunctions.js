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

// functions and arrays to handle the to do list tasks
let projectTaskContainerArray = new Array();

// tasks for the default to do lists
projectTaskContainerArray = [new Array("get the battery charged", "get mower out of storage"), new Array("research for best upgrade")]

function getProjectTask(){
    let firstTask = document.getElementById("firstTask").value;
    return firstTask;
}

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
    createListOfTasks, getProjectTask };