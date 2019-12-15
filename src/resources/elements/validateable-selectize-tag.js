
import { bindable, bindingMode, inject } from 'aurelia-framework';
import $ from 'jquery';
import selectize from 'selectize';

@inject(Element)
export class ValidatableSelectizeTag {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    @bindable errors;
    @bindable label;
    @bindable name;
    @bindable placeholder = '';
    @bindable type = 'text';
    @bindable helpText = '';
    @bindable hasFocus = false;
    @bindable disabled = false;

    constructor(element) {
        this.element = element;
    }

    attached() {
        let el = $(this.element).find('select');
        this.sel = el.selectize({
            theme: 'links',
            maxItems: null,
            valueField: 'id',
            searchField: 'title',
            options: [
                {id: 1, title: 'DIY', url: 'https://diy.org'},
                {id: 2, title: 'Google', url: 'http://google.com'},
                {id: 3, title: 'Yahoo', url: 'http://yahoo.com'},
            ],
            render: {
                option: function(data, escape) {
                    return '<div class="option">' +
                            '<span class="title">' + escape(data.title) + '</span>' +
                            '<span class="url">' + escape(data.url) + '</span>' +
                        '</div>';
                },
                item: function(data, escape) {
                    return '<div class="item"><a href="' + escape(data.url) + '">' + escape(data.title) + '</a></div>';
                }
            },
            onChange: function(value) {
                console.log("here!: " + value);
                this.value = value;
                let notice = new Event('change', { bubbles: true });
                $(el)[0].dispatchEvent(notice);
            }
        })

        // this.value = this.sel[0].value;
        // this.sel[0].selectize.addItem(this.value);
    }

    detached() {
        this.sel[0].selectize.destroy();
    }
}