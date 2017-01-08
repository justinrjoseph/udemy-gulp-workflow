import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = $(els);
    this.hideInitially();
    this.createWaypoints(offset);
  }

  hideInitially() {
    this.itemsToReveal.addClass('item-to-reveal');
  }

  createWaypoints(offset) {
    this.itemsToReveal.each(function() {
      var currentItem = this;

      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass('item-to-reveal--is-visible');
        },
        offset: offset
      });
    });
  }
}

export default RevealOnScroll;
