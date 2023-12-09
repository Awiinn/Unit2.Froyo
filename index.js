const userInputString = prompt(
  "What froyo would you like to order?",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee, coffee"
);
//splitting all user inputted values with a ,
const stringArray = userInputString.split(",");
//formed array of string values with a comma in between
const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i];
  flavors.push(flavor.trim());
}
console.log(flavors);

function findCount(flavors) {
  const froyoFlavors = {};
  let flavorCount = 0;
  for (i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    if (!(flavor in froyoFlavors)) {
      froyoFlavors[flavor] = flavor;
      flavorCount++;
    }
  }
  return flavorCount;
}

console.log("There are " + findCount(flavors) + " different flavors.");

// finding how many vanilla are in the array
function findVanilla(flavors) {
  const flavorCount = {};
  let count = 0;
  flavors.forEach((val) => {
    if (val === "vanilla") {
      count++;
    }
  });
  return count;
}
// finding how many strawberry are in the array
function findStrawberry(flavors) {
  const flavorCount = {};
  let count = 0;
  flavors.forEach((val) => {
    if (val === "strawberry") {
      count++;
    }
  });
  return count;
}
// fiding how many coffee are in the array
function findCoffee(flavors) {
  const flavorCount = {};
  let count = 0;
  flavors.forEach((val) => {
    if (val === "coffee") {
      count++;
    }
  });
  return count;
}
console.log("There are " + findVanilla(flavors) + " Vanilla froyos.");
console.log("There are " + findStrawberry(flavors) + " Strawberry froyos.");
console.log("There are " + findCoffee(flavors) + " Coffee froyos.");
