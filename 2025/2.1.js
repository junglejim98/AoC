const fs = require("fs");
let sequence = fs.readFileSync("./2025/2.txt").toString('utf-8').split(',');

let idsSum = 0;

function nextPalindrom(n){
    const s = n.toString();
    const d = n.length;
    const k = Math.ceil(d / 2);

        let left = s.slice(0, k);
        let leftPart = left;
        let rightPart;
        
        rightPart = left.split('').reverse().join();
        
        return leftPart+rightPart;
}

for(let ids of sequence){
    let id = ids.split('-');
    let left = id[0];
    let right = id[1];
    console.log(left);
    while(left < right)
    if(left.length % 2 !== 0){
        left += 1
    }
    else{
        left +=1
        console.log(left);
    }
}