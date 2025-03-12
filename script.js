//-----------------------------Swipe testimonials-----------------------------------------------------

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

//---------------Inicio-------------------------------------------------------------------

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

// Seleciona apenas o PRIMEIRO elemento com a classe 'hidden'
const element = document.querySelector('.hidden');

// Observa apenas esse elemento
if (element) {
  myObserver.observe(element);
}

// Seleciona todos os elementos com a classe .card-scroll
const cards = document.querySelectorAll('.card-scroll');

//-------------------------My Cards---------------------------------------------------------

const myCardsScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-show');
    } else {
      entry.target.classList.remove('card-show');
    }
  });
});

// Observa cada elemento
cards.forEach((card) => {
  myCardsScroll.observe(card);
});

//----------------------------------------------------------------------------------
// Começando a usar scrol reveal

window.revelar = ScrollReveal({ reset: true });

//titulos e sub titles
revelar.reveal('.txt-prin',
  {
    duration: 2000,
    distance: '80px',
  })

revelar.reveal('.sub-txt',
  {
    duration: 2000,
    distance: '80px',
    delay: 500,
  })

//cards 
revelar.reveal('.card-choose',
  {
    duration: 2000,
    distance: '100px',
    delay: 500,
    origin: 'left'
  })

revelar.reveal('.card-choosee',
  {
    duration: 2000,
    distance: '100px',
    delay: 900,
    origin: 'right',
  })

//our services
revelar.reveal('#card-services-1',
  {
    duration: 1000,
    distance: '100px',
    delay: 500,
  })

revelar.reveal('#card-services-2',
  {
    duration: 1500,
    distance: '100px',
    delay: 700,
  })

revelar.reveal('#card-services-3',
  {
    duration: 1500,
    distance: '100px',
    delay: 900,
  })

revelar.reveal('#card-services-4',
  {
    duration: 1500,
    distance: '100px',
    delay: 1100,
  })

revelar.reveal('#card-services-5',
  {
    duration: 1500,
    distance: '100px',
    delay: 1300,
  })

revelar.reveal('#card-services-6',
  {
    duration: 1500,
    distance: '100px',
    delay: 1500,
  })

//photos
revelar.reveal('.photos',
  {
    duration: 1500,
    distance: '100px',
    delay: 500,
    rotate: {
      x: 20,
      z: 20
    }
  })

//cat
revelar.reveal('.cat1',
  {
    duration: 1500,
    distance: '100px',
    delay: 500,
    origin: 'left',
  })

revelar.reveal('.cat2',
  {
    duration: 1600,
    distance: '100px',
    delay: 800,
    origin: 'left',
  })

revelar.reveal('.cat3',
  {
    duration: 1700,
    distance: '100px',
    delay: 1100,
    origin: 'left',
  })

revelar.reveal('.cat4',
  {
    duration: 1800,
    distance: '100px',
    delay: 1400,
    origin: 'left',
  })

//team
revelar.reveal('.team-prop',
  {
    duration: 1000,
    distance: '100px',
    delay: 500,
    scale: 1,
    opacity: 0
  })

//testimonials
revelar.reveal('.coment',
  {
    duration: 1000,
    distance: '100px',
    delay: 500,
    opacity: 0.2,
  })

  // --------------- hamburger ---------------------------------------------
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector(".nav-bar-menu");

  hamburger.addEventListener("click", () => nav.classList.toggle("active"));