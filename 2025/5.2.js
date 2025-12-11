const fs = require('fs');
const raw = fs.readFileSync("/Users/admin/Documents/AoC/2025/5.txt").toString('utf-8');
const lines = raw.split('\n');
let sum = 0;
const sequences = [];

const d = [];
let min = infinity;
let max = -infinity

for (let i = 0; i < lines.length; i++){
    if (lines[i].trim() === '')
        break;
   
    sequences.push(lines[i].split('-'))
    
}

 for(let i = 0; i < sequences.length; i++){
        if(sequences[i][0] < min)
            min = sequences[i][0]
        if(sequences[i][1] > max)
            max = sequences[i][1]
 }


//not ended