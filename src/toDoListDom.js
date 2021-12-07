import { getAllProjectsArray, getIndividualProject, addProject, addTask, removeTask } from "./toDoFunctions";



// unhides the New Project project form
function newProjectFormActivate(){
    let form = document.getElementById("newProjectForm");
    form.className = "";    
    newProjectForm.classList.add("newForm")
}

// hides the New Project form 
function newProjectFormDeactivate(){
    let form = document.getElementById("newProjectForm");
    form.className = "";    
    newProjectForm.classList.add("hideForm")
    document.getElementById("title").value = "";
    document.getElementById("firstTask").value = "";
}

// unhides the New Task project form
function newTaskFormActivate(){
    let form = document.getElementById("newTaskForm");
    form.className = "";    
    newTaskForm.classList.add("newForm")
}

// hides the New Task form 
function newTaskFormDeactivate(){
    let form = document.getElementById("newTaskForm");
    console.log(form)
    form.className = "";    
    form.classList.add("hideForm")
    document.getElementById("firstTask").value = "";   
}

//function to be called when a project from the list in the sidebar is clicked
function sideBarProjectClicked(){
    let titleArray = getAllProjectsArray();    
    let projectContent = document.getElementById("projectContent");
    let currentProjectTitle = document.getElementById("currentProjectTitle");
    let index = this.getAttribute("data-sideBarid");
    currentProjectTitle.textContent = getIndividualProject(index).title;
    addTasksToCurrentProject(index);
}

//adds each Project title to the sidebar
function addProjectsToSideBar(thisArray){
    let projectsList = document.getElementById("projectListContainer");
    let array = thisArray;
    projectsList.textContent = "";
    array.forEach(element => {
        let projectToBeAddedToList = document.createElement("div");
        projectToBeAddedToList.id = "project: " + array.indexOf(element);
        projectToBeAddedToList.dataset.sidebarid = array.indexOf(element);
        projectToBeAddedToList.classList.add("sideBarProjectList")
        projectToBeAddedToList.textContent = element.title;
        projectToBeAddedToList.addEventListener("click", sideBarProjectClicked)
        projectsList.appendChild(projectToBeAddedToList);        
    });
}

// funtion to add the current form as a new To Do List project
function addProjectButtonClicked(){

    // adds the project
    currentProjectTitle.textContent = document.getElementById("title").value;
    addProject();
    addProjectsToSideBar(getAllProjectsArray());
    //deactivates the project form, hiding it again
    newProjectFormDeactivate();
    // Displays the newly created project's initial task
    let index = getAllProjectsArray().length - 1;
    addTasksToCurrentProject(index);
    localStorage.setItem('projects', JSON.stringify(getAllProjectsArray()))

   
   // // projectContent.textContent = getProjectTask();
   // localStorage.setItem('titles', JSON.stringify(getProjectTitlesArray()))
   // localStorage.setItem('tasks', JSON.stringify(getProjectTaskContainterArray()))

}

function addnewProjectCancelClicked(){
    newProjectFormDeactivate();
}

// listener that adds a new task to the list if the add new task button is clicked
function addNewTaskButtonClicked(){
    let index = this.getAttribute("data-add-task-id");
    let newTask = document.getElementById("newTask").value;
    getIndividualProject(index).tasksArray.push(newTask);
    console.log(index);
    console.log(getIndividualProject(index) + " fail")
    newTaskFormDeactivate();
    addTasksToCurrentProject(index);
    document.getElementById("newTask").value = "";
}

// listener for bringing up the Add new task form
function createNewTaskClicked(){
    
    let index = this.getAttribute("data-create-new-taskid");
    newTaskFormActivate()
    // creates a button to add the project
    let addnewTaskButton = document.getElementById("addnewTaskButton")
    addnewTaskButton.dataset.addTaskId = index; 
    localStorage.setItem('projects', JSON.stringify(getAllProjectsArray()))

}

// deletes an item from the current to do list
function activeTaskInListClicked(){
    // uses the data-array-id to get the current object's taskArray;
    let array = this.getAttribute("data-array-id")
    // uses the data-task-id to get the current task inside the array
    let index = this.getAttribute("data-task-id")
    let checkMarkedTask = getIndividualProject(array).tasksArray[index];
    removeTask(getIndividualProject(array), checkMarkedTask);
    console.log("task added to finishedTasksArray: " + getIndividualProject(array).finishedTasksArray);

    if (index > -1) {
        getIndividualProject(array).tasksArray.splice(index, 1);}

        addTasksToCurrentProject(array);

        localStorage.setItem('projects', JSON.stringify(getAllProjectsArray()))
}

// reinserts an item from the finished tasks back into active tasks
function inactiveTaskInListClicked(){
    // uses the data-array-id to get the current object's taskArray;
    let array = this.getAttribute("data-finsihed-array-id")
    // uses the data-task-id to get the current task inside the array
    let index = this.getAttribute("data-checkmarked-task-id")
    let checkMarkedTask = getIndividualProject(array).finishedTasksArray[index];
    addTask(getIndividualProject(array), checkMarkedTask);
    // getIndividualProject(array).addTask(checkMarkedTask);
    console.log("task added to TasksArray: " + getIndividualProject(array).finishedTasksArray);

    if (index > -1) {
        getIndividualProject(array).finishedTasksArray.splice(index, 1);}

        addTasksToCurrentProject(array);

}

// listener for the delete task button
function deleteTaskClicked() {
    // uses the data-array-id to get the current object's taskArray;
    let array = this.getAttribute("data-delete-Finsihed-array-id")
    // uses the data-task-id to get the current task inside the array
    let index = this.getAttribute("data-delete-task-id")
    // let checkMarkedTask = getIndividualProject(array).finishedTasksArray[index];
    // getIndividualProject(array).addTask(checkMarkedTask);
    console.log("deleted task: " + getIndividualProject(array).finishedTasksArray);

    if (index > -1) {
        getIndividualProject(array).finishedTasksArray.splice(index, 1);}

        addTasksToCurrentProject(array);

}


//adds each task to the projectContent depending on which To Do is inserted as an argument
function addTasksToCurrentProject(i){
    
    let array = getIndividualProject(i)
    let index = i;
    console.log(array);
    let projectContent = document.getElementById("projectContent");
    //erases tasks that are displayed in the project content
    projectContent.textContent = "";

    // createNewTaskInProject();
    let createNewTask = document.createElement("div");
    createNewTask.id = "createNewTask";
    createNewTask.dataset.createNewTaskid = index;
    createNewTask.textContent = "+ Create new task"
    createNewTask.classList.add("taskContainer");
    createNewTask.addEventListener("click", createNewTaskClicked)
    projectContent.appendChild(createNewTask);
    
    // for each running through the object's taskArray and adding each item to the projectContent's
    // active tasks    
    array.tasksArray.forEach(element => {
        //container for priority, task, and due date
        let activeContainer = document.createElement("div");
        activeContainer.id = element + "-activeContainer"
        activeContainer.classList.add("taskContainer")
        projectContent.insertBefore(activeContainer, createNewTask);

        //creates an un-checkmarked box
        let notCheckedMarkedBox = document.createElement("div");
        notCheckedMarkedBox.className = "far fa-square";
        notCheckedMarkedBox.addEventListener("click", activeTaskInListClicked)
        notCheckedMarkedBox.dataset.taskId = array.tasksArray.indexOf(element);
        notCheckedMarkedBox.dataset.arrayId = index;
        activeContainer.appendChild(notCheckedMarkedBox);
        //creates a div which holds the task that is added
        let taskToAdd = document.createElement("div");
        taskToAdd.id = element;
        // taskToAdd.dataset.taskId = array.tasksArray.indexOf(element);
        // taskToAdd.dataset.arrayId = index;
        taskToAdd.classList.add("taskTextContainer")
        taskToAdd.textContent = element;
        // taskToAdd.addEventListener("click", activeTaskInListClicked)
        activeContainer.appendChild(taskToAdd);

        // //creates a delete button to remove a task permanently
        // let deleteTask = document.createElement("div")
        // deleteTask.className = "fas fa-trash-alt";
        // activeContainer.appendChild(deleteTask);
    
    });

    // similar for each running through the finishedTasks array and creating an object for each task
    // and adding it to the projectContent    
    array.finishedTasksArray.forEach(element => {

        // container for each completed and check marked task
        let inactiveContainer = document.createElement("div");
        inactiveContainer.id = element + "-inactiveContainer"
        inactiveContainer.classList.add("taskContainer")
        projectContent.appendChild(inactiveContainer);

        //creates a checkmarked box
        let checkedMarkedBox = document.createElement("div");
        checkedMarkedBox.className = "far fa-check-square";
        checkedMarkedBox.dataset.checkmarkedTaskId = array.finishedTasksArray.indexOf(element);
        checkedMarkedBox.dataset.finsihedArrayId = index;
        checkedMarkedBox.addEventListener("click", inactiveTaskInListClicked)
        inactiveContainer.appendChild(checkedMarkedBox);
        
        //creates a div which holds the task that is added
        let checkMarkedtaskToAdd = document.createElement("div");
        checkMarkedtaskToAdd.id = element;
        checkMarkedtaskToAdd.classList.add("taskChecked")
        checkMarkedtaskToAdd.classList.add("taskTextContainer")
        checkMarkedtaskToAdd.textContent = element;
        // checkMarkedtaskToAdd.addEventListener("click", inactiveTaskInListClicked)
        inactiveContainer.appendChild(checkMarkedtaskToAdd);

        //creates a delete button to remove a task permanently
        let deleteTask = document.createElement("div")
        deleteTask.className = "fas fa-trash-alt";
        deleteTask.dataset.deleteTaskId = array.finishedTasksArray.indexOf(element);
        deleteTask.dataset.deleteFinsihedArrayId = index;
        deleteTask.addEventListener("click", deleteTaskClicked)
        inactiveContainer.appendChild(deleteTask);    
    });
    localStorage.setItem('projects', JSON.stringify(getAllProjectsArray()))

}



export { addProjectsToSideBar, addTasksToCurrentProject, newProjectFormActivate, newProjectFormDeactivate, newTaskFormActivate,
    newTaskFormDeactivate, addNewTaskButtonClicked, addProjectButtonClicked, addnewProjectCancelClicked }