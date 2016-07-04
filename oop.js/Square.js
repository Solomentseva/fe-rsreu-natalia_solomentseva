(function () {
	function Square(a,b,c,d) {
		this.type="square";
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		
		this.draw = function () {
			console.log('square');
		};
	}
	
	Square.prototype = new Shape();

	Square.prototype.getPerimeter = function() {
	  return this.a + this.b + this.c + this.d;
	}
	
	window.Square = Square;
}());