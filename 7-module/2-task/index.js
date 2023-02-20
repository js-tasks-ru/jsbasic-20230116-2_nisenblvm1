import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  elem = null;

  constructor() {
    this.elem = createElement(this.#template());

    this.elem.querySelector('.modal__close').addEventListener('click', this.close);
    document.addEventListener('keydown', this.closeEscPush);
  }
  open(){
  document.body.append(this.elem);
  document.body.classList.add('is-modal-open');
  }
  setTitle(string){
  this.elem.querySelector('.modal__title').append(string);
  }
  setBody(node){
    // '<div>Тело модального окна</div>'

    this.elem.querySelector('.modal__body').firstChild.remove();

    this.elem.querySelector('.modal__body').append(node);
    // modal.setBody(modalBody);

    // let modalBody = document.createElement('div');
    // modalBody.innerHTML = `<b>тут содержится тело модального окна<b/>`
    // modal.setBody(modalBody);
  }
  close(){
    // let modal = document.querySelector('.modal');
    // document.querySelector('body').removeChild(modal);
    // document.body.classList.remove('is-modal-open');

    document.body.classList.remove('is-modal-open');
    document.querySelector('.modal').remove();

  }
  closeEscPush(event){
    if(event.code === 'Escape'){
      document.querySelector('.modal').remove();
      document.body.classList.remove('is-modal-open');
    }
  }
  #template() {
    return `<div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
<!--          Вот сюда нужно добавлять заголовок-->
        </h3>
      </div>

      <div class="modal__body">
<!--        A сюда нужно добавлять содержимое тела модального окна-->
      </div>
    </div>

  </div>`;
  }
}
