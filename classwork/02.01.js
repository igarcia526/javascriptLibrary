for(let i = 0; i <= 10; i = i + 1){
console.log(i);
}

//for-in example
let parentThing = [1, 'trcyt', false, {key : 'plaything'}]
for (let thing in parentThing){ //enumerable collections 

console.log(thing) //this output shoes the INDEX of array
}

//for-in example
let parentThing = [1, 'trcyt', false, {key : 'plaything'}]
for (let thing in parentThing){ //enumerable collections 

console.log(parentThing[thing]) //this output shows the VALUES of array
}

//for-in example 3

let obj = {
    keyA : true,
    keyB : 'Alan',
    keyC : [1, 2, 3]
}

for( let thing in obj){
    console.log(obj[thing])
    console.log(obj['keyA'])
}


let obj2 = {
    first : '1150 academy',
    second : 1150,
    third : false
}
for( let thing in obj2){
    console.log(obj2[thing])
}


/*
Challenge 1:
Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should
console.log a random number between 0 and 1.  Once you've completed the challenge with a for-loop, see if
you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with
a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
a for loop requires.
*/

function myFunc(){console.log(Math.random())}

for ( let i = 0; i < 10; i++){
    
myFunc(i)

}

function myFunc(){
    for( let i = 0; i <10; 1++){
        
        console.log(Math.random()(i))
    }
}
    


for ( let num of myFunc){
    console.log(i);
}

//make a function that takes two parameters: favFood and faveDessert, your
//function should return a sentence with those two parameters inside.

function favFood (x , y){
    console.log('My favorite food is:' + x + ' and my favorite dessert is:' + y + ".");
}

favFood('Tacos', 'Cupcakes');


/*
Challenge 2:
Let's compose functions!  Your first function should take a function as input and return that function
with a function call.  Your second function should take a string as input and return that string with 
extra stuff added to that string.  Console.log the results of your function calls.  Additional information
is below to help clarify what you're doing (the below is just an example):
first function: input-secondFunc output-secondFunc('coding is great!')
second function: input-'coding is great!' output-'coding is great!  pie is, too!'
*/

function funcOne (first){
   return first('tacos');
}

function funcTwo(x){
    return x + ' are awesome!';
}

console.log(funcOne(funcTwo));

//challenge 3
//make 2 functions, the first function takes a function as input
//and calls that input function with a number value. the second func
// takes a number as input and concatonates that number with
//a string, the 2nd func should return the concatonation, the 1st
//func should return the call


function funcOne (input){
    return input(4);
}

function funcTwo(x){        //func 2 only runs because of func 1
    return x + ' is a great number!';
}


console.log(funcOne(funcTwo))