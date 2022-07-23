window.addEventListener('DOMContentLoaded', () => {
    //SHOW-HIDE CONTENT

    let 
        header = document.querySelector('.header'),
        title=document.querySelector('.header__title'),
        navMenu = document.querySelector('.header__nav__menu'),
        navMenuButton = document.getElementById('nav__toggle'),
        navButton=document.querySelector('.nav__btn'),
        tabs = document.querySelectorAll('.header__nav__menu__link'),
        tabsContent=document.querySelectorAll('.section'),
        serviceTabs = document.querySelectorAll('.service__button'),
        servicesTabsContent = document.querySelectorAll('.service'),
        servicesTabParent = document.querySelector('.services__list'),
        upButton = document.querySelector('.up__button'),
        sectionTitles = document.querySelectorAll('.section__title'),
        serviceTitles = document.querySelectorAll('.service__title'),
        subTitle = document.querySelector('.sub__title');


        console.log(tabs);

console.log(tabsContent);



        function showNavMenu(){
            navMenu.classList.remove('header__nav__menu');
            navMenu.classList.add('header__nav__menu__visible');
                navButton.classList.add('nav__btn__transform');
            
    }

    function hideNavMenu(){
        navMenu.classList.add('header__nav__menu');
        navMenu.classList.remove('header__nav__menu__visible'); 
        navButton.classList.remove('nav__btn__transform');
    }

    navMenuButton.addEventListener('click',()=>{
        if(navButton.classList.contains('nav__btn__transform')){
            hideNavMenu();
        }
        else{
            showNavMenu();
        }
    });


    
    /* upButton.classList.add('hide'); */

    setTimeout(() => {
        title.classList.remove('top__slide');
        subTitle.classList.remove('hide');
        subTitle.classList.add('show', 'fade'); 
    }, 1000);




    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('active');

         if (sectionTitles[i].classList.contains('right__slide')) {
            setTimeout(() => {
                sectionTitles[i].classList.remove('right__slide');
            }, 1000);
        } else if (sectionTitles[i].classList.contains('left__slide')) {
            setTimeout(() => {
                sectionTitles[i].classList.remove('left__slide');
            }, 1000);
        } 
    }

    hideTabContent();
    showTabContent();

     function hideServiceTabContent() {
        servicesTabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        
        serviceTabs.forEach(item => {
            item.parentElement.classList.remove('active__service');
        });
    }

    function showServiceTabContent(j = 0) {
        servicesTabsContent[j].classList.add('show', 'fade');
        servicesTabsContent[j].classList.remove('hide');
        serviceTabs[j].parentElement.classList.add('active__service');
    }

    hideServiceTabContent(); 

    navMenu.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('header__nav__menu__link')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    window.scrollTo(0, 0);
                    hideTabContent();
                    showTabContent(i);
                    if(document.documentElement.clientWidth< 900){
                        hideNavMenu();
                    }
                    
                     if (i == 1) {
                        setTimeout(() => {
                            serviceTitles[0].classList.remove('right__slide');
                        }, 1000);
                        showServiceTabContent();
                     
                        servicesTabParent.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target && target.classList.contains('service__button')) {
                                
                                serviceTabs.forEach((item, j) => {
                                    if (target == item) {
                                        hideServiceTabContent();
                                        showServiceTabContent(j);

                                        /* serviceTitles.forEach(item => {
                                            if (serviceTitles[j].classList.contains('right__slide')) {
                                                setTimeout(() => {
                                                    serviceTitles[j].classList.remove('right__slide');
                                                }, 1000);
                                            } else if (serviceTitles[j].classList.contains('left__slide')) {
                                                setTimeout(() => {
                                                    serviceTitles[j].classList.remove('left__slide');
                                                }, 1000);
                                            }
                                        }); */

                                    }
                                });
                            }
                        });
                    } 
                }
            });
        }
    });





});