const fs = require('fs');
let encrypt = fs.readFileSync('1.1.txt', 'utf8').trim().split('\n');;
let pos = 50;
let step = 0;
let passcode = 0;
let char = '';




 for(let i = 0; i < encrypt.length; i++){
    char = encrypt[i][0];
    step = parseInt(encrypt[i].slice(1), 10)
    if(char === 'L'){
      pos = (pos - step + 100) % 100;
    } else if(char === 'R'){
      pos = (pos + step) % 100;
    }

    if(pos === 0){
      passcode += 1;
    }
  
  
 }
  
  console.log(passcode)