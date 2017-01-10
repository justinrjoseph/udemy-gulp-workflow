import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.headerColorTrigger = $('.large-hero__title');
    this.createHeaderWaypoint();

    this.navigationLinks = $('.primary-nav').find('a');
    this.enableSmoothScroll();

    this.pageSections = $('.page-section');
    this.createPageSectionWaypoints();
  }

  enableSmoothScroll() {
    this.navigationLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var self = this;

    new Waypoint({
      element: this.headerColorTrigger[0],
      handler: function(direction) {
        if ( direction === 'down' ) {
          self.siteHeader.addClass('site-header--dark');
        } else {
          self.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var self = this;

    this.pageSections.each(function() {
      var currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if ( direction === 'down' ) {
            var headerLink = $(currentPageSection).data('scroll-match');
            self.navigationLinks.removeClass('is-current-section');
            $(headerLink).addClass('is-current-section');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if ( direction === 'up' ) {
            var headerLink = $(currentPageSection).data('scroll-match');
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
