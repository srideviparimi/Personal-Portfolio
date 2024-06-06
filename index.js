//nav bar is visible only if the user scrolls upward and will not show it on downward scroll
let prevScrollPosition=window.pageYOffset;
window.addEventListener("scroll",function(){
    const currentScrollPosition=window.pageYOffset;
    if(prevScrollPosition>currentScrollPosition){
        this.document.querySelector('.navbar').classList.add("show");//user scrolled up
    }
    else{
        this.document.querySelector('.navbar').classList.remove("show");//user scrolled down
    }
    prevScrollPosition=currentScrollPosition;
});
//this is the alternative skills and experience tabs
function opentab(tabname){

    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    for( var tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//------------------
//onclick event listeners for each demo

const rebelDemo=()=>{
    window.open("https://srideviparimi.github.io/Rebel/","_blank");
}
const calculatorDemo=()=>{
    window.open("https://srideviparimi.github.io/Calculator/","_blank");
}
const newsAppDemo=()=>{
    window.open("https://news-fetching-application.netlify.app/","_blank");
}
//responsive web design
function toggleMenu(){
    const hamburger=document.getElementById("hamburger-icon");
    const closeIcon=document.getElementById("close-icon");
    const menuLinks=document.getElementById("menu-links");
    hamburger.classList.toggle("open");
    menuLinks.classList.toggle("open");
    closeIcon.classList.toggle("open");
    if (menuLinks.className.includes("open")){
        hamburger.style.display="none";
        closeIcon.style.display="block";
    }
    else{
        hamburger.style.display="block";
        closeIcon.style.display="none";
    }
}
//event listener for the form successful submit
const formElement=document.getElementById("contactform");
formElement.addEventListener("submit",resettingForm());
function resettingForm(e){
   
    formElement.reset();
    e.preventDefault();
}