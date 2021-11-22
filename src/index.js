import './style.css';
// import { homeTabClicked } from './home';



// creates the header
let header = document.createElement("header");
    header.id = "header";
document.body.appendChild(header);
//container for the logo text and boxes
let logoContainer = document.createElement("div");
    logoContainer.id = "logoContainter";
    header.appendChild(logoContainer);

// creates the logo for the site
let logo = document.createElement("div");
    logo.id = "logo";
    logo.textContent = "To Do Lists";
    logoContainer.appendChild(logo);

    //container for the logo boxes
let logoBoxContainer = document.createElement("div")
    logoBoxContainer.id = "logoBoxContainer";
    logoContainer.appendChild(logoBoxContainer)    
// little boxes for the logo
let logoBoxOne = document.createElement("div");
    logoBoxOne.id = "logoBoxOne";
    logoBoxOne.classList.add("logoBox");
    logoBoxContainer.appendChild(logoBoxOne);
let logoBoxTwo = document.createElement("div");
    logoBoxTwo.id = "logoBoxTwo";
    logoBoxTwo.classList.add("logoBox");
    logoBoxContainer.appendChild(logoBoxTwo);
let logoBoxThree = document.createElement("div");
    logoBoxThree.id = "logoBoxThree";
    logoBoxThree.classList.add("logoBox");
    logoBoxContainer.appendChild(logoBoxThree);
// the main content of the page. A div that holds the navigation sidebar and the current project display
let mainContent = document.createElement("div");
    mainContent.id = "mainContent";
    document.body.appendChild(mainContent);
// navigation sidebar
let sideBar = document.createElement("div");
    sideBar.id = "sideBar";
    sideBar.textContent = "Projects will go here."
    mainContent.appendChild(sideBar);
// current project display
let projectDisplay = document.createElement("div");
    projectDisplay.id = "projectDisplay";
    projectDisplay.textContent = "Current Project Name."
    mainContent.appendChild(projectDisplay);
// content for the current project
let projectContent = document.createElement("div");
    projectContent.id = "projectContent";
    projectContent.textContent = "Content for the current project goes in here."
    projectDisplay.appendChild(projectContent);








    