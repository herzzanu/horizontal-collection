import Ember from 'ember';
import VerticalCollection from 'horizontal-collection/components/horizontal-collection/component';

Ember.HTMLBars._registerHelper('horizontal-collection', (params, hash, options, env) => {
  hash.items = params.pop();

  return env.helpers.view.helperFunction.call(this, [VerticalCollection], hash, options, env);
});

export default {
  name: 'horizontal-collection-legacy-compat',

  initialize() {}
};
