
import { bindable, bindingMode, inject } from 'aurelia-framework';
import $ from 'jquery';
import 'selectize';

@inject(Element)
export class ValidatableSelectizeTag {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) searched;
    @bindable errors;
    @bindable label;
    @bindable name;
    @bindable helpText = '';
    @bindable hasFocus = false;
    @bindable disabled = false;
    options = [
        { id: 1, title: 'DIY', url: 'https://diy.org' },
        { id: 2, title: 'Google', url: 'http://google.com' },
        { id: 3, title: 'Yahoo', url: 'http://yahoo.com' }
    ];

    constructor(element) {
        this.element = element;
        this.hideEmptyResultsMessage();
    }

    attached() {
        this.sel = $(this.selector).selectize({
            theme: 'links',
            maxItems: null,
            valueField: 'id',
            searchField: 'title',
            options: this.options,
            render: {
                option: function (data, escape) {
                    return '<div class="option">' +
                        '<span class="title">' + escape(data.title) + '</span>' +
                        '<span class="url">' + escape(data.url) + '</span>' +
                        '</div>';
                },
                item: function (data, escape) {
                    return '<div class="item">' + escape(data.title) + '</div>';
                }
            },
            onChange: (value) => {
                this.value = value;
            },
            onType: () => {
                // this.displayEmptyResultsMessage();
                // this.searched = (str.length == 0);
                let selector = $(this.selector)[0].selectize;
                if (selector.hasOptions || !selector.lastQuery) {
                    this.hideEmptyResultsMessage();
                  } else {
                    this.displayEmptyResultsMessage();
                  }
            }
        })
    }

    detached() {
        $(this.selector)[0].selectize.destroy();
    }

    clear() {
        $(this.selector)[0].selectize.clear();
    }

    displayEmptyResultsMessage() {
        $(this.empty).css('width', $(this.selector).width());
        $(this.selector).addClass("dropdown-active");
        $(this.empty).show();
    }
    
    hideEmptyResultsMessage() {
        $(this.empty).hide();
    }

}