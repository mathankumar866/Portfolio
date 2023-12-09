function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
}

let typingEffect = new Typed(".typedText",{
    strings : ["Web Designer", "Fullstack Developer",/*"Full Stack Developer"*/],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 100,
    backDelay : 2000
})

let htmlheading= document.querySelector(".htmlheading");
let bootstrapheading = document.querySelector(".bootstrapheading");
let javascriptheading = document.querySelector(".javascriptheading");
let figmaheading = document.querySelector(".figmaheading");
let reactheading = document.querySelector(".reactheading");


let htmldiv = document.querySelector(".htmldiv");
let bootstrapdiv = document.querySelector(".bootstrapdiv");
let javascriptdiv = document.querySelector(".javascriptdiv");
let figmadiv = document.querySelector(".figmadiv");
let reactdiv = document.querySelector(".reactdiv");
            
bootstrapdiv.style.display="none";
javascriptdiv.style.display="none";
figmadiv.style.display="none";
reactdiv.style.display="none";
htmlheading.classList.add("active");

htmlheading.addEventListener("click",()=>{
  htmldiv.style.display="flex";
  bootstrapdiv.style.display="none";
  javascriptdiv.style.display="none";
  figmadiv.style.display="none";
  reactdiv.style.display="none";
  
  htmlheading.classList.add("active");
  bootstrapheading.classList.remove("active");
  javascriptheading.classList.remove("active");
  reactheading.classList.remove("active");
  figmaheading.classList.remove("active");
})

bootstrapheading.addEventListener("click",()=>{
  htmldiv.style.display="none";
  bootstrapdiv.style.display="flex";
  javascriptdiv.style.display="none";
  figmadiv.style.display="none";
  reactdiv.style.display="none";
  
  htmlheading.classList.remove("active");
  bootstrapheading.classList.add("active");
  javascriptheading.classList.remove("active");
  reactheading.classList.remove("active");
  figmaheading.classList.remove("active");
})


javascriptheading.addEventListener("click",()=>{
  htmldiv.style.display="none";
  bootstrapdiv.style.display="none";
  javascriptdiv.style.display="flex";
  figmadiv.style.display="none";
  reactdiv.style.display="none";
  
  htmlheading.classList.remove("active");
  bootstrapheading.classList.remove("active");
  javascriptheading.classList.add("active");
  reactheading.classList.remove("active");
  figmaheading.classList.remove("active");
})

reactheading.addEventListener("click",()=>{
  htmldiv.style.display="none";
  bootstrapdiv.style.display="none";
  javascriptdiv.style.display="none";
  figmadiv.style.display="none";
  reactdiv.style.display="flex";
  
  htmlheading.classList.remove("active");
  bootstrapheading.classList.remove("active");
  javascriptheading.classList.remove("active");
  reactheading.classList.add("active");
  figmaheading.classList.remove("active");
})

figmaheading.addEventListener("click",()=>{
  htmldiv.style.display="none";
  bootstrapdiv.style.display="none";
  javascriptdiv.style.display="none";
  figmadiv.style.display="flex";
  reactdiv.style.display="none";
  
  htmlheading.classList.remove("active");
  bootstrapheading.classList.remove("active");
  javascriptheading.classList.remove("active");
  reactheading.classList.remove("active");
  figmaheading.classList.add("active");
})

 
let home= document.querySelector(".homeheading");
let about = document.querySelector(".aboutheading");
let experience = document.querySelector(".experienceheading");
let projects = document.querySelector(".projectsheading");
let contact = document.querySelector(".contactheading");
home.classList.add("active-link");

home.addEventListener("click",()=>{
  home.classList.add("active-link");
  about.classList.remove("active-link");
  experience.classList.remove("active-link");
  projects.classList.remove("active-link");
  contact.classList.remove("active-link");
})
about.addEventListener("click",()=>{
  home.classList.remove("active-link");
  about.classList.add("active-link");
  experience.classList.remove("active-link");
  projects.classList.remove("active-link");
  contact.classList.remove("active-link");
})
experience.addEventListener("click",()=>{
  home.classList.remove("active-link");
  about.classList.remove("active-link");
  experience.classList.add("active-link");
  projects.classList.remove("active-link");
  contact.classList.remove("active-link");
})
projects.addEventListener("click",()=>{
  home.classList.remove("active-link");
  about.classList.remove("active-link");
  experience.classList.remove("active-link");
  projects.classList.add("active-link");
  contact.classList.remove("active-link");
})
contact.addEventListener("click",()=>{
  home.classList.remove("active-link");
  about.classList.remove("active-link");
  experience.classList.remove("active-link");
  projects.classList.remove("active-link");
  contact.classList.add("active-link");
})
