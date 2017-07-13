import MobileMenu from './modules/mobile-menu';
import Header from './modules/header';
import LazyLoad from './modules/lazy-load';
import RevealOnScroll from './modules/reveal-on-scroll';
import Modal from './modules/modal';

let mobileMenu = new MobileMenu();
mobileMenu.enableEvents();

let header = new Header();
header.createWaypoint();
header.enableSmoothScroll();
header.createPageSectionWaypoints();

let lazyLoad = new LazyLoad();
lazyLoad.refreshWaypoints();

let revealFeatures = new RevealOnScroll('.feature-item');
revealFeatures.hideInitially();
revealFeatures.createWaypoints('85%');

let revealTestimonials = new RevealOnScroll('.testimonial', '85%');
revealTestimonials.hideInitially();
revealTestimonials.createWaypoints('85%');

let modal = new Modal();
modal.enableEvents();
