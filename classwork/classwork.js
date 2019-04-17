let arr =[1,2,3,4,5];
if (arr[0] = 1){
arr[0] += 1;
} else if (arr[1] = 4){
    arr[1] = 2;
    console.log(arr[1]);

} else{
    console.log(arr[1]);
}


console.log(arr[0]);

//challenge #2
/*Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.*/




let movieInfo = {
    nameOfMovie : 'Twister',
    runTime : '113 minutes',
    characters : ['Jo Thornton', 'Bill Harding'],
    genre : 'Action',
}

movieInfo.characters[0] = { 
    Name :'jo',
    Age : 34 ,
    Items : ['truck', 'dorthy']}  
        