'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    const reverseArr = []
    var sum = 1
    for(let i = 0; i < arr.length; i++){
        var positionArray = i + (arr.length - sum)
    
        let newN = arr[positionArray]
        sum += 2
        reverseArr.push(newN)
    }
   console.log(reverseArr.join(' '))
}
