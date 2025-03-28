document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

document.querySelectorAll('.galleryitem').forEach(item => {
    item.addEventListener('click', function () {
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.getElementById('lightboximg');
        const lightboxVideo = document.getElementById('lightboxvideo');

        // Reset previous media
        lightboxImg.style.display = 'none';
        lightboxVideo.style.display = 'none';
        lightboxVideo.pause();

        // Check if it's an image or video
        const img = this.querySelector('img');
        const video = this.querySelector('video');

        if (img) {
            lightboxImg.src = img.src;
            lightboxImg.style.display = 'block';
        } else if (video) {
            lightboxVideo.src = video.src;
            lightboxVideo.style.display = 'block';
        }

        lightbox.style.display = 'flex';
    });
});

// Close lightbox
document.querySelector('.close-btn').addEventListener('click', closeLightbox);
document.querySelector('.lightboxClose').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
});

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxVideo = document.getElementById('lightboxvideo');

    lightbox.style.display = 'none';
    lightboxVideo.pause();
}

const slides = document.querySelectorAll(".lightbox img");
let slideIndex = 0;
let intervalId = null;
const imgs = document.getElementById('galleryphoto');

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index) {

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(imgs => {
        imgs.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}