if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		if(str.match(/\d+/g)){
			return true;
		}
		else{
			return false;
		}
    },

    containsRepeatingLetter : function(str) {
		if(str.match(/([a-z])\1/gi)){
			return true;
		}
		else{
			return false;
		}
    },

    endsWithVowel : function(str) {
		if(str.match(/[aeiou]+$/i)){
			return true;
		}
		else{
			return false;
		}
    },

    captureThreeNumbers : function(str) {
		var numbers = str.match(/\d\d\d/g);
		if(numbers !== null){
			return numbers[0];
		}
		else{
		return false;
		}
    },

    matchesPattern : function(str) {
		if(str.match(/^\d{3}-\d{3}-\d{4}$/) !== null){
			return true;
		}
		else{
			return false;
		}
    },
    isUSD : function(str) {
		if(str.match(/^\$\d{0,3}(,\d{3})*(\.\d{2}){0,1}$/) !== null){
			return true;
		}
		else{
			return false;
		}
    }
  };
});
