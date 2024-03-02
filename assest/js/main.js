console.log('test');
//img arrey of carousel
const myImg = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
]



//loop for insert elemnt in Dom with class 'active'
const slidesElement = document.querySelector('.slides');

let activeImage = 0;
for (let i = 0; i < myImg.length; i++) {

    const slide = myImg[i];
    //console.log(slide);

    //element to insert in Dom
    const slideMarkup = `<img class="${i === activeImage ? 'active' : ''}" src="/assest/img/${slide}" alt="">`

    slidesElement.insertAdjacentHTML('beforeend', slideMarkup);

}

const nextElement = document.querySelector('.right');

nextElement.addEventListener('click', function () {

    activeImage++
    //loop for no stop the carousel
    if (activeImage > myImg.length - 1) {
        activeImage = 0;
    }

    // change active image 
    const currentImage = document.querySelector('img.active')
    //console.log(currentImage);
    currentImage.classList.remove('active')
    
    const allSlides = document.querySelectorAll('.slides img')

    //console.log(allSlides[activeImage]);
    allSlides[activeImage].classList.add('active')

})


const prevElement = document.querySelector('.left');

prevElement.addEventListener('click', function () {

    activeImage--
    
    //loop for no stop the carousel
    if (activeImage < 0) {
        activeImage = myImg.length - 1;
    }

    // change active image 
    const currentImage = document.querySelector('img.active');
    //console.log(currentImage);
    currentImage.classList.remove('active');
    
    const allSlides = document.querySelectorAll('.slides img');

    //console.log(allSlides[activeImage]);
    allSlides[activeImage].classList.add('active');


})


