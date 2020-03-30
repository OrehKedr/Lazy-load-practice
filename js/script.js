const images = document.querySelectorAll('.lazy-img');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
}
const observer  = new IntersectionObserver(handleIntersectionEvent, options);

//Создаём объекты типа IntersectionObserverEntry на основе нашей коллекции с картинками.
//Это целевые элементы, которые будем отслеживать.
images.forEach( img => {
  observer.observe(img);
})

//Callback-функция, которая вызывается обсёрвером для 
//обработки события пересечения отслеживаемым елементом границы viewport
function handleIntersectionEvent(images, observer) {
  images.forEach( img => {
    if (img.intersectionRatio > 0) {
      loadImage(img.target);
    }
  })
}

function loadImage(elemImg) {
  elemImg.src = elemImg.getAttribute('data-src');
  observer.unobserve(elemImg);
}