function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }




  // Fonction pour gérer la classe active
function setActiveLink(event) {
  // Sélectionner tous les liens de la navbar
  const links = document.querySelectorAll('nav a');

  // Retirer la classe active de tous les liens
  links.forEach(link => link.classList.remove('active'));

  // Ajouter la classe active au lien cliqué
  event.target.classList.add('active');
}

// Ajouter un écouteur d'événement à chaque lien
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', setActiveLink);
});


// contact page FAQS

const faqs = document.querySelectorAll(".faqs");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})


//Scroll bar
window.addEventListener('scroll', function(){
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / (fullHeight - windowHeight)) * 100;

  const progressIndicator = document.getElementById('scroll-indicator').querySelector('.progress')
  progressIndicator.style.width = progress + '%';
})
//fin scroll bar


//removing loader
window.addEventListener("load", () =>{
  const loader = document.querySelector(".loader_content");
  loader.classList.add("loader_content-hidden");

  loader.addEventListener("transitionend", () =>{
      document.body.removeChild("loader_content");
  })
})