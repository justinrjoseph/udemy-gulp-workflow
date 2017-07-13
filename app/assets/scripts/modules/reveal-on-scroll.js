import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els) {
    this.itemsToReveal = $(els);
  }

  hideInitially() {
    this.itemsToReveal.addClass('item-to-reveal');
  }

  createWaypoints(offset) {
    this.itemsToReveal.each(function() {
      let currentItem = this;

      new Waypoint({
        element: currentItem,
        handler: () => {
          $(currentItem).addClass('item-to-reveal--visible');
        },
        offset: offset
      });
    });
  }
}

export default RevealOnScroll;
