import slide01 from './images/slide-01.jpg';
import slide02 from './images/slide-02.jpg';
import slide03 from './images/slide-03.jpg';

function loadHomePage() {
    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'content-container');

    const leftContent = document.createElement('div');
    leftContent.setAttribute('class', 'left-content');

    const innerContent = document.createElement('div');
    innerContent.setAttribute('class', 'inner-content');
    const h4 = document.createElement('h4');
    h4.textContent = `Abongile's Fine Cuisine`;
    const h6 = document.createElement('h6');
    h6.textContent = `The Best Experience`;

    const reservationBtn = document.createElement('div');
    reservationBtn.setAttribute('class', 'main-white-button scroll-to-section');
    reservationBtn.textContent = `Make A Reservation`;

    const rightContent = document.createElement('div');
    rightContent.setAttribute('class', 'right-content');

    // Array of imported images
    const images = [slide01, slide02, slide03];
    let currentSlide = 0;

    // Create image containers and add images
    images.forEach((imageSrc, index) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('mySlides');
        if (index !== currentSlide) imageContainer.style.display = 'none'; // Hide non-active slides

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Slide ${index + 1}`;
        img.style.width = '100%';

        imageContainer.appendChild(img);
        rightContent.appendChild(imageContainer);
    });

    const slides = rightContent.querySelectorAll('.mySlides');

    // Carousel controls
    const previous = document.createElement('a');
    previous.setAttribute('class', 'prev');
    previous.textContent = `❮`;
    const next = document.createElement('a');
    next.setAttribute('class', 'next');
    next.textContent = `❯`;

    // Function to show the specified slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        currentSlide = index;
    }

    // Function to go to the next or previous slide
    function changeSlide(step) {
        let newSlide = currentSlide + step;
        if (newSlide >= slides.length) newSlide = 0;
        if (newSlide < 0) newSlide = slides.length - 1;
        showSlide(newSlide);
    }

    // Event listeners for controls
    previous.addEventListener('click', () => changeSlide(-1));
    next.addEventListener('click', () => changeSlide(1));

    // Auto-advance slides every 4 seconds
    setInterval(() => {
        changeSlide(1);
    }, 5000);

    // Append controls and main content
    innerContent.appendChild(h4);
    innerContent.appendChild(h6);
    innerContent.appendChild(reservationBtn);
    leftContent.appendChild(innerContent);
    rightContent.appendChild(previous);
    rightContent.appendChild(next);

    contentContainer.appendChild(leftContent);
    contentContainer.appendChild(rightContent);
    content.appendChild(contentContainer);
}

export default loadHomePage;