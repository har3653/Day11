function multiplyArrayFunction(myArray) {
  var array2 = []; //za spajanje rezultata
  var product = 1; //mora jer se radi množenju
  var sum = 0; //za sumu može 0 jer je n+0=n

  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
      product = product * myArray[i][j];

      sum = sum + myArray[i][j];
    }
  }
  array2 = [product, sum];
  //return product; ne može, mora array da se spoji
  return array2;
}

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(
  multiplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
  ])
);

module.exports = multiplyArrayFunction;
