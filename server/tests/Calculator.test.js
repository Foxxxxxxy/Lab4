var Calculator = require('../Calculator.js');
var add = Calculator.add;

it('should add two numbers', function(){
    var expectedResult = 15;
    var result = add(10, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});