
import { bindable, bindingMode, inject } from 'aurelia-framework';
import $ from 'jquery';
import 'selectize';

@inject(Element)
export class ValidatableSelectizeTag {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    @bindable errors;
    @bindable label;
    @bindable name;
    @bindable placeholder;
    @bindable helpText = '';
    @bindable hasFocus = false;
    @bindable disabled = false;
    @bindable options = []; 

    constructor(element) {
        this.element = element;
        this.hideEmptyResultsMessage();
    }

    attached() {
        this.sel = $(this.selector).selectize({
            theme: 'links',
            maxItems: null,
            valueField: 'id',
            searchField: 'search_terms',
            options: this.options,
            placeholder: this.placeholder + '  ',
            render: {
                option: function (data, escape) {
                    return '<div class="option">' +
                        '<span class="title">' + escape(data.title) + '</span>' +
                        '<span class="category">' + escape(data.category) + '</span>' +
                        '</div>';
                },
                item: function (data, escape) {
                    return '<div class="item">' + escape(data.title) + '</div>';
                }
            },
            onChange: (value) => {
                this.value = value;
            },
            onType: (str) => {
                let selector = $(this.selector)[0].selectize;
                if (selector.hasOptions || !selector.lastQuery) {
                    this.hideEmptyResultsMessage();
                  } else {
                    this.currentText = str;
                    this.displayEmptyResultsMessage();
                  }
            },
            onBlur: () => {
                this.hideEmptyResultsMessage();
            }
        })
    }

    detached() {
        $(this.selector)[0].selectize.destroy();
    }

    clear() {
        this.currentText = '';
        $(this.selector)[0].selectize.clear();
    }

    displayEmptyResultsMessage() {
        $(this.empty).css('width', $(this.inputgroup).width() + 20);
        $(this.selector).addClass("dropdown-active");
        $(this.empty).show();
    }
    
    hideEmptyResultsMessage() {
        this.currentText = '';
        $(this.empty).hide();
    }

}