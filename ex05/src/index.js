var myNestedArray = [
  ["Toblerone", 5],
  ["Milka", 3],
];

function myNestedFunction(arr) {
  return arr; //Vraća nested array
}

console.log(myNestedFunction(myNestedArray));

module.exports = myNestedFunction;
