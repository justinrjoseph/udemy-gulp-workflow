import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    this.openModalButton.on('click', this.openModal.bind(this));
    this.closeModalButton.on('click', this.closeModal.bind(this));
    $(document).on('keyup', this.escapeKeyHandler.bind(this));
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }

  escapeKeyHandler(e) {
    if ( e.keyCode === 27 ) {
      this.closeModal();
    }
  }
}

export default Modal;
