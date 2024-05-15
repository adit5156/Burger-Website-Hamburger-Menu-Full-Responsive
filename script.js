const parentContainer = document.querySelector('.container');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');
const goToTop = document.querySelector('.go-to-top').firstChild;
const navBar = document.querySelector('nav');


hamburgerMenu.addEventListener('click', (e)=> {
    e.stopPropagation();
    headerContent.classList.add('menu-open');
});

closeIcon.addEventListener('click', (e)=> {
    headerContent.classList.remove('menu-open');
});

goToTop.addEventListener('click', (e)=> {
    parentContainer.scrollTo(0,0);
});

window.addEventListener('click', (e)=> {
    headerContent.classList.remove('menu-open');
});

navBar.addEventListener('click', (e)=> {
    e.stopPropagation();
});