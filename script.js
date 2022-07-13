window.addEventListener('DOMContentLoaded', () => {
    //SHOW-HIDE CONTENT

    let 
        header = document.querySelector('.header'),
        tabParent = document.querySelector('.header__nav__menu'),
        navMenuButton = document.getElementById('nav__toggle'),
        navButton=document.querySelector('.nav__btn');

    function showNavMenu(){
            tabParent.classList.remove('header__nav__menu__hidden');
            tabParent.classList.add('header__nav__menu__visible'); 
                navButton.classList.add('nav__btn__transform');
            
    }

    function hideNavMenu(){
        tabParent.classList.add('header__nav__menu__hidden');
        tabParent.classList.remove('header__nav__menu__visible'); 
        navButton.classList.remove('nav__btn__transform');
    }

    if(document.documentElement.clientWidth<991.98){
        navButton.classList.remove('hide');
        navButton.classList.add('show','fade');
        tabParent.classList.remove('header__nav__menu');
        tabParent.classList.add('header__nav__menu__hidden');
        if(!navMenuButton.classList.contains('nav__btn__transform')){
            tabParent.classList.add('header__nav__menu__hidden');
        }
        else{
            tabParent.classList.add('header__nav__menu__visible');
            tabParent.classList.remove('header__nav__menu__hidden');
        }
            }
            else{
                navButton.classList.add('hide');
                navButton.classList.remove('show','fade');
                tabParent.classList.remove('header__nav__menu__visible');
            tabParent.classList.remove('header__nav__menu__hidden');
            tabParent.classList.add('header__nav__menu');
            }

    navMenuButton.addEventListener('click',()=>{
        if(navMenuButton.checked){
            showNavMenu();
        }
       else {
                hideNavMenu();
            }
    });
        
   

       



});