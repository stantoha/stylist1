window.addEventListener("DOMContentLoaded", () => {
  //SHOW-HIDE CONTENT

  let header = document.querySelector(".header"),
    title = document.querySelector(".header__title"),
    sectionTitles = document.querySelectorAll(".section__title"),
    serviceTitles = document.querySelectorAll(".service__title"),
    subTitle = document.querySelector(".sub__title"),
    navMenu = document.querySelector(".header__nav__menu"),
    navMenuButton = document.getElementById("nav__toggle"),
    navButton = document.querySelector(".nav__btn"),
    tabs = document.querySelectorAll(".header__nav__menu__link"),
    tabsContent = document.querySelectorAll(".section"),
    serviceTabs = document.querySelectorAll(".service__link"),
    servicesTabsContent = document.querySelectorAll(".service"),
    servicesTabParent = document.querySelector(".services__list"),
    contactsServiceTabs = document.querySelectorAll(".contacts__service__link"),
    contactsServicesTabParent = document.querySelector(".contacts__services__list"),
    upButton = document.querySelector(".up__button"),
    modal = document.querySelector(".modal__box"),
    modalTrigger = document.querySelectorAll("[data-modal]"),
    modalClosebtn = document.querySelector("[data-close]");

  function hideServiceTitles() {
    serviceTitles.forEach((item, i) => {
      if (i % 2 == 0 || i === 0) {
        item.classList.add("right__slide");
      } else if (i % 2 !== 0) {
        item.classList.add("left__slide");
      }
    });
  }
  hideServiceTitles();
  function showTitles(item,i){
    if (item[i].classList.contains("right__slide")) {
      setTimeout(() => {
        item[i].classList.remove("right__slide");
      }, 1000);
    } else if (item[i].classList.contains("left__slide")) {
      setTimeout(() => {
        item[i].classList.remove("left__slide");
      }, 1000);
    }
  }

  function showNavMenu() {
    navMenu.classList.remove("header__nav__menu");
    navMenu.classList.add("header__nav__menu__visible");
    navButton.classList.add("nav__btn__transform");
  }

  function hideNavMenu() {
    navMenu.classList.add("header__nav__menu");
    navMenu.classList.remove("header__nav__menu__visible");
    navButton.classList.remove("nav__btn__transform");
  }

  navMenuButton.addEventListener("click", () => {
    if (navButton.classList.contains("nav__btn__transform")) {
      hideNavMenu();
    } else {
      showNavMenu();
    }
  });

  upButton.classList.add("hide");
  closeModal();
  setTimeout(() => {
    title.classList.remove("top__slide");
    subTitle.classList.remove("hide");
    subTitle.classList.add("show", "fade");
  }, 1000);


  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
  }
  

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("active");

    showTitles(sectionTitles,i);
    
  }

  hideTabContent();
  showTabContent();

  function hideServiceTabContent() {
    servicesTabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    serviceTabs.forEach((item) => {
      item.parentElement.classList.remove("active__service");
    });
  }

  function showServiceTabContent(j = 0) {
    servicesTabsContent[j].classList.add("show", "fade");
    servicesTabsContent[j].classList.remove("hide");
    serviceTabs[j].parentElement.classList.add("active__service");
  }

  hideServiceTabContent();

  navMenu.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("header__nav__menu__link")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          window.scrollTo(0, 0);
          hideTabContent();
          showTabContent(i);
          hideServiceTitles();
          contactsServicesTabParent.addEventListener("click", (event) => {
            let target = event.target;
            if (
              target &&
              target.classList.contains("contacts__service__link")
            ) {
              hideTabContent();
              showTabContent(1);
              contactsServiceTabs.forEach((item, j) => {
                if (target == item) {
                  hideServiceTabContent();
                  showServiceTabContent(j);
                  hideServiceTitles();
                  showTitles(serviceTitles,i);
                }
              });
            }
          });

          if (document.documentElement.clientWidth < 900) {
            hideNavMenu();
          }

          if (i === 1) {
            showServiceTabContent(0);
            setTimeout(() => {
              serviceTitles[0].classList.remove("right__slide");
            }, 1000);
            servicesTabParent.addEventListener("click", (event) => {
              let target = event.target;
              if (target && target.classList.contains("service__link")) {
                serviceTabs.forEach((item, j) => {
                  if (target == item) {
                    hideServiceTabContent();
                    showServiceTabContent(j);

                    showTitles(serviceTitles,j);
                  }
                });
              }
            });
          }
        }
      });
    }
  });


  //UPBUTTON

  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      subTitle.classList.remove("show", "fade");
      subTitle.classList.add("hide");
      servicesTabParent.classList.add("to__the__top");
      title.classList.add("top__slide");
      header.classList.add("top__slide");
      upButton.classList.remove("hide");
      upButton.classList.add("show", "fade");
      servicesTabParent.classList.add('header__services__list');
    }
     else {
      subTitle.classList.add("show", "fade");
      subTitle.classList.remove("hide");
      servicesTabParent.classList.remove("to__the__top");
      title.classList.remove("top__slide");
      header.classList.remove("top__slide");
      upButton.classList.add("hide");
      upButton.classList.remove("show", "fade");
      servicesTabParent.classList.remove('header__services__list');
    }
  };

  upButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  

    //MODAL

    function openModal() {
        modal.classList.add('show', 'fade'); 
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.remove('show', 'fade'); 
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalClosebtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 10000);



    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});
