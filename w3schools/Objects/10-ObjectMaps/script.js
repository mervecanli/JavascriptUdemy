/*
    Method Description

    new Map() => Creates a new Map object
    set() => Sets the value for a key in a Map
    get() => Gets the value for a key in a Map
    clear() => Removes all the elements from a Map
    delete() => Removes a Map element specified by a key
    has() => Returns true if a key exists in a Map
    forEach() => Invokes a callback for each key/value pair in a Map
    entries() => Returns an iterator object with the [key, value] pairs in a Map
    keys() => Returns an iterator object with the keys in a Map
    values() => Returns an iterator object of the values in a Map
    
    Property Description
    size => Returns the number of Map elements
*/

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
]);


const fruits2 = new Map();
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
fruits2.set("apples", 850);

fruits2.get("apples");
fruits2.size;
fruits2.delete("apples");
fruits2.clear();
fruits.has("apples");
fruits.delete("apples");
fruits2.has("apples");

typeof fruits; // returns object
fruits instanceof Map; // returns true

/*
    JavaScript Objects vs Maps:

    Object	;
    *Not directly iterable	
    *Do not have a size property	
    *Keys must be Strings (or Symbols)	
    *Keys are not well ordered	
    *Have default keys	

    Map;
    *Directly iterable
    *Have a size property
    *Keys can be any datatype
    *Keys are ordered by insertion
    *Do not have default keys
 */


// List all entries
let text="";
fruits.forEach(function(value, key) {
    text += key + ' = ' + value;
});

// List all entries
for(const x of fruits.entries()) {
    text += x;
}

// List all keys
for(const x of fruits.keys()){
    text += x;
}

// List all values
for(const x of fruits.values()) {
    text += x;
}

// Sum all values
let total=0;
for(const x of fruits.values()) {
    total += x;
}


// create objects
const apples = {name:'Apples'};
const bananas = {name:'Bananas'};
const oranges = {name: 'Oranges'};

// create a map
const fruits3 = new Map();

// add new elements to the map
fruits3.set(apples);
fruits3.set(bananas);
fruits3.set(oranges);
fruits3.get(apples);
fruits3.get("apples"); // returns undefined because the key is an object (apples), not a string ("apples")