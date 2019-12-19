import { computedFrom } from 'aurelia-framework';

import _ from 'lodash';

export class App {
  model = {
    value: []
  };

  options = [
    { id: 1, title: 'DIY', url: 'https://diy.org' },
    { id: 2, title: 'Google', url: 'http://google.com' },
    { id: 3, title: 'Yahoo', url: 'http://yahoo.com' }
  ];

  @computedFrom('model.value')
  get values() {
    return _.split(this.model.value, ',')
  }

  optionForId(id) {
    return _.find(this.options, function(n) {
      return n.id == id;
    });
  }


}
