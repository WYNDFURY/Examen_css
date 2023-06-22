const menuBurgerIcon = document.getElementById('menu-burger-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');
const menuList = document.getElementById('menu-list');

menuBurgerIcon.addEventListener('click', function(){
    menuList.classList.toggle('hidden');
    this.classList.toggle('hidden');
    menuCloseIcon.classList.toggle('hidden');
});

menuCloseIcon.addEventListener('click', function(){
    menuList.classList.toggle('hidden');
    this.classList.toggle('hidden');
    menuBurgerIcon.classList.toggle('hidden');
});