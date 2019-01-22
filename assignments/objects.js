// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Do you think I'm going to add quotation marks to each and every single one of these items so that I can turn it into a bunch of strings? Nonsense! I'm a PROGRAMMER! -Jubilee

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// defining a class with a constructor so I can assembly-line these.
class Intern {
  constructor(id,email,name,gender) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.gender = gender;
  }
}
console.log(Intern);

// Write your intern objects here:

// Today I aspire to transcendent laziness.
let internArray = ['1,mmelloy0@psu.edu,Mitzi,F', '2,kdiben1@tinypic.com,Kennan,M', '3,kmummery2@wikimedia.org,Keven,M', '4,gmartinson3@illinois.edu,Gannie,M', '5,adaine5@samsung.com,Antonietta,F']

internArray.push('9,none@nowhere.mu,nonner');
// added to satisfy a curiosity as to "what happens if you have insufficient values?"
// result was: Intern { id: 9, email: 'none@nowhere.mu', name: 'nonner', gender: undefined }

function internBreaker(array) {
  // Sounds hostile, doesn't it? building inwards-out, step by step, here...
  let returnArray = [];
  // just your standard "iterate over everything" for loop.
  for (i = 0; i < array.length; i++) {
    // put the resulting array into a new array that will be used, processing it with "split" so we've got an array of arrays soon enough!
    returnArray.push(array[i].split(','));
  }
  // returning a new array.
  return returnArray;
};
let internArrayOfArrays = internBreaker(internArray);

function internNumberFixer(array) {
  // just your standard "iterate over everything" for loop.
    for (i = 0; i < array.length; i++) {
      // this gets the current index's first item which should be a string and turns it into a number if possible.
      let parsedNumber = parseInt(array[i][0]);
      // so it mutates the first index of each index in the array as it is loops.
      array[i].splice(0,1,parsedNumber);
    };
}

// testing to see if this works like I think it will...
// console.log(internNumberFixer(internUnfixed));
// yes, test passed! deprecated variable name.

internNumberFixer(internArrayOfArrays);
// declaring a new variable here is not a necessary step because the previous array can be used! it has been mutated.

function autoObjectifier(proto,array) {
  // I have lost my mind.
  // this takes a constructor object and an array of arrays, then, counting based on the "top" array
  // using the array's array as values it creates a new Intern object which is pushed onto a new array.
  let returnArray = [];
  for (i = 0; i < array.length; i++) {
    // Normal for loop, except...
    returnArray.push(new Intern(array[i][0],array[i][1],array[i][2],array[i][3]));
  };
  return returnArray;
};

const internList = autoObjectifier(Intern,internArrayOfArrays);
console.log(internList);


// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

console.log(internList[0]['name']);

// Kennan's ID

console.log(internList[1]['id']);

// Keven's email

console.log(internList[2]['email']);

// Gannie's name

console.log(internList[3]['name']);

// Antonietta's Gender

console.log(internList[4]['gender']);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

function say() {
  return 'Hello, my name is ' + this.name + '.';
};
internList[1].speak = say;
// note to self: do not add a () when ADDING a method!
console.log(internList[1].speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

function multiplyNums(one,two) {
  return one * two;
}
internList[4].multiplyNums = multiplyNums;
console.log(internList[4].multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

// In the spirit of the progress I've made so far...
class Human {
  constructor(name,age) {
  this.name = name;
  this.age = age;
  this.greets = function() {return 'Hi! My name is ' + this.name + '.'};
  this.spawn = function(newname,newage) {
    this.child = new Human(newname,newage);
  }
}

};

const ancestor = new Human('Sarah',70);
ancestor.spawn('George',50);
ancestor.child.spawn('Sam',30);
console.log(ancestor);


// Log the parent object's name
console.log('The Grandmother\'s name: ' + ancestor.name);

// Log the child's age
console.log('Age of the Father: ' + ancestor.child.age);

// Log the name and age of the grandchild
console.log('The Grandson: ' + ancestor.child.child.name + ' at age ' + ancestor.child.child.age + '.');

// Have the parent speak
console.log(ancestor.greets());

// Have the child speak
console.log(ancestor.child.greets());

// Have the grandchild speak
console.log(ancestor.child.child.greets());
