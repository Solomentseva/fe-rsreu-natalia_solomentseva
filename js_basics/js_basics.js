//Task 1
var message = "Hello";
console.log( message );

var name = "John";
console.log( name );


//Task 2
function area(a, b, c) {
   var p = (a+b+c)/2;
   var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
   
   return s;
}

console.log(area(5, 10, 10));


//Task 3
function reverseFor(array) {
   var i;
   
   for (i = array.length; i>=0; i-- ) {
     console.log (array[i]);
   }
}
reverseFor(["a","b","c"]);


function reverseWhile(array) {
   var i = array.length; 
   
   while (i >= 0) {
     console.log (array[i]);
	 i--;   
   }
 } 
reverseWhile([1,2,3]); 
 

function reverseDoWhile(array) {
   var i = array.length; 
   do {
      console.log (array[i]);
	  i--; 
   } while (i >= 0);
 }
reverseDoWhile([7,8,9]);
 
   
//Task 4
var i = 1;
var a = ++i; 
console.log(a);

var i = 1;
var b = i++; 
console.log(b);


//Task 5
function check(number) { 
  if (number < 0) {
    console.log("negative");
   } 
   else if (number > 0) {
    console.log("positive");
   } 
   else {
    console.log("0");
   }
}
check(55);

//Task 6
var name = prompt('Your name', '');
alert ('Your name is ' + name);

//Task 7
function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));