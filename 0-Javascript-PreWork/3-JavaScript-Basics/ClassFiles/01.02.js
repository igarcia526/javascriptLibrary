let newArr = [ 'brie' , 17 , true , {ketchup: true, pickles: false, meat: true}];
// arrays have numbered elements, the numbers are indexes, and the values are the lemenets 

console.log(newArr[3]);
newArr[3].pickles = true;
//newArr[3] = 'zach is one bad dude with styling';
//console.log(newArr[3]);

//how to change the pickles to false,

console.log(newArr[3].pickles);

//conditionals

let isRainy = true;
let isWarm = false;

if (isRainy){          //<-------- makes sure to use 2 equal signs, 1 = will set a differnt value rther than check
console.log('bring your umbrella');
}else{
    console.log('leave the umbreall at home');
}

if (isWarm){
console.log('wear shorts');
} else {
    console.log('wear a parka');

}

let gpas = [1.9, 3.5, 4.0, 2.8];
let singleGpa = gpas[1];

if (singleGpa == 4.0){
    console.log('wow, thats amazing');
} else if( singleGpa >= 3.0){
    console.log('thats a strong gps');

}else{
    console.log('eh, hit the books');
}
