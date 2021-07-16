
const menuList = document.querySelector('.menu-list');
const faBars = document.querySelector('.fa-bars');
const faTimes = document.querySelector('.fa-times');
const menu = document.querySelector('.menu');




menu.addEventListener('click', () => {
    
    
    menuList.classList.toggle('active');
    faBars.classList.toggle('active');
    faTimes.classList.toggle('active');
  

})