import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.header');

    this.menu = {
      icon: $('.header__menu-icon'),
      content: $('.header__menu-content')
    };
  }

  enableEvents() {
    this.menu.icon.on('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.siteHeader.toggleClass('header--expanded');
    this.menu.icon.toggleClass('header__menu-icon--close-x');
    this.menu.content.toggleClass('header__menu-content--visible');
  }
}

export default MobileMenu;
