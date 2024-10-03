function countEvenNumbers(x,y) {
    let evenNumbers = [];
    for (let i = x; i <= y; i++) {
        if (i % 2 == 0) {
            evenNumbers.push(i);
        };
    }
};

countEvenNumbers(1,15);
console.log(`output: ${evenNumbers.length}(${evenNumbers})`);