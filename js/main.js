'use strict';
//SECTION Carousel init
$('.carousel').slick({
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 2500,
  dots: true,
  speed: 600,
  // easing: easeout,
  // lazyLoad: progressive,
  slidesToShow: 1,
  slidesToScroll: 1,
  //   adaptiveHeight: true,
});

//SECTION Navigation
/* Navigation */
const navMob = document.getElementById('navigation-mobile');
const navigation = document.getElementById('navigation');
const navItems = document.getElementsByClassName('navigation-list-item');
const main = document.getElementById('site-content');

function disable() {
  navigation.style.transform = 'translateX(100%)';
  navigation.style.opacity = 0;
  document.getElementById('main').style.filter = 'blur(0)';
  enableScroll();
}

function toggle() {
  if (navMob.classList.contains('navigation-mobile-open')) {
    navigation.style.transform = 'translateX(0)';
    navigation.style.opacity = 1;
    main.style.filter = 'blur(10px)';
    main.addEventListener('click', () => {
      navMob.classList.remove('navigation-mobile-open');
      disable();
    });

    disableScroll();
  } else {
    disable();
  }
}

navMob.addEventListener('click', () => {
  navMob.classList.toggle('navigation-mobile-open');
  toggle();
});

Object.keys(navItems).forEach(key => {
  navItems[key].addEventListener('click', () => {
    if (navMob.classList.contains('navigation-mobile-open')) {
      navMob.classList.remove('navigation-mobile-open');
      toggle();
    }
  });
});

//SECTION Disable Scrolling

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
