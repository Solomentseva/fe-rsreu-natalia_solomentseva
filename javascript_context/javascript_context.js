function Calculator(initialValue) {

    this.add = function (operand) {
        this.result += operand;

        return this;
    };

    this.multiply = function (operand) {
        this.result *= operand;

        return this;
    };

    this.subtract = function (operand) {
        this.result -= operand;

        return this;
    };

    this.divide = function (operand) {
        this.result /= operand;

        return this;
    };

    this.result = initialValue;
}

var calc = new Calculator(10);

calc.add(3)
    .subtract(1);

console.log(calc.result);