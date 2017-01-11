import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import LazyLoad from './modules/LazyLoad';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

var stickyHeader = new StickyHeader();

var lazyLoad = new LazyLoad();

var revealFeatures = new RevealOnScroll('.feature-item', '85%');
var revealTestimonials = new RevealOnScroll('.testimonial', '85%');

var modal = new Modal();
