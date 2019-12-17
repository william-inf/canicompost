import {inject} from 'aurelia-framework';
import 'bootstrap';

@inject(Element)
export class BootstrapTooltipCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).tooltip({title: () => this.value, container: 'body'});
  }

  detached() {
    $(this.element).tooltip('dispose');
  }
}
