const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let inputArr = [];
let i = 1;
const input = function(Arr) {
   rl.question(`${i}번째 시도 : `, (Arr) => {
   });
   
   rl.close();
}

inputArr = input(inputArr);
console.log(inputArr);


