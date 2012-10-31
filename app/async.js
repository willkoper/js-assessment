if (typeof define !== 'function') { var define = require('amdefine')(module); }
//http://joseoncode.com/2011/09/26/a-walkthrough-jquery-deferred-and-promise/
define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		var d = $.Deferred();
		setTimeout(function(){d.resolve(value)}, 20);
		return d.promise();
    },

    manipulateRemoteData : function(url) {

    }
  };
});
