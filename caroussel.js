var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 3000, // Défilement automatique toutes les 2 secondes
      disableOnInteraction: false, // Ne pas désactiver l'autoplay lorsque l'utilisateur interagit
    },
  });
  
  swiper.slideTo(1, false, false);
  

  // Fonction pour arrêter l'autoplay lorsque l'utilisateur clique sur un élément du carrousel
function stopAutoplayOnClick() {
    // Écouter les événements de clic sur les éléments du carrousel
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.addEventListener('click', () => {
        swiper.autoplay.stop(); // Arrêter l'autoplay
      });
    });
  }
  
  // Appeler la fonction après l'initialisation du Swiper
  stopAutoplayOnClick();
  
  // Assurer que le carrousel commence à l'index 1
  swiper.slideTo(1, false, false);