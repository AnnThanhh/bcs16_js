export function DeleteNumber(arrNum, num) {
  let ketQua = false;
  //xử lý logic
  for (let index = arrNum.length; index >= 0; index--) {
    if (arrNum[index] === num) {
      arrNum.splice(index, 1);
      ketQua = true;
    }
  }
  return ketQua;
}

export function replaceNumber(arrNum, oldNum, newNum) {
  let ketQua = false;

  for (let index = 0; index < arrNum.length; index++) {
    if (arrNum[index] === oldNum) {
      arrNum[index] = newNum;
      ketQua = true;
    }
  }

  return ketQua;
}
