import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class LazyLoad {
  constructor() {
    this.lazyImages = $('.lazyload');
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }
}

export default LazyLoad;
