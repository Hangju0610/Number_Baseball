// Terminal 에서 숫자 읽기
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

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
   answerSet.forEach(function(x) {
      answer.push(x);
   })
   // 세자리수 랜덤 수 출력하기
   return answer
}

const scoring = function(answer, inputNumber) {
   // strike와 ball의 갯수
   let s = 0;
   let b = 0;
   // 대답을 forEach를 value와 index으로 구분지어 반복돌리기
   inputNumber.forEach((value,idx) => {
      // 숫자와 위치가 일치하는 경우
      if(answer.indexOf(value) === idx) s++;
      // 숫자만 일치하는 경우
      else if(answer.includes(value)) b++;
   })
   return {s, b}
}

function play() {
   // 랜덤 숫자 부여
   const answer = getRandom();
   // 횟수 설정
   let count = 1;

   console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!')

   const askanswer = () => {
      rl.question(`${count}번째 시도:`,(input) => {
         // input 문자열을 숫자형으로 바꾼 후, 배열로 정리
         const My = input.split('').map(x => Number(x));
         // 채점 실행
         const result = scoring(answer, My);

         // 조건문을 통해 게임을 끝낼지, 계속할지 설정
         if (result.s === 3) {
            console.log(`${count}번만에 맞히셨습니다.`);
            console.log('게임을 종료합니다.');
            // 끝난 경우, readline을 끄고 밖으로 나가기.
            rl.close();
         } else {
            console.log(`${result.s}S${result.b}B`);
            count++;
            // 틀렸을 경우 다시 돌아가는 기능
            askanswer();
         }
      })
   }
   // play함수 내에서 askanswer 함수 실행하기
   askanswer();
}

play();