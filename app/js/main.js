
const swiper = new Swiper('.swiper-container', {
  preloadImages: false,
  // Enable lazy loading
  lazy: {
    loadPrevNext: true,
  },
  autoplay: {
   delay: 4000,
  },
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const menuButton = document.querySelector('.navbar__button');
const navbar = document.querySelector('.navbar__list');
menuButton.addEventListener('click', function() {
  navbar.classList.add('navbar__list--visible');  
});


menuButton.addEventListener('click', function(e) {
    e.stopPropagation();
    
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == navbar || navbar.contains(target);
    const its_menuButton = target == menuButton;
    const menu_is_active = navbar.classList.contains('navbar__list--visible');
    
    if (!its_menu && !its_menuButton && menu_is_active) {
      navbar.classList.remove('navbar__list--visible'); 
    }
  });
document.addEventListener('scroll', function() {
   navbar.classList.remove('navbar__list--visible'); 
});