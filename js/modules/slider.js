function slider() {

  let slideIndex = 1;
  let offSet = 0;

  const slides = document.querySelectorAll('.offer__slide');
  const slider = document.querySelector('.offer__slider');
  const prev = document.querySelector('.offer__slider-prev');
  const next = document.querySelector('.offer__slider-next');
  const totoal = document.querySelector('#total');
  const current = document.querySelector('#current');
  const slidesWrapper = document.querySelector('.offer__slider-wrapper');
  const slidesFiels = document.querySelector('.offer__slider-inner');
  const width = window.getComputedStyle(slidesWrapper).width;

  if (slides.length < 10) {
    totoal.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    totoal.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesFiels.style.width = 100 * slides.length + '%';
  slidesFiels.style.display = 'flex';
  slidesFiels.style.trasition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';


  slides.forEach(slide => {
    slide.style.width = width;
  });

  slider.style.position = 'relative';

  const indicators = document.createElement('ol');
  const dots = [];

  function dotManipulator(dots) {
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  }

  function indexManipulator(slides) {
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slider.append(indicators);

  for(let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    `;

    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function deleteNotDiggits(str) {
    return +str.replace(/\D/g, '');
  }

  next.addEventListener('click', () => {
    if (offSet == deleteNotDiggits(width) * (slides.length - 1)) {
      offSet = 0;
    } else {
      offSet += deleteNotDiggits(width);
    }

    slidesFiels.style.transform = `translateX(-${offSet}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dotManipulator(dots);
  });

  prev.addEventListener('click', () => {
    if (offSet == 0) {
      offSet = deleteNotDiggits(width) * (slides.length - 1);
    } else {
      offSet -= deleteNotDiggits(width);
    }

    slidesFiels.style.transform = `translateX(-${offSet}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    indexManipulator(slides);

    dotManipulator(dots);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offSet = deleteNotDiggits(width) * (slideTo - 1);

      slidesFiels.style.transform = `translateX(-${offSet}px)`;

      indexManipulator(slides);

      dotManipulator(dots);
    });
  });
  
}

module.exports = slider;