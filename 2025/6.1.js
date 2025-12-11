const fs = require('fs');
const sequence = fs.readFileSync("/Users/admin/Documents/AoC/2025/6.txt").toString('utf-8').split('\n');
const res = [];
let sum = 0;
let mult = 1;

for(let i = 0; i< sequence.length; i++){
    res.push(sequence[i].trim().split(/\s+/))
}

const lineLength = res[0].length;
const resLength = res.length;


for(let i = 0; i < lineLength; i++){
    if(res[4][i] === '*'){
        mult = res[0][i] * res[1][i] * res[2][i] * res[3][i];
        sum = sum + mult;
    }
    if(res[4][i] === '+'){
        sum = sum + Number(res[0][i]) + Number(res[1][i]) + Number(res[2][i]) + Number(res[3][i]);
    }
}
console.log(sum);
