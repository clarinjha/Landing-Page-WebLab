let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
