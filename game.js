//Terminal 에서 숫자 읽기
// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');
// const rl = readline.createInterface({ input, output });
// 3자리수 랜덤 수 출력 함수 제작
const getRandom = function () {
   // 3자리를 넣기 위한 set
   // 3자리 Random 함수 넣기
   // set을 이용하여 중복되지 않도록 넣기
   // set은 고유한 값만 저장하며, 키를 저장하지 않음
   const answerSet = new Set();
   let answer = []
   while (answerSet.size < 3) {
      answerSet.add(Math.floor(Math.random()*10));
   }
   // 베열에다가 넣기
   answerSet.forEach(function(number) {
      answer.push(number);
   })
   // 세자리수 랜덤 수 출력하기
   return answer
}

let answer = getRandom();
console.log(answer);















// createInterface() 메소드를 이용해 객체를 만들고, rl이라는 변수에 저장
// 숫자 받아오기

// const inputNumber = function(arr) {
//    rl.question('What do you think of Node.js? ', (answer) => {
//       arr = answer.split('').map(x => x)
//       rl.close();
//     });
//    return arr
// }
// let inputArr = []
// inputArr = inputNumber(inputArr)
// console.log(inputArr)

// rl.question('What do you think of Node.js? ', (answer) => {
//   inputArr = answer.split('').map(x => x)
//   console.log(inputArr);
//   rl.close();
// });