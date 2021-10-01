let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueArray = [];
let mySet = new Set();
for (let i = 0; i < numberArray.length; i++) {
    mySet.add(numberArray[i]);
}
for (let item of mySet) {
    uniqueArray.push(item);
}
uniqueArray.sort(function(a, b) {return a - b});
console.log(uniqueArray);
module.exports = { numberArray, uniqueArray};