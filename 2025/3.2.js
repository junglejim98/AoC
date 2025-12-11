const fs = require('fs');
const sequence = fs.readFileSync("./2025/3.txt").toString('utf-8').split('\n');
let sum = 0

for(let line of sequence){
    let num = 0;
    const res = [];
    
    let lineNums = line.split('');
    let len = lineNums.length
    let canBeRemoved = len.length - 2;
    for(let i =0; i < len; i++){
    while(
        res.length > 0 &&
        res[res.length - 1] < lineNums[i] && canBeRemoved > 0
    ){
        res.pop();
        canBeRemoved--;
    }
    res.push(lineNums[i]);
}
    num = res.slice(0,2).join('');
    sum += Number(num);
}
//not ended
console.log(sum)