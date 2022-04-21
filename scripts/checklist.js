(function (window) { //copy of coffee run checklist maker(ish)
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    function Row(order) {
        let $div = $('<div></div>', 
            {'data-coffee-order': 'checkbox', 
            'class': 'checkbox'});
        let $label = $('<label></label>');
        let $checkbox = $('<input></input>',
            {type: 'checkbox', 
            value: order.emailAddress});
        
        let pData = JSON.parse(order.pdata);
        let selectorNames = Object.keys(pData);
        let description = '';
        for (const i of selectorNames) {
            description += pData[i] + ' ' + i + ', ';
        }
        description += '  for: ' + order.emailAddress;
        $label.append($checkbox);
        $label.append(description);
        $div.append($label);
        this.$element = $div;
    }

    CheckList.prototype.removeRow = function (email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
    };
    
    CheckList.prototype.addRow = function (coffeeOrder) {
        this.removeRow(coffeeOrder.emailAddress);
        var rowElement = new Row(coffeeOrder);
        this.$element.append(rowElement.$element);
    };

    CheckList.prototype.addClickHandler = function (func) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    };

    App.CheckList = CheckList;
    window.App = App;
})(window);