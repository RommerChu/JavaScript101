'use strict'

//Array

console.log( "---------------ARRAY---------------" )

const friends = [ "Michael", "Steven", "Peter" ]; //literal sentence
console.log( friends );//to show all items in the array
console.log( friends[ 2 ] );// to get specific item in the array
console.log( friends.length ); // shows total number of data in arrays
console.log( friends[ friends.length - 1 ] ); //get the last item in the arrays
friends[ 2 ] = "Rommer"; //To replace value on index[2]="Peter"
console.log( friends );


const y = new Array( 1991, 1992, 1993, 1994, 1995 );
console.log( y );

const firstName = "Rommer";
const yearNow = 2023;
const rommer = [ firstName, 'Chu', yearNow - 1972, 'Orangeville', friends ];
console.log( rommer );
console.log( rommer.length );


//Exercise
const calAge3 = function ( birthYear ) {
    return 2023 - birthYear
}

const years = [ 1991, 1992, 1993, 1994, 1995 ];

//console.log( calAge3( years ) ); // will not work

const age1 = calAge3( years[ 0 ] );
const age2 = calAge3( years[ 1 ] );
const age3 = calAge3( years[ years.length - 1 ] );
console.log( age1, age2, age3 );

//Put all together the age variable into one Array
const age = [
    calAge3( years[ 0 ] ),
    calAge3( years[ 1 ] ),
    calAge3( years[ years.length - 1 ] )
];
console.log( age );



//----------Add elements to Array
const friendsy = [ "Michael", "Steven", "Peter" ];
console.log( friendsy );

//friendsy.push( "Jay" );
const newLength = friendsy.push( "Jay" );//Last index to add use PUSH()
//friendsy.push( friendsy[ 0 ] = "Jay" );
console.log( friendsy );
console.log( newLength );

friendsy.unshift( 'John' ); //First index to add use UNSHIFT()
console.log( friendsy );

friendsy.pop(); //Last index to remove - POP()

const popped = friendsy.pop(); //can store in a variable to use print what has been removed
//friendsy.pop( friendsy[ friendsy.length - 1 ] );
console.log( popped + " Removed name" );
console.log( friendsy );

friendsy.shift();//First index to remove - SHIFT()
console.log( friendsy );

//INDEXOF - will return index
console.log( friendsy.indexOf( "Steven" ) );// To see index place
console.log( friendsy.indexOf( "Bob" ) );// Return -1 'No BOB is listed'


//INCLUDES - will return boolean
console.log( friendsy.includes( "Steven" ) );// Return is TRUE
console.log( friendsy.includes( "Bob" ) );// Return is FALSE 'No BOB is listed'

if ( friendsy.includes( "Steven" ) ) {
    console.log( "You have a friend named Steven" )
}
