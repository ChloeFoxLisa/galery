const slides = document.querySelectorAll('.slide');

for(const slide of slides){
    slide.addEventListener('click', () => {
        removeAllActiveClasses();
        slide.classList.add('active');
    });
}

function removeAllActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

slides[Math.floor(Math.random() * 5)].classList.add('active');