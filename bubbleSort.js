//Array values
var array = [2, 5, 1, 4, 8];

var swapped = false;

for(var n = 0; n < array.length - 1; n++) {
    
    for (var i = 0; i< array.length - 1 - n; i++ ) {
        if(array[i] > array[i+1])  {
            var temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            swapped = true;
        }
        else {
            swapped = false;
        }
        
    }
    
}
console.log("The sorted array is : " + array)
