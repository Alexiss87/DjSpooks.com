var navBar = document.getElementById('side-menu');
var main = document.getElementById('main');
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelectorAll('.side-nav');
//Set initial state of the menu
let showMenu = false;

//add event listoner to menu button
menuBtn.addEventListener('click', toggleMenu);

 /// loop all nav links and add event listoner to close nav menu
navItems.forEach(item => item.addEventListener('click', closeNavBar));

function toggleMenu() {
    //console.log(showMenu);
    if (!showMenu) {
      menuBtn.classList.add('close');
      openNavBar();      
    } else {
      menuBtn.classList.remove('close');
      closeNavBar();      
    }
  }

function openNavBar() {
    navBar.style.width = '250px';
    //set menu state
    showMenu = true;
    //uncomment to move main content to th right
   // main.style.marginLeft = '250px';
  }

function closeNavBar() {   
    navBar.style.width = '0';   
    menuBtn.classList.remove('close');
    //set menu state
    showMenu = false;
    //uncomment to move main content back to the left
    // main.style.marginLeft = '0';
  }  

  