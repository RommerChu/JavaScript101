'use strict';

console.log('-----Which Data Structure to use?-----');
// From the program itself: Data written directly in source code (e.g. status messages)
// From UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
// From external sources: Data fethced for example from web API (e.g. recipe objects)

// If a simple list use: Arrays or Set

// -------------Array-------------
// Use when you need ordered list of values (might contain duplicates)
// Use when you need to manipulate data
// Example:

// Array -> task = ['Code','Eat', 'Fashion']

// -------------Set-------------
// use when you need to work with unique values
// Use when high-performance is really important
// Example:

// task = new Set(['Code','Eat', 'Fashion'])

// -------------Object-------------
// More "Traditional" key/value store ("abused" object)
// Easier to write and access values with . and []
// Example:

// task = {
//     task: 'Code',
//     food: 'Eat',
//     repeate: true
// }

// -------------Map-------------
// Better performance
// Keys can have any data type
// Easy to iterate
// Easy to compute size
// Use when you simply need to map key to values
// Use when you need keys that are not strings
// Example:

// task = new map(
//     [ 'task', 'Code', ],
//     [ 'food', 'Eat' ],
//     [ false, 'Start coding' ]
// )
