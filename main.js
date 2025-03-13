let currentSlide = 0;
const body = document.body
main()

function main(){
    let prevBtn = document.querySelector(".prev");
    let nextBtn = document.querySelector(".next");

    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)
    updateBodyClass();
}

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
    updateBodyClass();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    updateBodyClass();
}

function updateBodyClass() {
    // Удаляем старые классы
    body.classList.remove('photo-0', 'photo-1', 'photo-2');
    
    // Добавляем новый класс в зависимости от текущего слайда
    switch (currentSlide) {
        case 0:
            body.classList.add('photo-0');
            break;
        case 1:
            body.classList.add('photo-1');
            break;
        case 2:
            body.classList.add('photo-2');
            break;
    }
}