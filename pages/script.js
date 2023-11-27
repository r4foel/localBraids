document.addEventListener('DOMContentLoaded', () => {
  new TypeIt (".animated", {
      speed: 100,
     
      loop: true
  }).type ('ENCONTRE TRANCISTAS EM POUCOS CLIQUES', {delay: 500}).delete (37).type ('EXPONHA O SEU TRABALHO E CONQUISTE CLIENTES', {delay: 500}).delete (43).type ('TENHA SEGURANÇA NO PAGAMENTO', {delay:500})
   
  .go ()
})


const btnMobile = document.getElementById('btn-responsivo'),
  navMenu = document.querySelectorAll('.nav-menu');

function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
navMenu.forEach(n => n.addEventListener('click', toggleMenu));



const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
});


 