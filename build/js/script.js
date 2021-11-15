'use strict';
/*var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});*/

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


const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const cart = document.querySelector('.header__cart');
const toggler = document.querySelector('.header__toggle');
const logo = document.querySelector('.header__logo');

console.log(document.documentElement.clientWidth);

if( document.documentElement.clientWidth < 1024 ) {
  nav.classList.add('nav--menu-disabled');
  toggler.classList.add('header__toggle--menu-disabled');
  cart.classList.add('header__cart--menu-disabled');
  header.classList.add('header--menu-disabled');
  logo.classList.add('header__logo--menu-disabled')
}

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
  }
})

toggler.addEventListener('click', () => {
  if (nav.classList.contains('nav--menu-disabled')) {
    nav.classList.remove('nav--menu-disabled');
  } else {
    nav.classList.add('nav--menu-disabled');
  };
  if (toggler.classList.contains('header__toggle--menu-disabled')) {
    toggler.classList.remove('header__toggle--menu-disabled');
  } else {
    toggler.classList.add('header__toggle--menu-disabled');
  };
  if (cart.classList.contains('header__cart--menu-disabled')) {
    cart.classList.remove('header__cart--menu-disabled');
  } else {
    cart.classList.add('header__cart--menu-disabled');
  };
  if (logo.classList.contains('header__logo--menu-disabled')) {
    logo.classList.remove('header__logo--menu-disabled');
  } else {
    logo.classList.add('header__logo--menu-disabled');
  };
  if (header.classList.contains('header--menu-disabled')) {
    header.classList.remove('header--menu-disabled');
  } else {
    header.classList.add('header--menu-disabled');
  };
})
