// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jamesmonroe504');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/**
 ### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter` 
*/
var maleCount = function(array) {
function test(element, index, array) {
    if (array[index].gender === 'male') {
        return true;
    }
}
    return _.filter(array, test).length;
};

/*
### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`
 */
var femaleCount = function(array) {
    function test(prevVal, element, index) {
        let females = 0;
        if (array[index].gender === 'female') {
            females++;
        } 
        return prevVal + females; 
    }
    return _.reduce(array, test, 0);
};

/**
 *### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**: Use each lil bruddah
 */ 

var oldestCustomer = function (array){
    let oldestName = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i].age > array[oldestName].age){
            oldestName = i;
        }
    }
    return array[oldestName].name;
};



/* ### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
*/

   
   var youngestCustomer = function (array){
    let youngestName = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i].age < array[youngestName].age){
            youngestName = i;
        }
    }
    return array[youngestName].name;
};

   
 
//  **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:
var averageBalance = function(array){
   var averageB =  _.reduce(array, function(previousValue, customer, i, array){
           var remove = customer.balance.slice(1);  //sliced off dollar signs
          
           //eliminate special characaters in customers balances
           remove = remove.split(",").join("");// split and join to remove commas
           remove = Number.parseFloat(remove);
           previousValue += remove;
           
           return previousValue;
    }, 0);
    return averageB  / array.length; // to get the average 
};


var firstLetterCount = function (array, letter) {
   return _.reduce(array, function(count, array) {
       if(array.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
           count += 1;
           return count;
       }
       return count;
   }, 0);
};
// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:
var friendFirstLetterCount = function(array, customer, letter) {
    var customerObject = _.filter(array, c => c.name === customer)[0];
    return _.filter(customerObject.friends, friend => 
        friend.name.toLowerCase().startsWith(letter.toLowerCase())).length;
};

var friendsCount = function(array, name) {
    return _.pluck(_.filter(array, customer => 
        _.some(customer.friends, friend => 
            friend.name === name)), "name");
};

var topThreeTags = function(array){
    //pushes all tags into array
    let allTags = [];
    _.each(array, function(e, i, a){
       allTags.push(e.tags); 
    });
    //flattens array for manipulation
    allTags = _.reduce(allTags, function(prev, curr){
        return prev.concat(curr);
    });
    let tagCountObj = _.reduce(allTags, function(seed, tag){
       if(seed[tag]){
           seed[tag]++;
       }else{
           seed[tag] = 1;
       }
       return seed;
    }, {});
    let result = [];
    for(let key in tagCountObj){
        result.push([key, tagCountObj[key]]);
    }
    let result1 = [];
    _.filter(result, function(e, i, a){
        if(e[1] > 2){
            result1.push(e[0]);
        }
    });
    return result1;
};
//make counter for all tags, look up sort function and use that one
var genderCount = array => {
    var result = {};
    _.each(_.pluck(array, "gender"), gender =>
        result.hasOwnProperty(gender) ? result[gender] += 1 : result[gender] = 1);
    return result;
};

var genderCount = function(array)  {
    var result = {};
    _.each(_.pluck(array, "gender"), gender =>
        result.hasOwnProperty(gender) ? result[gender] += 1 : result[gender] = 1);
    return result;
};


// var arrOfLetter = [ "a", "b", "c"];

// let wordFromLetters = _.reduce(arrOfLetter, function(accum, currentValue) { 
// accum += currentValue;

// return accum;
// }, " ");
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
