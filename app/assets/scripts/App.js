import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import LazyLoad from './modules/LazyLoad';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';

let mobileMenu = new MobileMenu();
mobileMenu.enableEvents();

let stickyHeader = new StickyHeader();
stickyHeader.createWaypoint();
stickyHeader.enableSmoothScroll();
stickyHeader.createPageSectionWaypoints();

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
