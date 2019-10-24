/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
## Step 1 - Object Creation
 1. [ ] Open up the file data.js.
 1. [ ] Create a variable named `animal` and assign it to an empty object.
 1. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
 1. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
 1. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
 1. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
 1. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.

*/ 
var animal = {};
animal.species = "cat";
animal['name'] = "Blake";
animal['noises'] = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 /*
  * 1. [ ] Create a variable named `noises` and assign it to an empty array.
 2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
 3. [ ] Using an array function add another noise to the end of `noises`.
 4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
 6. [ ] Add an element to `noises` using this function.
 7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
 8. [ ] `console.log` the length of `noises`
 9. [ ] `console.log` the last element in `noises` again without hard coding the index.
 10. [ ] `console.log` the whole array.
 11. [ ] Does it look right?
  */
var noises = [];
noises[0] = "Meow";
noises.push("Purr");
noises.unshift("Love You");
noises[noises.length] = "Hiss";
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
noises.push("Growl");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Dot Notation and Bracket Notation
 * 2. What are the different ways of accessing elements on arrays?
 * Bracker Notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * 
 * 
 * ## Step 6 - A Collection of Animals
 1. [ ] Create a variable named `animals` and assign it to an empty array.
 2. [ ] `push` our `animal` that we created to `animals`.
 3. [ ] `console.log` `animals`. What does it look like?
 4. [ ] Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 5. [ ] `push` `duck` to `animals`
 6. [ ] `console.log` `animals`. What does it look like?
 7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?

 * 
 */
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {species: "duck",
            name: "Jerome",
            noises: ["quack", 'honk', "sneeze", "woosh"]
            };
animals.push(duck);

var dog = {species: "dog",
           name: "Snow",
           noises: ["Woof", "Bark", "Growl"]
           };
animals.push(dog);

var tiger = {species: "tiger",
             name: "Strawberry",
             noises: ["Roar", "Growls", "Purr"]
             };
animals.push(tiger);

console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * 1. [ ] Choose a data structure for this **list** of friends.
 2. [ ] Write a comment in your code that explains why you chose this data structure.
 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns the `index` of a random element using `Math.random`
 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
 7. [ ] `console.log` `friends`.
 8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`
 9. [ ] `console.log` your work.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
var friends = []; // I chose an array because it can store different datatypes and its easier to access

function getRandom(animals) {

var minNum = 0;
var maxNum = animals.length - 1;
var index = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

 var randomAnimal = animals[index];
 
  return randomAnimal;
}

friends.push(getRandom(animals).name);

 // 8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`//
  animals[1].friends = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
