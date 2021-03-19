function mySplice(arr1, arr2, n) {
  var nArr1 = [...arr2];
  var nArr2 = [];
  for (var i = 0; i < arr1.length; i++) {
    nArr2[i] = arr1[arr1.length - 1 - i];
  }
  nArr1.splice(n, 0, ...nArr2);
  return nArr1;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;
