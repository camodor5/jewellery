'use strict';

(function () {
// Slider
var swiperContainer = document.querySelector('.swiper');

if (swiperContainer) {
  var swiper = new Swiper('.swiper', {
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
var loginSubmit = document.querySelector('.login__button');
if(loginSubmit) {
  loginSubmit.addEventListener('click', () => {
    var inputPassword= document.querySelector('.login__password');
    localStorage.setItem('password', inputPassword.value);
    var inputEmail= document.querySelector('.login__email');
    localStorage.setItem("email", inputEmail.value);
  })
}

var nav = document.querySelector('.nav');
var header = document.querySelector('.header');
var cart = document.querySelector('.header__cart');
var toggler = document.querySelector('.header__toggle');
var logo = document.querySelector('.header__logo');

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
var questions = document.querySelectorAll('.questions__text');

if (questions) {
  questions.forEach((item) => item.addEventListener('click', () => {
    var parent = item.parentNode;
    var content = parent.querySelector('.questions__answer');
    var trigger = parent.querySelector('.questions__icon');

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

var filters = document.querySelectorAll('.filter__title');

if (filters) {
  filters.forEach((item) => item.addEventListener('click', () => {
    var parent = item.parentNode;
    var content = parent.querySelector('.filter__check-wrapper');
    var trigger = parent.querySelector('.filter__icon');

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

var filterButton = document.querySelector('.catalog__button');
var filterButtonClose = document.querySelector('.filter__close');
var footer = document.querySelector('.footer');
var catalogSlider = document.querySelector('.catalog__slider');
var filterWrapper = document.querySelector('.filterwrapper');
var intro = document.querySelector('.intro');

if(filterButton) {
  filterButton.addEventListener ('click', () => {

    footer.classList.add('footer--popup-opened');
    catalogSlider.classList.add('catalog__slider--popup-opened');
    header.classList.add('header--popup-opened');
    filterWrapper.classList.add('filterwrapper--popup-opened');
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
    if (filterWrapper.classList.contains('filterwrapper--popup-opened')) {
      filterWrapper.classList.remove('filterwrapper--popup-opened');
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

var loginButton = document.querySelector('.nav__login');
var login = document.querySelector('.login');
var main = document.querySelector('.page__main');
var overlay = document.querySelector('.login-overlay');
var loginClose = document.querySelector('.login__close');

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
        if (filterWrapper.classList.contains('filterwrapper--popup-opened')) {
          filterWrapper.classList.remove('filterwrapper--popup-opened');
        }
      }

      if (intro.classList.contains('intro--popup-opened')) {
        intro.classList.remove('intro--popup-opened');
      }
    }
  })
}
})();
