import './style.css';
// import { homeTabClicked } from './home';



// creates the header
let header = document.createElement("header");
    header.id = "header";
let content = document.getElementById("content");
document.body.insertBefore(header, content);
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






    