if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		for(var i=0; i<arr.length; i += 1){
			if(arr[i] === item){
				return i;
			}
		}
		return -1;
    },

    sum : function(arr) {
		var total = 0,
			value;
		for (var i = 0; i < arr.length; i++){
			if(typeof arr[i] !== 'number'){
				value = parseInt(arr[i], 10);
			}
			else{
				value = arr[i];
			}
			total += value;
		}
		return total;
    },

    remove : function(arr, item) {
	var index;
		for(var i=0; i<arr.length; i += 1){
			if(arr[i] === item){
				arr.splice (i, 1);
				continue;
			}
		}
		return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
		var index;
		for(var i=0; i<arr.length; i += 1){
			if(arr[i] === item){
				arr.splice (i, 1);
				continue;
			}
		}
		return arr;
    },

    append : function(arr, item) {
		arr[arr.length] = item;
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    concat : function(arr1, arr2) {
		while(arr2.length >0){
		arr1[arr1.length] = arr2.shift();
		}
		return arr1;
    },

    insert : function(arr, item, index) {
	arr.splice(index,0, item);
	return arr;

    },

    count : function(arr, item) {
		var count = 0,
			index;
		for (index =0; index< arr.length; index +=1){
			if (arr[index] === item){
				count +=1
			}


		}
		return count;
    },

    duplicates : function(arr) {

		var output = [],
			isDuplicate = function(arr, target){
				var s;
				for ( s = 0; s< arr.length; s +=1){
					if (arr[s] === target && s !== arr.indexOf(target)){
					return true;
					}
				}
				return false;
			}
		for (var i = 0; i <arr.length; i +=1){
			if(isDuplicate(arr, arr[i]) &&
				output.indexOf(arr[i]) === -1
			){
				output[output.length] = arr[i];
			
			}
		}
		return output;
    },

    square : function(arr) {
		var output = [],
			i;
		for (i=0; i< arr.length; i+=1){
			output[i] = arr[i] * arr[i];
		}
		return output;
    },

    findAllOccurrences : function(arr, target) {
		var output = [],
			i;
		for (i = 0; i < arr.length; i +=1){
			if (arr[i] === target){
				output[output.length] = i;
			}
		}
		return output;
    }
  };
});
