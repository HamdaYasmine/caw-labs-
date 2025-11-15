const notation = require('./notation.js');

function calculateAverages() {
    const testScores1 = [12, 15, 10, 17, 19];
    const testScores2 = [9, 13, 12, 16, 15, 19];

    console.log("Average of test scores 1:", notation.mean(testScores1));
    console.log("Average of test scores 2:", notation.mean(testScores2));
}

module.exports = { calculateAverages };


if (require.main === module) {
    calculateAverages();
}