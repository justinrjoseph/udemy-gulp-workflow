import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.headerTrigger = $('.large-hero__title');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var self = this;

    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction) {
        if ( direction === 'down' ) {
          self.siteHeader.addClass('site-header--dark');
        } else {
          self.siteHeader.removeClass('site-header--dark');  
        }
      }
    });
  }
}

export default StickyHeader;
