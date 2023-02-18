function initCarousel() {

  let btnRight = document.querySelector('.carousel__arrow_right');
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let count = 0;
  btnLeft.style.display = 'none';
  let maxCountToLeft = document.querySelectorAll('.carousel__slide').length - 1;

  console.log(maxCountToLeft);

  document.querySelector('.carousel').addEventListener('click', moveCarousel);

  function moveCarousel(event) {
    let offsetWidth = document.querySelector('.carousel__inner').offsetWidth;

    if (event.target === btnRight || event.target === btnRight.firstElementChild) {
      document.querySelector('.carousel__inner').style.transform = `translateX(${count = count - offsetWidth}px)`;
      if(count === (-offsetWidth * maxCountToLeft)){btnRight.style.display = 'none'}
      else{
        btnRight.style.display = '';
        btnLeft.style.display = '';
      }

    } else if (event.target === btnLeft || event.target === btnLeft.firstElementChild) {

      document.querySelector('.carousel__inner').style.transform = `translateX(${count = count + offsetWidth}px)`;
      if(count === 0){btnLeft.style.display = 'none'}
      else{
        btnLeft.style.display = '';
        btnRight.style.display = '';
      }


    }
  }
}




