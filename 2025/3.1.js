const fs = require('fs');
const sequence = fs.readFileSync("./2025/3.txt").toString('utf-8').split('\n');
let sum = 0
let res = ''
for(let line of sequence){
    console.log('line is: ' + line)
    let numLine = line.split('');
    let k = numLine.length;
    console.log('length is: ' + k)
    const d = k / 2;
    console.log('half length is: ' + d)
    
    const suffixMax = new Array(k);
    let maxRight = -1;

    for (let i = k - 1; i >= 0; i--) {
        suffixMax[i] = maxRight;        
        if (numLine[i] > maxRight) {
            maxRight = numLine[i];       
        }
    }
    let bestFirst = -1
    let bestSecond = -1

    for(let i = 0; i < numLine.length; i++){
        const first = numLine[i];
        const second = suffixMax[i]; 

        if (second === -1) continue; 
        if (
            first > bestFirst ||
            (first === bestFirst && second > bestSecond)
        ) {
            bestFirst = first;
            bestSecond = second;
        }
    }
    
    const value = bestFirst + bestSecond;
    sum += Number(value);
}
console.log(sum)