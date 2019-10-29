//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// should take an object values, and return them into an array
function objectValues(object) {
    
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // arr = array to contain values form object using .values
var arr = Object.values(object);
// newarr = array to contain the values filtered from for loop
var newarr = [];
console.log(arr);
//for loop goes through each index (i) of arr
for (var i = 0; i <= arr.length-1; i++){
    //if statment checks if the type of values at the (i) index is string type
  if (typeof arr[i] === "string"){
    console.log(arr[i]);
    //pushes value at the (i) index to newarr
    newarr.push(arr[i]);
  }
  // sets newarr variable to arr.join(" "); whichs concats the array as a string. If you left () blank, it will join with a , instead
} newarr = newarr.join(" ");
//returns newarr which is now a string
return newarr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === Array.isArray()) {
        return 'object';
    } else if (typeof collection === 'object') {
        return 'array';
    } else return;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
      var array1 = string.split(' ');
  var newArray = [];
    
  for(var i = 0; i < array1.length; i++){
      newArray.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
  }
  return newArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1, object.name.length) + "!"; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {


return object.name[0].toUpperCase() + object.name.slice(1, object.name.length) + " is a " + object.species[0].toUpperCase() + object.species.slice(1, object.species.length); 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  if (!object.noises || object.noises == "") {
      return "there are no noises";
  } else {
      return object.noises.join(" ");
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    
    if (string.includes(word) === true) {
        return true;
    }
     return false;
}



//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//  Should take a name and an object and add the name to the object's friends array then return the object"
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", 
if (typeof(object.friends) !== 'undefined' &&  object.friends.includes(name)) {
    return true;
} return false;
} 

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let nameList = [];
    let notFriends = [];
    let currentPerson;
    for (let i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            currentPerson = array[i];
        }
        else {
            nameList.push(array[i].name);
        }
    }
    for (let j = 0; j < nameList.length; j++) {
        if (currentPerson.friends.indexOf(nameList[j]) === -1) {
            notFriends.push(nameList[j]);
        }
    }
    return notFriends;
}





//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (let key in object){
 if (array.includes(key)){
  //console.log(key)
  //console.log(object[key])
     delete object[key];
 }
}
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
return Array.from(new Set(array));
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}