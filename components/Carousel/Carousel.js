/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const createCarousel = () => {

  // CREATE ELEMENTS

  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const firstImg = document.createElement('img');
  const secondImg = document.createElement('img');
  const thirdImg = document.createElement('img');
  const fourthImg = document.createElement('img');
  const right = document.createElement('div');

  // ADD STYLE

  carousel.classList.add('carousel');
  left.classList.add('left-button');
  firstImg.setAttribute('src', './assets/carousel/mountains.jpeg');
  secondImg.setAttribute('src', './assets/carousel/computer.jpeg');
  thirdImg.setAttribute('src', './assets/carousel/trees.jpeg');
  fourthImg.setAttribute('src', './assets/carousel/turntable.jpeg');
  right.classList.add('right-button');
  firstImg.classList.add('active');


  // APPEND

  carousel.append(left, firstImg, secondImg, thirdImg, fourthImg, right);


  var activeImg = 0;

  right.addEventListener('click', (event) => {
    let actImg = imgArray[activeImg];
    actImg.classList.remove('active');
    activeImg += 1;
    if (activeImg >= imgArray.length) {
      activeImg = 0;
    }
    imgArray[activeImg].classList.add('active');
  })

  left.addEventListener('click', (event) => {
    imgArray[activeImg].classList.remove('active');
    activeImg -= 1;
    if (activeImg < 0) {
      activeImg = imgArray.length - 1;
    }
    imgArray[activeImg].classList.add('active');
  })

  // Function

  let imgArray = [firstImg, secondImg, thirdImg, fourthImg];



  return carousel;
}

let carousel = createCarousel();

let carouselCont = document.getElementsByClassName('carousel-container')[0];
console.log(carouselCont);

carouselCont.appendChild(carousel);





