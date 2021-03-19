var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  myNewPets.push("Bird");
  var broj = myNewPets.push("Fish");

  var firstPet = myNewPets[0];
  var lastPet = myNewPets[3];

  myNewPets.unshift("Lion");

  myNewPets.pop();
  myNewPets.shift();
  myNewPets.shift();
  myNewPets.unshift("lion");

  return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
