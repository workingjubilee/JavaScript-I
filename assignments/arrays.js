// To help us use arrays with real world problems we are going to simulate a used car dealer that has 50 cars in their inventory.

// The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.

let inventory = [{"id":1,"car_make":"Lincoln","car_model":"Navigator","car_year":2009},
{"id":2,"car_make":"Mazda","car_model":"Miata MX-5","car_year":2001},
{"id":3,"car_make":"Land Rover","car_model":"Defender Ice Edition","car_year":2010},
{"id":4,"car_make":"Honda","car_model":"Accord","car_year":1983},
{"id":5,"car_make":"Mitsubishi","car_model":"Galant","car_year":1990},
{"id":6,"car_make":"Audi","car_model":"riolet","car_year":1995},
{"id":7,"car_make":"Smart","car_model":"Fortwo","car_year":2009},
{"id":8,"car_make":"Audi","car_model":"4000CS Quattro","car_year":1987},
{"id":9,"car_make":"Ford","car_model":"Windstar","car_year":1996},
{"id":10,"car_make":"Mercedes-Benz","car_model":"E-Class","car_year":2000},
{"id":11,"car_make":"Infiniti","car_model":"G35","car_year":2004},
{"id":12,"car_make":"Lotus","car_model":"Esprit","car_year":2004},
{"id":13,"car_make":"Chevrolet","car_model":"Cavalier","car_year":1997},
{"id":14,"car_make":"Dodge","car_model":"Ram Van 1500","car_year":1999},
{"id":15,"car_make":"Dodge","car_model":"Intrepid","car_year":2000},
{"id":16,"car_make":"Mitsubishi","car_model":"Montero Sport","car_year":2001},
{"id":17,"car_make":"Buick","car_model":"Skylark","car_year":1987},
{"id":18,"car_make":"Geo","car_model":"Prizm","car_year":1995},
{"id":19,"car_make":"Oldsmobile","car_model":"Bravada","car_year":1994},
{"id":20,"car_make":"Mazda","car_model":"Familia","car_year":1985},
{"id":21,"car_make":"Chevrolet","car_model":"Express 1500","car_year":2003},
{"id":22,"car_make":"Jeep","car_model":"Wrangler","car_year":1997},
{"id":23,"car_make":"Eagle","car_model":"Talon","car_year":1992},
{"id":24,"car_make":"Toyota","car_model":"MR2","car_year":2003},
{"id":25,"car_make":"BMW","car_model":"525","car_year":2005},
{"id":26,"car_make":"Cadillac","car_model":"Escalade","car_year":2005},
{"id":27,"car_make":"Infiniti","car_model":"Q","car_year":2000},
{"id":28,"car_make":"Suzuki","car_model":"Aerio","car_year":2005},
{"id":29,"car_make":"Mercury","car_model":"Topaz","car_year":1993},
{"id":30,"car_make":"BMW","car_model":"6 Series","car_year":2010},
{"id":31,"car_make":"Pontiac","car_model":"GTO","car_year":1964},
{"id":32,"car_make":"Dodge","car_model":"Ram Van 3500","car_year":1999},
{"id":33,"car_make":"Jeep","car_model":"Wrangler","car_year":2011},
{"id":34,"car_make":"Ford","car_model":"Escort","car_year":1991},
{"id":35,"car_make":"Chrysler","car_model":"300M","car_year":2000},
{"id":36,"car_make":"Volvo","car_model":"XC70","car_year":2003},
{"id":37,"car_make":"Oldsmobile","car_model":"LSS","car_year":1997},
{"id":38,"car_make":"Toyota","car_model":"Camry","car_year":1992},
{"id":39,"car_make":"Ford","car_model":"Econoline E250","car_year":1998},
{"id":40,"car_make":"Lotus","car_model":"Evora","car_year":2012},
{"id":41,"car_make":"Ford","car_model":"Mustang","car_year":1965},
{"id":42,"car_make":"GMC","car_model":"Yukon","car_year":1996},
{"id":43,"car_make":"Mercedes-Benz","car_model":"R-Class","car_year":2009},
{"id":44,"car_make":"Audi","car_model":"Q7","car_year":2012},
{"id":45,"car_make":"Audi","car_model":"TT","car_year":2008},
{"id":46,"car_make":"Oldsmobile","car_model":"Ciera","car_year":1995},
{"id":47,"car_make":"Volkswagen","car_model":"Jetta","car_year":2007},
{"id":48,"car_make":"Dodge","car_model":"Magnum","car_year":2008},
{"id":49,"car_make":"Chrysler","car_model":"Sebring","car_year":1996},
{"id":50,"car_make":"Lincoln","car_model":"Town Car","car_year":1999}];


// Example for loop:

// arr = [1,2,3,4];
// for (i = 0; i < arr.length; i++) {
//     arr[i]; // 1,2,3,4
// }

// ==== Challenge 1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by logging the car's year, make, and model in the console log provided to you below:

// First, I describe a perfectly generalist implementation to retrieve an array which has the values for a given key, array of values for a given key. Originally it was nested but I extracted it so I could fiddle with it in other things if needed.
function arrayListValueByKey(array,key) {
  let returnArray = []
  for (i = 0; i < array.length; i++) {
    returnArray.push(array[i][key]);
  };
  return returnArray;
}

function describeCarByID(IDnum){
  let returnArray = arrayListValueByKey(inventory,"id");
  // this is just an error log in case something breaks in my code.
  if (returnArray[0] === undefined) { console.log('Key array not extractable!')}
  // confirmation log
  else if (returnArray[0] !== false) { console.log('Key array extractable!'); };
  // I now invoke the result...
  // Now I invoke an indexOf on our use case and save it!
  let carIndex = returnArray.indexOf(IDnum);
  // Now I return a string describing the car at that index, so it can be console logged.
  return 'Car ' + IDnum + ' is a ' + inventory[carIndex]["car_year"] + ' ' + inventory[carIndex]["car_make"] + ' ' + inventory[carIndex]["car_model"] + '.';
};

console.log(describeCarByID(33));



// ==== Challenge 2 ====
// The dealer needs the information on the last car in their inventory.  What is the make and model of the last car in the inventory?  Log the make and model into the console.
// define "last"? if it's the last added to the array (presumably the last one)...
console.log(inventory.length);
// gratuitous console.logs are just testing to see if this was working at all.
let lastCar = inventory.length - 1;
console.log(lastCar);
console.log('The last car is a ' + inventory[lastCar]["car_make"] + ' ' + inventory[lastCar]["car_model"] + '.');

// ==== Challenge 3 ====
// The marketing team wants the car models listed alphabetically on the website. Sort all the car model names into alphabetical order and log the results in the console

const carModels = arrayListValueByKey(inventory,"car_model");
carModels.sort();
// array joined in order to make it prettier and reduce the impact on my test window.
console.log(carModels.join(' '));

// ==== Challenge 4 ====
// The accounting team needs all the years from every car on the lot. Create a new array from the dealer data containing only the car years and log the result in the console.

// oh whoops, I already created this function! ^.~
const carYears = arrayListValueByKey(inventory,"car_year");
// array joined on log in order to make it prettier and reduce the impact on my test window. again.
console.log(carYears.join(' '));

// ==== Challenge 5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the carYears array you just created, find out how many cars were made before the year 2000 by populating the array oldCars and logging it's length.

// this is really quick with filter, right?
const oldCars = carYears.filter(year => year < 2000);
console.log(oldCars.length);
// result was 25 on test.
// let's ALSO do this the tedious ways, I need LOTS OF PRACTICE y'know.
function whileCarsOlderThan(year) {
  // this is a solution to oldCars using a while loop, dangerous!
  let returnArray = arrayListValueByKey(inventory,"car_year");

    // don't use while loops at home, kids.
    // trying to see how tricksy I can get with the truth expression.
    // this uses a .some to verify there are remaining "targets"
  while (returnArray.some(num => num >= year) === true) {
    // then it finds a valid car_year that still exists...
    let yearFound = returnArray.find(num => num >= year);
    // the valid year is used to find a valid index...
    let indexKill = returnArray.indexOf(yearFound);
    // then we remove the item at that index using splice.
    returnArray.splice(indexKill,1);
  };
  // the while loop repeats until it no longer is satisfied and then we return it.
  return returnArray;
}
const oldCarsWhileMode = whileCarsOlderThan(2000);
console.log(oldCarsWhileMode.length);

let currentYear = 2019;
// function forCarsOlderThan(year) {
// // solution in progress to OldCars using a for-loop
//   let yearsToGo =
//   for (i=0, yearsToGo =
// }
//
// const oldCarsForMode = forCarsOlderThan(2000);
// console.log(oldCarsForMode.length);

// ==== Challenge 6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Return an array that only contains BMW and Audi cars.  Once you have populated the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
// let's do a for loop I guess?

// setting four parameters because I want to try a generic version.
function forTwoValueExtractor(array,key,value1,value2) {
  // setting up array...
  let returnArray = [];

  // standard for loop to iterate over all values in initial array
  for (i = 0; i < array.length; i++) {
    // double "if", checks to see if a value at an array index's key matches value1...
    if (array[i][key] === value1) {
      returnArray.push(array[i]);
    } else
    // but wait, there's more, it then checks to see if it matches value 2...
      if (array[i][key] === value2) {
        returnArray.push(array[i]);
    }
    // end of if/else-if returns to top of for, i++, and then we check the next array index.
  };
  // the real question is, does this save time compared to doing this operation twice and concatenating the arrays?

  return returnArray;
};

let forBMWAndAudi = forTwoValueExtractor(inventory,'car_make','BMW','Audi');
console.log(forBMWAndAudi[0]);

console.log(JSON.stringify(forBMWAndAudi));
