// A js SET is a collection of unique values.
// Each value can only occur in a SET.
// A SET can hols any value of any data type.


/* 
    SET Methods

    new Set() => creates a new Set
    add() => adds a new element to the Set
    delete() => removes an element from a Set
    has() => returns true if a value exists
    clear() => removes all elements from a Set
    forEach() => invokes a callback for each element
    values() => returns a iterator with all the values in a Set
    keys() => same as values
    entries() => returns an iterator with the [value, value] pairs from a Set

    Set Property
    size => return the number elements in a Set
*/


// the new set() method
const letters = new Set(["a","b","c"]);

const letters2 = new Set();
letters2.add("a");
letters2.add("b");
letters2.add("c");


const a="a";
const b="b";
const c="c";
const letters3 = new Set();
letters3.add(a);
letters3.add(b);
letters3.add(c);
// note that if you add equal elements, only the first will be saved


const letters4 = new Set(["a","b","c"]);
let text = "";
letters4.forEach(function(value){
    text += value;
});


letters4.values(); // returns [object Set Iterator]


const myIterator = letters4.values();
let textIterator="";
for(const entry of myIterator){
    textIterator += entry;
}


const myIterator2 = letters4.entries();
let textIterator2="";
for(const entry of myIterator2) {
    textIterator2 += entry;
}

console.log(typeof letters4); // return object
letters4 instanceof Set;  //return true