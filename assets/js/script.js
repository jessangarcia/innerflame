document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxVideo = document.getElementById('lightbox-video');
        
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
document.querySelector('.lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');
    
    lightbox.style.display = 'none';
    lightboxVideo.pause();
}