const answerArr = [1,4,7]
const inputArr = ['2','1','9']

const a = function (answer, input) {
   let b = 0;
   let s = 0;
   b = answer.filter(x => input.includes(x)).length;
   if (b !== 0) {
      s = answer.filter(function(x) {
         return answer
      })
   }


}

let ball = a(answerArr,inputArr)
console.log(ball);