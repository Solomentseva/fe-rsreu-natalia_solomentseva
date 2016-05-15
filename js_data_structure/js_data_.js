console.log("Task 1")
    var today = new Date();  
    var day = today.getDay();  
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  
    console.log('Today is: ' + days[day]);  
console.log(".............................................")




console.log("Task 2")
 var currentDate = new Date();
 var day = currentDate.getDay();
 console.log( currentDate );
console.log(".............................................") 
 
 
 
 
console.log("Task 3")
var year; 
  for (year = 2014; year <= 2050; year++) { 
      var sunday = new Date(year, 0, 1 );         //1 January
    if ( sunday.getDay() == 0 )           //0 - воскресенье
        console.log(year);  
    }  
 console.log(".............................................")


 

console.log("Task 4")
today=new Date();  
        var newYear=new Date(today.getFullYear(), 11, 31);  
             if (today.getMonth()==11 && today.getDate()>31)   {
			 
              newYear.setFullYear(newYear.getFullYear()+1);   
        }    
    var count = Math.ceil((newYear.getTime() - today.getTime())/(24*60*60*1000));//кол-во миллисекунд в 1 дне
    console.log(count); 
 console.log(".............................................")


 
 
 console.log("Task 5")
 function isArray(input) {	
   return Array.isArray(input);     
}

console.log(isArray('qwe'));  
console.log(isArray([1, 2, 4, 0]));  
console.log(".............................................")
 
 

 
console.log("Task 6")
function clone(arr) {
     return arr.concat();
}

console.log(clone([1, 2, 3, 4, 5]));
console.log(".............................................")




console.log("Task 7")
var mostFrequnet = null,
mostFrequnetItem ;
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr.sort();
     for (var i=0;i<arr.length;i++){ 
         var single = arr[i]; 
         var total = (arr.lastIndexOf(single)-arr.indexOf(single))+1; 

          if(total > mostFrequnet) {
                mostFrequnetItem = arr[i];
                mostFrequnet = total;
                i= arr.lastIndexOf(single)+1;
       }
}
console.log(mostFrequnetItem);
console.log(".............................................")




console.log("Task 8")
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("abcdefg"));
console.log(".............................................")




console.log("Task 9")
var arr = [1,1,2,2,3,3,4,4,5,5,'aaaaa','aaaaa',5];
for (var i = 0; i < arr.length; i++) {
	for (var j = i+1; j < arr.length; j++) {
		if(arr[i] == arr[j]){
			arr.splice(j,1);
		}
	}
}
console.log(arr);
console.log(".............................................")




console.log("Task 10")
function shuffle(array) {
    var counter = array.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
console.log(shuffle([55,22,33,11,77]));
console.log(".............................................")




console.log("Task 11")
function removeDublicate(input) {
    var Arr = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i]) {
            Arr.push(input[i]);
        }
    }
    return Arr;
}
console.log(removeDublicate([NaN, 0, 55, false, 10, '', undefined, 19, null]));
console.log(".............................................")




console.log("Task 12")
var library = [   
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},  
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},  
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}  
   ];  
  
function librarySort(x,y)   
 {  
  if (x < y)  
    return -1;  
  if (x > y)  
    return 1;  
    return 0;  
 }  
  
console.log(library.sort(librarySort));  
console.log(".............................................")



console.log("Task 13")
function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}
var array1 = [1, 2];
var array2 = [2, 3];
console.log(array3 = arrayUnique(array1.concat(array2)));
console.log(".............................................")




console.log("Task 14")
function remove(arr) {
    delete arr[0]; 
 return(arr);
}
console.log(remove(["HTML", "CSS", "JavaScript"]));
console.log(".............................................")




console.log("Task 15")
function Random() {
     var arr = [1, 2, 3, 4];
     var rand = Math.floor(Math.random() * arr.length);
return( arr[rand] );
}
console.log(Random());
console.log(".............................................")

 
 

console.log("Task 16")
function moveEl(arr) {
   var i;
       i=arr[1];
       arr[1]=arr[2];
       arr[2]=i;
   return(arr);
}
console.log(moveEl([1,2,3,4,5,6,7]));
console.log(".............................................")




console.log("Task 17")
     var date1 = new Date("12/12/2012");
     var date2 = new Date("21/11/2012");
     var timeDiff = Math.abs(date2.getTime() - date1.getTime());
     var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays);
console.log(".............................................")




console.log("Task 18")
function maxDate(data){
    var max = '';
    for(var i=0; i<data.length; i++)
        if(data[i]>max)
            max=data[i];
   return(max);
}
console.log(maxDate('2015/02/01', '2015/02/02', '2015/01/03'));
console.log(".............................................")




console.log("Task 19")
function Words(str) {
      var str;
      var arr = str.split(', ');
           for (var i = 0; i < arr.length; i++) {
      return( arr[i] );
   }
}
console.log(Words('HTML, CSS, JavaScript, PHP, SQL'));
console.log(".............................................")




console.log("Task 20")
function First(str) {
  if (!str) return str;
     return str[0].toUpperCase() + str.slice(1);
}
console.log( First("asddf") );
console.log(".............................................")




console.log("Task 21")
camelize = function camelize(str) {  
      return str.replace(function(match, chr)  
       {  
            return chr.toUpperCase();  
        });  
    }  
  
console.log(camelize("JavaScript Exercises"));  
console.log(camelize("JavaScript exercises"));  
console.log(camelize("JavaScriptExercises"));  
console.log(".............................................")




console.log("Task 22")
  function getMax(arr) {
    var arrLen = arr.length,
        maxEl = arr[0];
    for (var i = 1; i < arrLen; i++) {
      if (maxEl < arr[i]) {
        maxEl = arr[i];
      }
    }
    return(maxEl);
  }
 console.log(getMax([1, 0, 12, -5, 2, -3, 5, 112, 21, 33]));
 console.log(".............................................") 
  
  
  

console.log("Task 23")
function getMin(arr) {
    var arrLen = arr.length,
        minEl = arr[0];
    for (var i = 1; i < arrLen; i++) {
      if (minEl > arr[i]) {
        minEl = arr[i];
      }
    }
    return(minEl);
  }
console.log(getMin([1, 0, 12, -5, 2, -3, 5, 112, 21, 33]));
console.log(".............................................") 
 
 
 
 

console.log("Task 24")
function number(x) {
 (isNaN(x)) ? console.log( "Строка преобразовалась в NaN. Не число" ) :
              console.log( "Число" );
 }
number(12);
console.log(".............................................")
 
 
 

console.log("Task 25")
  function sum(arr) {
    var arrLen = arr.length,
        result = 0;
    for (var i = 0; i < arrLen; i++) {
      result += arr[i];
    }
    return(result);
  }
 console.log(sum([1, 2, 5, 10, 11, 12, 21, -35, 77]));
 console.log(".............................................")
 
 
 

console.log("Task 26")
Object.size = function(obj) {
    var size = 0, key;
        for (key in obj) {
           if (obj.hasOwnProperty(key)) size++;
        }
console.log(size);
};
var size = Object.size({width: 300,
     height: 200,
     title: "Menu"
});
 console.log(".............................................")
 

 

console.log("Task 27")
 var menu = {
     width: 300,
     height: 200,
     title: "Menu"
};
for (var key in menu) {
  console.log( "Ключ: " + key + " значение: " + menu[key] );
}
 console.log(".............................................")
 

 
 
 
 
 
