import { computedFrom } from 'aurelia-framework';

import _ from 'lodash';

export class App {
  model = {
    value: []
  };

  options = [
    { id: 1, title: 'Tea', type: 'green', category: 'Food Scraps', search_terms: 'tea bags teabags chia tisane loose leaf', additional_notes: 'Ensure tea bag is natural material' },
    { id: 2, title: 'Coffee Grounds', type: 'green', category: 'Food Scraps', search_terms: 'coffee grounds', additional_notes: '' },
    { id: 3, title: 'Coffee Filters', type: 'brown', category: 'Food Scraps', search_terms: 'coffee filters', additional_notes: '' },
    { id: 4, title: 'Paper Towel', type: 'brown', category: 'Paper', search_terms: 'paper towel napkin', additional_notes: 'Ensure not made with anti bacterial material' },
    { id: 5, title: 'Fruit Scraps', type: 'green', category: 'Food Scraps', search_terms: 'fruit scraps', additional_notes: '' },
    { id: 6, title: 'Vegetable Scraps', type: 'green', category: 'Food Scraps', search_terms: 'vegetable scraps', additional_notes: '' },
    { id: 7, title: 'Egg Shells', type: 'brown', category: 'Food Scraps', search_terms: 'egg shells', additional_notes: 'Crush shells first' },
    { id: 8, title: 'Cooked Pasta', type: 'green', category: 'Food Scraps', search_terms: 'cooked pasta', additional_notes: '' },
    { id: 9, title: 'Cooked Rice', type: 'green', category: 'Food Scraps', search_terms: 'cooked rice', additional_notes: '' },
    { id: 10, title: 'Paper Plates', type: 'brown', category: 'Paper', search_terms: 'paper plates', additional_notes: '' },
    { id: 11, title: 'Paper Towel Rolls', type: 'brown', category: 'Paper', search_terms: 'paper towel rolls', additional_notes: '' },
    { id: 12, title: 'Toilet Rolls', type: 'brown', category: 'Paper', search_terms: 'toilet rolls', additional_notes: '' },
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
