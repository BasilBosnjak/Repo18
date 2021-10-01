let rockStar = new Map ([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

let array = [...rockStar.keys()];
let iterator1 = rockStar.keys();
let iterator2 = rockStar.values();

let newRock = new Map ([]);
for (let i = 0; i < 4; i++) {
    if (array[i].charAt(0) > 'a') {
        newRock.set(iterator1.next().value, iterator2.next().value);
    } else {
        iterator1.next().value;
        iterator2.next().value;
    }
}
console.log(newRock);
module.exports = { rockStar, newRock };