// 함수에 4개의 매개변수를 작성
function developPractics(array, name, startText, endText) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === name) {
      console.log(startText + array[i] + endText);
    } else {
      console.log(array[i])
    }
  }
}

//developPractics(studentList, "오승민", "나는", "이다.")
