const fs = require("fs");
const sequence = fs.readFileSync("./2025/4.txt").toString('utf-8').split("\n");
const H = sequence.length;
const W = sequence[0].length;
const grid = sequence.map((line) => line.split(''));
let sum = 0;


for(let i = 0; i< H; i++){
  for(let j = 0; j < W; j++){
    let neighobrs = 0;
    if(grid[i][j] !== '@') continue;
    
      
    if (i > 0 && j > 0 && grid[i-1][j-1] === '@') neighobrs++;
    if (i > 0 && grid[i-1][j] === '@') neighobrs++;
    if (i > 0 && j+1 < W && grid[i-1][j+1] === '@') neighobrs++;

    if (j > 0 && grid[i][j-1] === '@') neighobrs++;
    if (j+1 < W && grid[i][j+1] === '@') neighobrs++;

    if (i+1 < H && j > 0 && grid[i+1][j-1] === '@') neighobrs++;
    if (i+1 < H && grid[i+1][j] === '@') neighobrs++;
    if (i+1 < H && j+1 < W && grid[i+1][j+1] === '@') neighobrs++;
        

    if(neighobrs < 4) {
      sum++;
    } 
    }
}

console.log(sum);