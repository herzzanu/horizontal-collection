import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('examples', function() {
    this.route('infinite-scroll');
  });

  this.route('settings');

  // For tests
  this.route('acceptance-tests', function() {
    this.route('record-array');
  });
});

export default Router;
