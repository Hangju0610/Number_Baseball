// 0에서 9까지 정수 출력하기
const getRandom = function () {
   return Math.floor(Math.random()*10);
}

// 3자리를 넣기 위한 set
// 3자리 Random 함수 넣기
// set을 이용하여 중복되지 않도록 넣기
// set은 고유한 값만 저장하며, 키를 저장하지 않음
const answerSet = new Set();
while (answerSet.size < 3) {
   answerSet.add(getRandom());
}

// 배열 
let answerArr = []
answerSet.forEach(function(number) {
   answerArr.push(number)
})





console.log(typeof answerSet)
console.log(answerSet)
console.log(answerArr)