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

    },

    endsWithVowel : function(str) {
		if(str.match(/[aeiou]+$/g)){
			return true;
		}
		else{
			return false;
		}
    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
