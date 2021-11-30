'use strict';

(function () {
// Slider
const swiperContainer = document.querySelector('.swiper');

if (swiperContainer) {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    slidesPerGroup: 2,
    slidesPerView: 2,

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },
        },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
    },

    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

  });
}


//menu
const loginSubmit = document.querySelector('.login__button');
if(loginSubmit) {
  loginSubmit.addEventListener('click', () => {
    const inputPassword= document.querySelector('.login__password');
    localStorage.setItem('password', inputPassword.value);
    const inputEmail= document.querySelector('.login__email');
    localStorage.setItem("email", inputEmail.value);
  })
}

const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const cart = document.querySelector('.header__cart');
const toggler = document.querySelector('.header__toggle');
const logo = document.querySelector('.header__logo');

if( document.documentElement.clientWidth < 1024 ) {
  nav.classList.add('nav--menu-disabled');
  toggler.classList.add('header__toggle--menu-disabled');
  cart.classList.add('header__cart--menu-disabled');
  header.classList.add('header--menu-disabled');
  logo.classList.add('header__logo--menu-disabled')
}

toggler.addEventListener('click', () => {
  if (nav.classList.contains('nav--menu-disabled')) {
    nav.classList.remove('nav--menu-disabled');
  } else {
    nav.classList.add('nav--menu-disabled');
  }
  if (toggler.classList.contains('header__toggle--menu-disabled')) {
    toggler.classList.remove('header__toggle--menu-disabled');
  } else {
    toggler.classList.add('header__toggle--menu-disabled');
  }
  if (cart.classList.contains('header__cart--menu-disabled')) {
    cart.classList.remove('header__cart--menu-disabled');
  } else {
    cart.classList.add('header__cart--menu-disabled');
  }
  if (logo.classList.contains('header__logo--menu-disabled')) {
    logo.classList.remove('header__logo--menu-disabled');
  } else {
    logo.classList.add('header__logo--menu-disabled');
  }
  if (header.classList.contains('header--menu-disabled')) {
    header.classList.remove('header--menu-disabled');
  } else {
    header.classList.add('header--menu-disabled');
  }
})

// questions
const questions = document.querySelectorAll('.questions__text');

if (questions) {
  questions.forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentNode;
    const content = parent.querySelector('.questions__answer');
    const trigger = parent.querySelector('.questions__icon');

    if (trigger.classList.contains('questions__icon--closed')) {
      trigger.classList.remove('questions__icon--closed');
      content.classList.remove('questions__answer--closed');
      trigger.classList.add('questions__icon--opened');
      content.classList.add('questions__answer--opened');
    } else {
      trigger.classList.add('questions__icon--closed');
      content.classList.add('questions__answer--closed');
      trigger.classList.remove('questions__icon--opened');
      content.classList.remove('questions__answer--opened');
    }

  }));
}

//filters

const filters = document.querySelectorAll('.filter__title');

if (filters) {
  filters.forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentNode;
    const content = parent.querySelector('.filter__check-wrapper');
    const trigger = parent.querySelector('.filter__icon');

    if (trigger.classList.contains('filter__icon--closed')) {
      trigger.classList.remove('filter__icon--closed');
      content.classList.remove('filter__check-wrapper--closed');
      trigger.classList.add('filter__icon--opened');
      content.classList.add('.filter__check-wrapper--opened');
    } else {
      trigger.classList.add('filter__icon--closed');
      content.classList.add('filter__check-wrapper--closed');
      trigger.classList.remove('filter__icon--opened');
      content.classList.remove('filter__check-wrapper--opened');
    }

  }));

}

//popup filter

const filterButton = document.querySelector('.catalog__button');
const filterButtonClose = document.querySelector('.filter__close');
const footer = document.querySelector('.footer');
const catalogSlider = document.querySelector('.catalog__slider');
const filterWrapper = document.querySelector('.filter-wrapper');
const intro = document.querySelector('.intro');

if(filterButton) {
  filterButton.addEventListener ('click', () => {

    footer.classList.add('footer--popup-opened');
    catalogSlider.classList.add('catalog__slider--popup-opened');
    header.classList.add('header--popup-opened');
    filterWrapper.classList.add('filter-wrapper--popup-opened');
    intro.classList.add('intro--popup-opened');
    filterButton.classList.add('filter__button--disabled')

  })
}

if (filterButtonClose) {
  filterButtonClose.addEventListener ('click', () => {


    if (footer.classList.contains('footer--popup-opened')) {
      footer.classList.remove('footer--popup-opened');
    }
    if (catalogSlider.classList.contains('catalog__slider--popup-opened')) {
      catalogSlider.classList.remove('catalog__slider--popup-opened');
    }
    if (header.classList.contains('header--popup-opened')) {
      header.classList.remove('header--popup-opened');
    }
    if (filterWrapper.classList.contains('filter-wrapper--popup-opened')) {
      filterWrapper.classList.remove('filter-wrapper--popup-opened');
    }
    if (intro.classList.contains('intro--popup-opened')) {
      intro.classList.remove('intro--popup-opened');
    }
    if (filterButton.classList.contains('filter__button--disabled')) {
      filterButton.classList.remove('filter__button--disabled')
    }
  })
}

//popup login

const loginButton = document.querySelector('.nav__login');
const login = document.querySelector('.login');
const main = document.querySelector('.page__main');
const overlay = document.querySelector('.login-overlay');
const loginClose = document.querySelector('.login__close');

if (loginButton) {
  loginButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    header.classList.add('header--popup-opened');
    footer.classList.add('footer--popup-opened');
    main.classList.add('page__main--popup-opened');
    overlay.classList.add('login-overlay--popup-opened');
    login.classList.add('login--popup-opened');
    login.classList.remove('login--js');
    var closeTriggers = [loginClose, overlay];
    closeTriggers.forEach((item) => {
      item.addEventListener('click', () => {
        header.classList.remove('header--popup-opened');
        footer.classList.remove('footer--popup-opened');
        main.classList.remove('page__main--popup-opened');
        overlay.classList.remove('login-overlay--popup-opened');
        login.classList.remove('login--popup-opened');
        login.classList.add('login--js');
      })
    })
    document.addEventListener('keydown', (evt) => {
      if (evt.key==='Escape') {
        header.classList.remove('header--popup-opened');
        footer.classList.remove('footer--popup-opened');
        main.classList.remove('page__main--popup-opened');
        overlay.classList.remove('login-overlay--popup-opened');
        login.classList.remove('login--popup-opened');
        login.classList.add('login--js');
      }
    })
  });

  window.addEventListener('resize', (event) => {
    if( document.documentElement.clientWidth < 1024 ) {
      nav.classList.add('nav--menu-disabled');
      toggler.classList.add('header__toggle--menu-disabled');
      cart.classList.add('header__cart--menu-disabled');
      header.classList.add('header--menu-disabled');
      logo.classList.add('header__logo--menu-disabled')
    } else {
      if (nav.classList.contains('nav--menu-disabled')) {
        nav.classList.remove('nav--menu-disabled');
      }

      if (toggler.classList.contains('header__toggle--menu-disabled')) {
        toggler.classList.remove('header__toggle--menu-disabled');
      }
      if (cart.classList.contains('header__cart--menu-disabled')) {
        cart.classList.remove('header__cart--menu-disabled');
      }
      if (logo.classList.contains('header__logo--menu-disabled')) {
        logo.classList.remove('header__logo--menu-disabled');
      }

      if (footer.classList.contains('footer--popup-opened')) {
        footer.classList.remove('footer--popup-opened');
      }
      if(catalogSlider) {
        if (catalogSlider.classList.contains('catalog__slider--popup-opened')) {
          catalogSlider.classList.remove('catalog__slider--popup-opened');
        }
      }

      if (header.classList.contains('header--popup-opened')) {
        header.classList.remove('header--popup-opened');
      }

      if(filterWrapper) {
        if (filterWrapper.classList.contains('filter-wrapper--popup-opened')) {
          filterWrapper.classList.remove('filter-wrapper--popup-opened');
        }
      }

      if (intro.classList.contains('intro--popup-opened')) {
        intro.classList.remove('intro--popup-opened');
      }
    }
  })
}
})();
