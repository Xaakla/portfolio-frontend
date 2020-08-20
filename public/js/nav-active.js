// const blocks = window.document.querySelectorAll('[data-block]');
const navElements = window.document.querySelectorAll('[data-active]');
const activeClass = 'active';

function navStatus() {
    const windowTop = window.scrollY;
    const blockInicial = window.document.querySelector('#inicial');
    const blockProjects = window.document.querySelector('#projects');
    const blockSkills = window.document.querySelector('#skills');
    const blockContactme = window.document.querySelector('#contactme');
    const about = window.document.querySelector('#about');

    if(windowTop >= blockInicial.scrollTop && windowTop < blockProjects.offsetTop + (window.innerHeight * -1) / 4) {
        navElements[0].classList.add(activeClass);
        navElements[1].classList.remove(activeClass);
        navElements[2].classList.remove(activeClass);
        navElements[3].classList.remove(activeClass);
    } else if(windowTop >= blockProjects.scrollTop && windowTop < blockSkills.offsetTop + (window.innerHeight * -1) / 4) {
        navElements[0].classList.remove(activeClass);
        navElements[1].classList.add(activeClass);
        navElements[2].classList.remove(activeClass);
        navElements[3].classList.remove(activeClass);
    } else if(windowTop >= blockSkills.scrollTop && windowTop < blockContactme.offsetTop + (window.innerHeight * -1) / 4) {
        navElements[0].classList.remove(activeClass);
        navElements[1].classList.remove(activeClass);
        navElements[2].classList.add(activeClass);
        navElements[3].classList.remove(activeClass);        
    } else if(windowTop >= blockContactme.scrollTop && windowTop < about.offsetTop + (window.innerHeight * -1) / 4) {
        navElements[0].classList.remove(activeClass);
        navElements[1].classList.remove(activeClass);
        navElements[2].classList.remove(activeClass);
        navElements[3].classList.add(activeClass);
    } else {
        navElements[0].classList.remove(activeClass);
        navElements[1].classList.remove(activeClass);
        navElements[2].classList.remove(activeClass);
        navElements[3].classList.remove(activeClass);
    }
}

window.addEventListener('scroll', () => navStatus());
