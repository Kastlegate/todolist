function createList(){
    
    //dom stuff. needs to go to its own module
    let projectContent = document.getElementById("projectContent");
    let currentProjectTitle = document.getElementById("currentProjectTitle");
    let projectsList = document.getElementById("projectListContainer");

    // an array for each project and another to hold all the projects tasks  
    let projectArray  = new Array();
    let projectTasksArray = new Array();


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
    //default tasks
    let newTask1 = projectListFactory("Mow the Lawn", "Get the lawnmower battery", "High", "Tomorrow")
    let newTask2 = projectListFactory("get this shit done", "party Hardy", "URGENT", "err day")

    //function to be called when a project from the list in the sidebar is clicked
    function sideBarProjectClicked(){
        let index = this.getAttribute("data-id");
        projectContent.textContent = projectArray[index].fullTask;
        currentProjectTitle.textContent = projectArray[index].title;
    }
    
    projectArray = [newTask1, newTask2];

    //adds each Project title to the sidebar
    function addProjectsToSideBar(){
        projectsList.textContent = ""
        projectArray.forEach(element => {
            let projectToBeAddedToList = document.createElement("div");
            projectToBeAddedToList.id = element.title;
            projectToBeAddedToList.dataset.id = projectArray.indexOf(element);
            projectToBeAddedToList.classList.add("sideBarProjectList")
            projectToBeAddedToList.textContent = element.title;
            projectToBeAddedToList.addEventListener("click", sideBarProjectClicked)
            projectsList.appendChild(projectToBeAddedToList);
            console.log(element.title)
        });
    }
    addProjectsToSideBar();

     
    
}

export {createList};