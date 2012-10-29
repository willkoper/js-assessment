if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		return fn.call(obj, null);
    },

    alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var output = [],
			prop
		for (prop in obj){
			if(obj.hasOwnProperty(prop)){
			output.push(prop+': '+obj[prop]);
			}
		}
		return output;
    }
  };
});
