(function () {
	function Triangle(a,b,c) {
		this.type="triangle";
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	Triangle.prototype = new Shape();

	Triangle.prototype.getPerimeter = function() {
	  return this.a + this.b + this.c;
	};
	
	window.Triangle = Triangle;
}());