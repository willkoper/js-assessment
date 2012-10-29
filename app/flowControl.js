if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      var output = '';
      if(typeof num !== 'number'){
      	return false;
      }
      if(num%3 === 0){
      // if the number is divisible by 3, the function should return 'fizz';
      	output += 'fizz';
      }
      if(num%5 === 0){
      // if the number is divisible by 5, the function should return 'buzz';
      	output += 'buzz';
      }
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      if(output === ''){
      	// otherwise the function should return the number, or false if no number
      // was provided
      	output = num;
      }
      return output;
      
      
      
      
    }
  };
});
