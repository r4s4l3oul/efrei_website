//page acceuil et faq (manuel et automatique)

document.addEventListener("DOMContentLoaded", () => {

    function initCarousel(carouselId, slideSelector, prevId = null, nextId = null, interval = 10000) {

        let currentSlide = 0;

        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const slides = carousel.querySelectorAll(slideSelector);
        if (slides.length === 0) return;

        function showSlide(index) {

            if (index < 0) {
                index = slides.length - 1;
            }

            if (index >= slides.length) {
                index = 0;
            }

            currentSlide = index;

            carousel.style.transform =
                `translateX(-${currentSlide * 100}%)`;
        }

        if (prevId && document.getElementById(prevId)) {
            document.getElementById(prevId).addEventListener("click", () => {
                showSlide(currentSlide - 1);
            });
        }

        if (nextId && document.getElementById(nextId)) {
            document.getElementById(nextId).addEventListener("click", () => {
                showSlide(currentSlide + 1);
            });
        }

        setInterval(() => {
            showSlide(currentSlide + 1);
        }, interval);
    }

    initCarousel("carousel-home", ".carousel-item", "prev", "next", 10000);

    initCarousel("carousel-faq", ".carousel-item-form", null, null, 10000);

});




