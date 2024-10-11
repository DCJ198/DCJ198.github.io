// navigation toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
});

const scroll = ScrollReveal({
    distance: '100px',
    duration: 2500,
    reset: true,
});


scroll.reveal(' .row ',{
    origin: 'top',
    
});

scroll.reveal(' .col',{
    origin: 'bottom',
    interval: 150
});

//preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", ()=>{
    setTimeout(() =>{
loader.style.display = 'none';
    },2000);
})

