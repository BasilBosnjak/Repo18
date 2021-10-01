let arrKey = [];
let arrValue = [];
let shoppingList = new Map ([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5]
])
const iterator = shoppingList.entries();
const iterator1 = shoppingList.keys();
const iterator2 = shoppingList.values();
for (let i = 0; i < 5; i++) {
    arrKey.push(iterator1.next().value);
    console.log(`groceries: ${arrKey[i]}`);
}
for (let i = 0; i < 5; i++) {
    arrValue.push(iterator2.next().value);
    console.log(`amount: ${arrValue[i]}`);
}
for (let i = 0; i < 5; i++) {
    console.log(iterator.next().value);
}
module.exports = { shoppingList, arrKey, arrValue};