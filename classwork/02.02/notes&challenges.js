let arr = [{key: 'academy'}, undefined, true, ['brie', 'rob', [true, false], undefined], 1150];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3][2][1]);

// arr[1] = 'whatever i want';

// console.log(arr[1]);

for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

/*
Challenge 1:
Build an array that has a string, a boolean, another array, an object, and a number inside.  Write a separate
console.log to show every value within the array.  Once you've done that, use a for-of loop to console.log
every value within the array.  If you can get the for-of loop to work correctly, try this with a .forEach.

*/

let arr = ['hello', true, [0,1,2,3], {key : 'yes'}, 1150];
//show every value in the array "arr"
for (let i = 0; i < arr.length; i++)
console.log(arr[i]);
//use a for-of to show the same

for (let x of arr){
    x;
    console.log(x);
}

//now try it with a .forEach
arr.forEach((value) => {console.log(value)})
//in arr. for each "value" show me "value" in "arr"

/*
Challenge 2:
Build an array with the values: 'swimming', 'running', 'yoga', 'biking', 'climbing'.  Add the value
'stretching' with 'splice', but don't remove any contents in the array.  Add the value 'basketball' with
'splice', but *do* remove one element.  Finally, use 'slice' to cut and save a portion of your array to 
a separate variable.  Use console.logs between every 'splice' or 'slice' to confirm that your array is 
changing as you expect it to.
*/

let arr = ['swimming', 'running', 'yoga', 'biking', 'climbing'];
//use splice to add the string 'stretching' to the array

arr.splice(arr.length, 0, 'stretching');
console.log(arr);

//Add the value 'basketball' with 'splice', but *do* remove one element.

arr.splice(0,1,'basketball');
console.log(arr);

/*
use 'slice' to cut and save a portion of your array to 
a separate variable.  Use console.logs between every 
'splice' or 'slice' to confirm that your array is 
changing as you expect it to.
*/

let arr2 = arr.slice(0,2);
let arr3 = arr.slice(2,arr.length);
console.log('this is the first part if the array: ' + arr2);
console.log('this is the rest of the array: ' + arr3);

/*
Challenge 3:
This challenge has 2 parts.  First, create an object with 5 key-value pairs.  Using a Javascript feature 
demonstrated in your videos, create an array of all the keys in your object.  Use a for-of loop to
console.log every key in your keys array.
input: {key1: 'yeah!', key2: 1150, key3: true, key4: [1,2,3,4], key5: {innerKey: 'mind blown!'}}
output: key1, key2, key3, key4, key5
Once you've completed the above, use the .forEach method and your keys array to console.log all the values
in your object.  Show these values using [] notation but not using Object.values().
input: [key1, key2, key3, key4, key5]
output: 'yeah!', 1150, true, [1,2,3,4], {innerKey: 'mind blown!'}
*/

let obj1 = {
    key1 : 1,
    key2 : 2,
    key3 : 3,
    key4 : 4,
    key5 : 5,
}

let keys = Object.keys(obj); //Object.keys gives us the names of the keys in an array!
for (let val of keys){
    console.log(val);
}


//for (x in obj1){
//      let arr1 = x;
//      console.log(arr1);
//  }


arr1.forEach((value) => {console.log(value)})


//MAP()

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
