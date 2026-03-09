/* ====================== HERO SLIDER ====================== */
// Seleciona todos os slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // índice do slide atual

// Função para mostrar slide
function showSlide(index){
    slides.forEach((slide, i)=>{
        slide.classList.remove('active'); // remove active de todos
        if(i===index) slide.classList.add('active'); // adiciona active ao slide atual
    });
}

// Troca de slide automático a cada 5 segundos
setInterval(()=>{
    currentSlide = (currentSlide + 1) % slides.length; // loop infinito
    showSlide(currentSlide);
},5000);

/* ====================== ANIMAÇÃO DE CARDS ====================== */
// Observer para detectar cards na tela
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible'); // adiciona classe visível
        }
    });
},{ threshold: 0.2 }); // 20% do card visível ativa a animação

// Seleciona todos os cards
const cards = document.querySelectorAll('.hist-card, .prod-card, .equipe-card, .diff-card, .depo-card');

// Observa cada card
cards.forEach(card=>observer.observe(card));
