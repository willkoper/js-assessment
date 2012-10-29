if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    	// see http://www.drdobbs.com/open-source/currying-and-partial-functions-in-javasc/231001821
		return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
    	// same as above
		return fn.apply(obj);
    },

    functionFunction : function(str) {
    	//str is a parameter passed to function what that takes another string as its param
		var what = function(nextStr){
		return str + ', ' + nextStr;
		
		}
		return what;
    },

    makeClosures : function(arr, fn) {
    	
    	//see http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/
		var output = [],
			i;
			function close(x){
				//return a function that doesn't take a parameter
				return function(){
				//that returns a value based on the parameter you pass to the outer function
					return fn (x);
				}
			}
			for (i = 0 ; i < arr.length; i +=1){
				output.push(close(arr[i]));
			}
		return output;
	},

    partial : function(fn, str1, str2) {
		var oldStr1 = str1,
			oldStr2 = str2;
			if(oldStr2 === undefined){
				return function (newStr2){
					return fn(oldStr1, newStr2);
				}
			}
			return function(){fn(str1, str2)};
    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
