//Tasks
 function isArray(input) {	
   return Array.isArray(input);     
}

console.log(isArray('qwe'));  
console.log(isArray([1, 2, 4, 0]));  





function arrayClone(arr) {

    var i, copy;

    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else {
        return arr;
    }

}
console.log(arrayClone([1,1,2,2,3,3,5,5,5]));





   
	function frequentItem(array) {
	    if (array.length == 0) return [null, 0];
	   var n = max = 1, maxNum = array[0], pv, cv;

	   for(var i = 0; i < array.length; i++, pv = array[i-1], cv = array[i]) {
		  if (pv == cv) { 
			if (++n >= max) {
			   max = n; maxNum = cv;
			}
		  } else n = 1;
	   }

	   return maxNum;
	}
	
	console.log(frequentItem([1,1,2,3,4,5,6,7]))


	
	
function duplicateStrings(arr) {
for (var i = 0; i < arr.length; i++) {
	for (var j = i+1; j < arr.length; j++) {
		if(arr[i] == arr[j]){
			arr.splice(j,1);
		}
	 }
  }
}
console.log(duplicateStrings([1,1,2,2,3,3,4,4,5,5,'aaaaa','aaaaa',5]));





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




var library = [   
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},  
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},  
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}  
   ];  
  
function librarySort(x,y)  {  
  if (x < y) {
    return -1;
  }	
  
  if (x > y) {
    return 1; 
  }
  
  return 0;  
 }  
  
console.log(library.sort(librarySort));




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




function remove(arr) {
    delete arr[0]; 
 return(arr);
}
console.log(remove(["HTML", "CSS", "JavaScript"]));




function random() {
     var arr = [1, 2, 3, 4];
     var rand = Math.floor(Math.random() * arr.length);
return( arr[rand] );
}
console.log(random());




function moveEl(arr) {
   var i;
       i=arr[1];
       arr[1]=arr[2];
       arr[2]=i;
   return(arr);
}
console.log(moveEl([1,2,3,4,5,6,7]));




function words(str) {
      var str;
      var arr = str.split(', ');
           for (var i = 0; i < arr.length; i++) {
      return( arr[i] );
   }
}
console.log(words('HTML, CSS, JavaScript, PHP, SQL'));




function first(str) {
  if (!str) return str;
     return str[0].toUpperCase() + str.slice(1);
}
console.log( first("asddf") );



function camelize(str) {  
      return str.replace(function(match, chr)  
       {  
            return chr.toUpperCase();  
        });  
    }  
  
console.log(camelize("JavaScript Exercises"));  
console.log(camelize("JavaScript exercises"));  
console.log(camelize("JavaScriptExercises"));  




function objectLenght() {
      var myArray = { "key1":"value1", "key2":"value2", "key3":"value3"}
          Object.keys(myArray);
          Object.keys(myArray).length
      console.log(Object.keys(myArray).length);
}
objectLenght();





console.log(".............................................")
console.log(".............................................")
console.log(".............................................")





//Closure
var notifier = (function(main) {
 
   function isArray(input) {          
        return Array.isArray(input);
    }
	
	
	
	
	function arrayClone(arr) {
	       var i, copy;

                  if( Array.isArray( arr ) ) {
                    copy = arr.slice( 0 );
                      for( i = 0; i < copy.length; i++ ) {
                       copy[ i ] = arrayClone( copy[ i ] );
                    }
                     return copy;
                  }  else {
                  return arr;
          }
	}
	
	
	
	
	function frequentItem(array) {    
	    if (array.length == 0) return [null, 0];
	   var n = max = 1, maxNum = array[0], pv, cv;

	   for(var i = 0; i < array.length; i++, pv = array[i-1], cv = array[i]) {
		  if (pv == cv) { 
			if (++n >= max) {
			   max = n; maxNum = cv;
			}
		  } else n = 1;
	   }

	   return maxNum;
	}
	
	
	
	function duplicateStrings(arr) {   
	    for (var i = 0; i < arr.length; i++) {
	for (var j = i+1; j < arr.length; j++) {
		if(arr[i] == arr[j]){
			arr.splice(j,1);
		    }
	     }
       }
	  return arr;
	}
	
	
	
	function shuffle(array) {           
	   return array;
	}
	
	
	
	
	function arrayUnique(array) {        
	    return a;
	}
	
	
	
	function remove(arr) {            
	    delete arr[0];
		return(arr);
	}
	
	
	
	function random() {                   
	   var arr = [1, 2, 3, 4];
       var rand = Math.floor(Math.random() * arr.length);
       return( arr[rand] );
	}
	
	
	
	function moveEl(arr) {             
	     var i;
         i=arr[1];
         arr[1]=arr[2];
         arr[2]=i;
         return(arr);
	}
	
	
	
	function words(str) {            
	     var str;
         var arr = str.split(', ');
            for (var i = 0; i < arr.length; i++) {
              return( arr[i] );
        }
    }
	
	
	
	function first(str) {                
         if (!str) return str;
         return str[0].toUpperCase() + str.slice(1);
    }
	
	
	
	function camelize(str) {               
            return str.replace(function(match, chr)  
          {  
            return chr.toUpperCase();  
        });  
    }  
	
	
	
	 function sortLibrary() {
        return library.sort(librarySort);
    } 

	
   return {
     isArray: isArray,
	 frequentItem: frequentItem,
	 duplicateStrings: duplicateStrings,
	 shuffle: shuffle,
	 arrayUnique: arrayUnique,
	 remove: remove,
	 random: random,
	 moveEl: moveEl,
	 words: words,
	 first: first,
	 camelize: camelize,
     arrayClone: arrayClone,
	 sortLibrary: sortLibrary
	
	};
	

}());

console.log(notifier.isArray('qwe'));
console.log(notifier.arrayClone([1,1,2,2,3,3,5,5,5]));
console.log(notifier.frequentItem([1,1,2,3,4,5,6,7]));
console.log(notifier.duplicateStrings([1,1,2,2,3,3,4,4,5,5,'aaaaa','aaaaa',5]));
console.log(notifier.shuffle([55,22,33,11,77]));
console.log(notifier.array3 = arrayUnique(array1.concat(array2)));
console.log(notifier.remove(["HTML", "CSS", "JavaScript"]));
console.log(notifier.random());
console.log(notifier.moveEl([1,2,3,4,5,6,7]));
console.log(notifier.words('HTML, CSS, JavaScript, PHP, SQL'));
console.log(notifier.first("asddf"));
console.log(notifier.camelize("JavaScript Exercises"));  
console.log(notifier.camelize("JavaScript exercises"));  
console.log(notifier.camelize("JavaScriptExercises"));  
console.log(notifier.arrayClone([1,1,2,2,3,3,5,5,5]));
console.log(notifier.first("asddf"));
console.log(notifier.sortLibrary());


