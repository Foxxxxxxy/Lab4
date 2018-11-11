var Calculator = require('../Calculator.js');
var add = Calculator.add;
var substract = Calculator.substract;

it('should add two numbers', function(){
    var expectedResult = 15;
    var result = add(10, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

it('should substract two numbers', function(){
    var expectedResult = 15;
    var result = add(10, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

