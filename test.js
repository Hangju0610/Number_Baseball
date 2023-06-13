const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
let count = 1;
function a () {
   rl.question(`${count}번째 시도:`, function(x) {
      input = x.split('').map(x => Number(x))
      rl.close()
      return input
   })
}

a();
console.log(input);
