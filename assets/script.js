var Calculator = /** @class */ (function () {
    function Calculator() {
        this.display = document.querySelector('.display');
        this.buttons = document.querySelector('.buttons');
        this.createButtons();
        this.addListeners();
    }
    Calculator.prototype.createButtons = function () {
        var buttonValues = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+',
            'C'
        ];
        for (var _i = 0, buttonValues_1 = buttonValues; _i < buttonValues_1.length; _i++) {
            var value = buttonValues_1[_i];
            var button = document.createElement('button');
            button.textContent = value;
            button.classList.add('button');
            this.buttons.appendChild(button);
        }
    };
    Calculator.prototype.addListeners = function () {
        var _this = this;
        this.buttons.addEventListener('click', function (event) {
            var target = event.target;
            if (target.tagName === 'BUTTON') {
                _this.handleButtonClick(target.textContent);
            }
        });
    };
    Calculator.prototype.handleButtonClick = function (value) {
        switch (value) {
            case '=':
                try {
                    this.display.value = eval(this.display.value);
                }
                catch (e) {
                    this.display.value = 'Error';
                }
                break;
            case 'C':
                this.display.value = '';
                break;
            default:
                this.display.value += value;
                break;
        }
    };
    return Calculator;
}());
document.addEventListener('DOMContentLoaded', function () {
    new Calculator();
});
