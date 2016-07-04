(function () {
	function Shape() {
		var _type;
	
	   this.getType = function() {
			return this.type;
	   };
	   
	   this.setType = function(type) {
			this.type = type;
	   };
	   
	   Object.defineProperty(this, 'type', {
			set: function (type) {
				_type = type;
			},
			get: function () {
				return _type;
			}	   
	   });
	   
	   this.type = "shape";
	   this.setType("shape");
	   	   
	   console.log(this.type);
	}
	
	Shape.prototype.draw = function () {
		console.log('shape');
	};
	
	Shape.type = '';
	
	window.Shape = Shape;
}());