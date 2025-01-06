


/*typing animation*/

var typed =new Typed(".typing",{
    strings:["Web Designer"," Front-End Web Developer","Problem Solver"],
    typeSpeed:100,
    backSpeed:60,
    loop:true


})

/*aside*/
const nav  = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
    this.classList.add("active")
    if(window.innerWidth<1200){
        asideSectionTogglerBtn();
    }

    })
    


}
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");   
    }
}







const boxes = document.querySelectorAll('.service .service-item ,.about .about-content .timeline ,.portfolio .container,.skills,.aside .nav,.home .home-info')

    // Function to check if the box is in the viewport
    const checkVisibility = () => {
      const windowHeight = window.innerHeight;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight - 100) {
          box.classList.add('visible'); // Add 'visible' class
        }
      });
    };
    window.addEventListener('scroll', checkVisibility);

    // Run the function on page load (in case boxes are already in view)
    checkVisibility();


    





