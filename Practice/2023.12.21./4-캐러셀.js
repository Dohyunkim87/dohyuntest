const carousel = document.getElementById('carousel');
const carouselItems = document.querySelectorAll('.carouselItem');
const darkModeBtn = document.getElementById('darkModeBtn');
const autoBtn = document.getElementById('autoBtn');
const fightBtns = document.querySelectorAll('.fightBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let autoSlideInterval = null;

function showSlide(index) {
carousel.style.transform = `translateX(-${index * 400}px)`;
}

darkModeBtn.addEventListener('click', function() {
document.body.classList.toggle('darkMode');
});

autoBtn.addEventListener('click', function() {
if (!autoSlideInterval) {
    autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
    }, 2000);
}
else {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
}
});

fightBtns.forEach((btn, index) => {
btn.addEventListener('click', function() {
    showSlide(index);
    currentSlide = index;
});
});

nextBtn.addEventListener('click', function() {
currentSlide = (currentSlide + 1) % carouselItems.length;
showSlide(currentSlide);
});