import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.headerColorTrigger = $('.large-hero__title');
    this.navigationLinks = $('.primary-nav').find('a');
    this.pageSections = $('.page-section');
  }

  enableSmoothScroll() {
    this.navigationLinks.smoothScroll();
  }

  createWaypoint() {
    let self = this;

    new Waypoint({
      element: this.headerColorTrigger[0],
      handler: (direction) => {
        if ( direction === 'down' ) {
          self.siteHeader.addClass('site-header--dark');
        } else {
          self.siteHeader.removeClass('site-header--dark');
          self.navigationLinks.removeClass('is-current-section');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    let self = this;

    this.pageSections.each(function() {
      let currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: (direction) => {
          if ( direction === 'down' ) {
            let headerLink = $(currentPageSection).data('scroll-match');
            self.navigationLinks.removeClass('is-current-section');
            $(headerLink).addClass('is-current-section');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: (direction) => {
          if ( direction === 'up' ) {
            let headerLink = $(currentPageSection).data('scroll-match');
            self.navigationLinks.removeClass('is-current-section');
            $(headerLink).addClass('is-current-section');
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default StickyHeader;
