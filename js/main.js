const orangeMenu = document.querySelector('.orange-menu');

orangeMenu.addEventListener('click', ()=>{
    const menu = document.querySelector('.menu');
    if(menu.classList.contains('menu-active')){
        menu.classList.remove('menu-active');
        menu.classList.add('menu-desactive');
    }else{
        menu.classList.add('menu-active');
        menu.classList.remove('menu-desactive');
    }
})