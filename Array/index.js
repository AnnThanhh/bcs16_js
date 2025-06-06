// let tenHocVien = "Thành";
// let tenHocVien2 = "Giang";
// let tenHocVien3 = "Nam";

import { DeleteNumber, replaceNumber } from "./method.js";

// []: array || mảng
let arrayTen = ["Thành", "Giang", "Nam", "Phi"];
//CRUD: create, read, update, delete

//Read
//index
/**
 * let arrayTen = ["Thành", "Giang", "Nam", "Phi"];
 *                     0        1       2      3
 * index: chỉ số phần tử trong mảng (array)
 * length: số lượng phần tử trong mảng (luôn lớn chỉ số index tối 1 đơn vị)
 * lấy giá trị từ array:
 * arr[index] => arrayTen[1]: Giang
 */
console.log(arrayTen);
// console.log(arrayTen[1]);
// console.log(arrayTen[2]);
// console.log(arrayTen[3]);

//duyệt mảng
for (let index = 0; index < arrayTen.length; index++) {
  //thực hiện logic
  console.log(arrayTen[index]);
}

//Create: tạo mới (thêm) giá trị vào mảng
/**
 * ví dụ: arr = [value1, value2, value3,.....]
 * index            0       1       2
 *
 * .push("newValue"): thêm ở cuối mảng =>  arr = [value1, value2, value3, newValue]
 * index mới                                        0       1       2       3
 *
 * .unshift("newValue"): thêm ở đầu mảng => arr = [newValue, value1, value2, value3]
 * index mới                                            0       1       2       3
 *
 * .push: thêm ở cuối mảng
 * .unshift: thêm ở đầu mảng (làm thay đổi index những phần tử còn lại sau khi thêm)
 *
 * .pop(): lấy giá trị cuối cùng ra và xóa giá trị đó khỏi mảng
 * .shift(): lấy giá trị đầu mảng và xóa giá trị đó ra khỏi mảng (làm thay đổi index những phần tử còn lại sau khi xóa)
 */
//.push
arrayTen.push("Sang");
console.log(arrayTen);

//.unshift
arrayTen.unshift("Long");
console.log(arrayTen);

let ten = arrayTen.pop();
console.log(ten);
console.log(arrayTen);

//update: cập nhật giá trị trong mảng
/**
 * ví dụ: arr = [value1, value2, value3,.....]
 * index            0       1       2
 *
 * arr[index] = newValue
 * ví dụ arr[1] = newValue
 *
 * duyệt mảng và dùng if để xác định
 * for(let index = 0; index < arr.length; index++){
 *      if(arr[index] === "điều kiện"){> < >= <=
 *          arr[index] = newValue
 * }
 * }
 */

let indexFind = -1;
for (let index = 0; index < arrayTen.length; index++) {
  if (arrayTen[index] === "Nam") {
    arrayTen[index] = "Nam Plus";
    indexFind = index; // đánh cờ hiệu
  }
}
if (indexFind === -1) {
  console.log("Không tìm thấy");
} else {
  console.log("tìm thấy index = ", indexFind);
}
console.log(arrayTen);

//delete: xóa phần tử trong mảng
/**
 * tìm tới vị trí index của phần tử và xóa index đó
 * .splice(index, 1): index: vị trí phần tử cần xóa trong mảng, 1: là số lượng phần tử cần xóa
 */

let indexDel = -1;
for (let index = 0; index < arrayTen.length; index++) {
  if (arrayTen[index] === "Nam Plus") {
    indexDel = index;
  }
}
console.log(indexDel);

if (indexDel !== -1) {
  arrayTen.splice(indexDel, 1);
}

console.log(arrayTen);

let arr = ["Thành", "Giang", "Nam", "Nam", "Nam", "Nam", "Phi"];
//             0       1       2      3       4     5
//nâng cao: trường hợp nhiều trên trùng lập lại với nhau thì sẽ duyệt mảng ngược
for (let index = arr.length - 1; index >= 0; index--) {
  if (arr[index] === "Nam") {
    arr.splice(index, 1);
  }
}

console.log(arr);

//vòng lặp cú pháp ngắn gọn
/**
 * for of: mỗi lần duyệt mảng sẽ lấy ra 1 giá trị trong mảng
 * for in: mỗi lần duyệt mảng sẽ lấy giá trị index lần lượt từ 0 đến length -1
 */

let arrPhone = ["0909090909", "0101010101", "0120301230", "1-238-128-10"];
console.log(arrPhone);
for (let phoneNumber of arrPhone) {
  console.log(phoneNumber);
}

for (let index in arrPhone) {
  console.log(index);
  console.log(arrPhone[index]);
}

let arrNum = [1, 5, 8, 9, 10, 13];

document.getElementById("inKQViDu").onclick = function () {
  const number = Number(document.getElementById("vidu").value);

  arrNum.push(number);

  console.log(arrNum);
  document.getElementById("resultViDu").innerHTML = `[${arrNum}]`;
};

document.getElementById("inKQViDuXoa").onclick = function () {
  const number = Number(document.getElementById("vidu").value);

  let ketQua = DeleteNumber(arrNum, number);

  if (ketQua) {
    document.getElementById("resultViDu").innerHTML = `[${arrNum}]`;
  } else {
    document.getElementById(
      "resultViDu"
    ).innerHTML = `Xóa không thành công, không tồn tại ${number} trong mảng`;
  }
};

document.getElementById("inKQViDu2").onclick = function () {
  const oldNum = Number(document.getElementById("vidu2").value);
  const newNum = Number(document.getElementById("vidu2-2").value);

  let ketQua = replaceNumber(arrNum, oldNum, newNum);

  if (ketQua) {
    document.getElementById(
      "resultViDu2"
    ).innerHTML = `đã cập nhật thành công - [${arrNum}]`;
  } else {
    document.getElementById(
      "resultViDu2"
    ).innerHTML = `Cập nhật không thành công, không tồn tại ${oldNum} trong mảng`;
  }
};

/**
 * truy xuất đến thẻ thông qua tag name (tên thẻ)
 */

let arrSecTagName = document.getElementsByTagName("section");

console.log(arrSecTagName);
arrSecTagName[1].style.fontSize = "30px";
arrSecTagName[2].style.color = "red";

for (let index = 0; index < arrSecTagName.length; index++) {
  arrSecTagName[index].className = "text-blue-700 text-4xl";
}

//arrTag = [tag1, tag2, tag3,....]
for (let tagSection of arrSecTagName) {
  tagSection.className = "text-green-500 font-bold";
}

/**
 * truy xuất đến thẻ thông qua class name (tên thẻ)
 */

let arrTitle = document.getElementsByClassName("title");
console.log(arrTitle);

/**
 * truy xuất đến thẻ thông qua querySelector
 * khi dom tới phần tử sử dụng querySelector thì kết quả trả về là 1 thẻ dù có bao nhiêu thẻ cùng selector thì sẽ trả thẻ đầu tiên
 *
 *
 *
 * truy xuất đến thẻ thông qua querySelectorAll
 * kết quả trả về sẽ là array dù chỉ có 1 thẻ. Nếu không có thẻ nào thì trả về []
 */

document.querySelector("#formThongTinNguoiDung").onsubmit = function (e) {
  e.preventDefault(); //chăn sự kiện reload trang của trình duyệt

  let arrInput = document.querySelectorAll("#formThongTinNguoiDung input");
  for (let tagInput of arrInput) {
    console.log(tagInput);
    console.log(tagInput.id);
  }
};
