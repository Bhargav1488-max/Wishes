document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    const particles = document.querySelector('.particles');
    const numParticles = 50;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.width = Math.random() * 2 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        particles.appendChild(particle);
    }

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }

    function startSlideshow() {
        interval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 4000);
    }

    // Hide greeting and start slideshow after 5 seconds
    setTimeout(() => {
        document.querySelector('.greeting').style.opacity = '0';
        document.querySelector('.slideshow').style.display = 'block';
        document.querySelector('.slideshow').style.opacity = '1';
        startSlideshow();
    }, 5000);
});
