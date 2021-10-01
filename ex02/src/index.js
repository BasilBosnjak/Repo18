let fifteenArray = [];
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for(let x = 1; x < 6; x++) {
        yield x;
    }
}

function* insideGenerator2() {
    for(let x = 10; x < 16; x++) {
        yield x;
    }
}

function* insideGenerator3() {
    for(let x = 6; x < 10; x++) {
        yield x;
    }
}

var iterator = myGenerator();

for (let i = 0; i < 16; i++) {
    if (i == 15) {
        fifteenArray[i] = iterator.next().value + "!";
    } else {
        fifteenArray[i] = iterator.next().value + "#,";
    }
}
console.log(...fifteenArray);
module.exports = {fifteenArray, myGenerator};