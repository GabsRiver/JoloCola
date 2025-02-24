const swiper = new Swiper('.swiper', {
    // Optional parameters    
    loop: true,    
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

      // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1088: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });