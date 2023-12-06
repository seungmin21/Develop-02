
// 배열이 한개일땐 명시적으로 직접 지정해주는 조건식이 필요하다.
let number = ["오승민", "오", "승", "민"]
function addNumber(array, name, startText, endText) {
    if(number[0] === name) {
      console.log(startText + array + endText);
    } else {
      console.log("조건식이 맞지 않습니다.")
    }
}
addNumber(number, "오승민", "나는", "이다!")