
    
    //dom stuff. needs to go to its own module
var projectContent = document.getElementById("projectContent");
var currentProjectTitle = document.getElementById("currentProjectTitle");
var projectsList = document.getElementById("projectListContainer");

    // an array for each project and another to hold all the projects tasks  
    let projectArray  = new Array();
    


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

    // the functions and array to get the project title, tasks, priority and due date
    function getProjectTitle(title){
        title = title

        return title;
    }

    let projectTasks = new Array(); // needs to be inside below function?

    function createNewTask(){
        let projectTasksArray = new Array();
    } 

    function getProjectPriority(priority){
        priority = priority

        return priority;
    }

    function getProjectDueDate(){

    }

    function newProjectForm(){
        console.log("Hi there!")
    }


    //default tasks
    let newTask1 = projectListFactory(getProjectTitle("Mow the Lawn"), "Get the lawnmower battery", "High", "Tomorrow")
    let newTask2 = projectListFactory("get this shit done", "party Hardy", "URGENT", "err day")

    //function to be called when a project from the list in the sidebar is clicked
function sideBarProjectClicked(){
        
        let index = this.getAttribute("data-sideBarid");
        projectContent.textContent = projectArray[index].fullTask;
        currentProjectTitle.textContent = projectArray[index].title; // <--- WILL HAVE TO BE ITS OWN OBECT
    }
    
    

    //makes 2 default projects
    projectArray = [newTask1, newTask2];

    //adds each Project title to the sidebar, MAY NEED TO GO TO THE DOM MANIPULATION MODULE
    function addProjectsToSideBar(){
        let projectsList = document.getElementById("projectListContainer");
        projectsList.textContent = "";
        projectArray.forEach(element => {
            let projectToBeAddedToList = document.createElement("div");
            projectToBeAddedToList.id = element.title;
            projectToBeAddedToList.dataset.sidebarid = projectArray.indexOf(element);
            projectToBeAddedToList.classList.add("sideBarProjectList")
            projectToBeAddedToList.textContent = element.title;
            projectToBeAddedToList.addEventListener("click", sideBarProjectClicked)
            projectsList.appendChild(projectToBeAddedToList);
        });
    }
    //  addProjectsToSideBar();




export { newProjectForm, addProjectsToSideBar, sideBarProjectClicked };