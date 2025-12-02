const fs = require("fs");
let sequence = fs.readFileSync("./2025/2.txt").toString('utf-8').split(',');

let idsSum = 0;

for(let ids of sequence){
    let id = ids.split('-');
    let left = Number(id[0]);
    let right = Number(id[1]);
    while(left <= right){
    let leftSTR = left.toString();
    let t = (leftSTR + leftSTR).slice(1, -1);
    
    if(t.includes(leftSTR)){
        idsSum = idsSum + left;
    }
    ++left;
}
}
console.log(idsSum);