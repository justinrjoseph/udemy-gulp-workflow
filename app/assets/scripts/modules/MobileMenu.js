import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');

    this.menu = {
      icon: $('.site-header__menu-icon'),
      content: $('.site-header__menu-content')
    };
  }

  enableEvents() {
    this.menu.icon.on('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menu.icon.toggleClass('site-header__menu-icon--close-x');
    this.menu.content.toggleClass('site-header__menu-content--is-visible');
  }
}

export default MobileMenu;
