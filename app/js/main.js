
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