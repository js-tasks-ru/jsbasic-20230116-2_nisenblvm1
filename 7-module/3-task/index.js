import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  elem = null;
   config = {};

   constructor({steps, value = 0}) {
     this.config.steps = steps;
     this.config.value = value;

     this.elem = createElement(this.#template());

     this.elem.addEventListener("click", this.#click);
   }

  #click = (event) => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    console.log("расстояние от начала слайдера до места клика " + left);
    let leftRelative = left / this.elem.offsetWidth;
    console.log("отношенеи прогресса к общей ширине " + leftRelative);
    let segments = this.config.steps - 1;

    let approximateValue = leftRelative * segments;
    console.log("отношенеи длины нажатия " + approximateValue);

    this.config.value = Math.round(approximateValue);
    console.log("округленеие для значения слайдера которое передается в пользоовательское событие " + this.config.value);
    let valuePercents = this.config.value / segments * 100;
    console.log("значение в процентах для ползунка " + valuePercents);

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    let leftPercents = valuePercents; // Значение в процентах от 0 до 100

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    let myEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
      detail: this.config.value, // значение 0, 1, 2, 3, 4
      bubbles: true // событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(myEvent);
  }

  #template(){
    return (`<div class="slider">
<!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value"></span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
    <span class="slider__step-active"></span>
       ${this.#spanCreate(this.config.steps - 1)}


    </div>
  </div>`);
  }

   #spanCreate(num){
    let str = "";
     while(num > 0){str += "<span></span>";
      num--;
    }
     return(str);
  }
}
