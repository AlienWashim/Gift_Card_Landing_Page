let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const dots = document.querySelectorAll('.dot');




function showSlide(index) {
    currentSlideIndex = index;
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });

    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlideIndex) {
            dot.classList.add('active');
        }
    });
}

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}

function goToSlide(index) {
    showSlide(index);
}

setInterval(() => {
    changeSlide(1);
}, 1000); // Change image every 3 seconds

// Toggle menu options
function toggleMenu() {
    const menuOptions = document.getElementById('menuOptions');
    menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
}

// Hide menu on outside click
document.addEventListener('click', function (event) {
    const menuIcon = document.querySelector('.menu-icon');
    const menuOptions = document.getElementById('menuOptions');

    if (!menuIcon.contains(event.target) && !menuOptions.contains(event.target)) {
        menuOptions.style.display = 'none';
    }
});

// Show the first slide initially
showSlide(currentSlideIndex);
