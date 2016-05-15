//Task1
function largest (a, b) {
	return (a > b) ? a : b;
}

console.log(largest (5,10));

console.log(".............................................")




function massiv(array) {
  for (i = 0; i < array.length; i++) {
    if (!isOdd(array[i])) {
		console.log(array[i]+ ' нечетное');
	} else {
		console.log(array[i]+ ' четное');
	}
  } 
}

function isOdd(number) {
	return number%2 === 0;
}
massiv([0,1,2,3,4,5,6,7,8,9]);
console.log(".............................................")




function check_string(is_Blank) {
  return is_Blank && is_Blank == "";
}
console.log(check_string(" "));
console.log(".............................................")




//Task2
function palindrome(str) {
    var strLen = str.length,
        strReverse = str.split("").reverse().join(""); 
    return (strReverse == str) ? "yes" : "no" 
  }
 console.log (palindrome("aa dd cc dd aa"));
 console.log(".............................................")
 
 
 
 
function longestWord(str)  {  
  var array1 = str.match();  
  var result = array1[0];  
  
  for (var x = 1 ; x < array1.length ; x++) {  
    if (result.length < array1[x].length)  {  
		result = array1[x];  
    }   
  }
  
  return result;  
}  
console.log(longestWord('Write a JavaScript function')); 
console.log(".............................................")




function bubbleSort(string) {
     var i, j, k, n = string.length;
  console.log ('Исходная строка: ' + string);
  console.log ('Количество элементов: ' + n);
    for (j = 0; j < n; j++) {
	   for (i = 0; i < n-1; i++) {
	     if (string[i] > string[i+1]) {
		   k = string[i];
		   string[i] = string[i+1];
		   string[i+1] = k;
		 }
	   }
	return('Новая строка ' + string);   
	}
}
console.log(bubbleSort(["a", "h", "a", "r", "s", "b", "c", "f"]));
console.log(".............................................")




function unique(str)  {  
 var str=str;  
 var uniq="";  
 
 for (var x=0;x < str.length;x++)  {  
  
	if (uniq.indexOf(str.charAt(x)) == -1)  {  
		uniq += str[x];    
	}  
 }
 
 return uniq;    
}    
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));  
console.log(".............................................")




function generate(str)  
{  
var array = [];  
  for (var x = 0, y=1; x < str.length; x++,y++)   
  {  
   array[x]=str.substring(x, y);  
    }  
var combination = [];  
var temp= "";  
var slent = Math.pow(2, array.length);  
  
for (var i = 0; i < slent ; i++)  
{  
    temp= "";  
    for (var j=0;j<array.length;j++) {  
        if ((i & Math.pow(2,j))){   
            temp += array[j];  
        }  
    }  
    if (temp !== "")  
    {  
        combination.push(temp);  
    }  
}  
  return(combination.join("\n"));  
}  
  
console.log(generate("dog"));  
console.log(".............................................")