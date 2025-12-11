const { checkPrime } = require('crypto');
const fs = require('fs');
const raw = fs.readFileSync("/Users/admin/Documents/AoC/2025/5.txt").toString('utf-8');
const lines = raw.split('\n');
let sum = 0;
let emptyLineNum = 0;
const sequences = [];
const cehckLines = [];
const d = [];

for (let i = 0; i < lines.length; i++){
    if (lines[i].trim() === '')
        emptyLineNum = i;
    if(emptyLineNum === 0){
        sequences.push(lines[i].split('-'))
    }else if(emptyLineNum === i){
        emptyLineNum = 1;
        continue;
    }else{
        cehckLines.push(lines[i])
    }
}



for(let i = 0; i < cehckLines.length; i++){
   // console.log(cehckLines[i]);
    for(let j = 0; j < sequences.length; j++){
        if (Number(cehckLines[i]) >= Number(sequences[j][0]) && Number(cehckLines[i]) <= Number(sequences[j][1])){
            sum++;
            console.log(`Num: ${cehckLines[i]} is in sequense" ${sequences[j]}`);
            break;
        }
    }
}
console.log(sum);