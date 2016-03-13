import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('calculators', function() {
    this.route('compound-interest-calculator');
  });
  this.route('books');
});

export default Router;
