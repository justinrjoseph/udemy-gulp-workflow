import $ from 'jquery';

class Modal {
  constructor() {
    this.el = $('.modal');

    this.btn = {
      open: $('.open-modal'),
      close: $('.modal__close')
    };
  }

  enableEvents() {
    this.btn.open.on('click', () => this.open());
    this.btn.close.on('click', () => this.close());
    $(document).on('keyup', this.escapeKeyHandler.bind(this));
  }

  open() {
    this.el.addClass('modal--is-visible');
    return false;
  }

  close() {
    this.el.removeClass('modal--is-visible');
  }

  escapeKeyHandler(e) {
    if ( e.keyCode === 27 ) {
      this.close();
    }
  }
}

export default Modal;
