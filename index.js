const userInputString = prompt(
  "What froyo would you like to order?",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee, coffee"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");
// stringArray = ["1", "2", "3", "4", "5"]
// Convert the array of strings into an array of numbers.
const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i];
  flavors.push(flavor);
}
console.log(flavors);

// const flavorVanilla = {
//     name: "vanilla"
// }

// const flavorStrawberry = {
//     name: "strawberry"
// }
const froyoFlavors = [
  {
    name: ["vanilla", "strawberry", "coffee"],
  },
];
//if statement not working properly
// function froyoAmount(flavors) {
//   let amount = 0;
//   for (let i = 0; i < flavors.length; i++) {
//     if (flavors[i] === froyoFlavors[i]) amount++;
//   }
//   return amount;
// }

// console.log(`You have ordered ${froyoAmount(flavors)} froyos.`);

function findCount(flavors, froyoFlavors) {
  let flavorCount = 0;
  for (i = 0; i < flavors.length; i++)
    if (flavors[i] === froyoFlavors.name) {
      flavorCount++;
    }

  return flavorCount;
}
console.log("There are " + findCount(flavors) + "orders.");
