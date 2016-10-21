
var sortArray = [9, 4, 0, 1, 5, 3, 8, 13, 10, 14, 11, 2, 7, 6, 12];

console.log("The unsorted array is : " + sortArray);

function mergeSort(array)
{
    if (array.length < 2)
        return array;
 
    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);
 
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
 
console.log("The sorted array is:  " + mergeSort(sortArray));

