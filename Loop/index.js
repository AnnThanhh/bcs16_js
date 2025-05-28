//vòng lặp
//vòng lặp while
/**
 * các điều kiện cấu thành vòng while
 * điều kiện ban đầu
 * while (điều kiện){
 *  thực hiện logic (biểu thức, giá trị làm thay đổi biểu thức)
 * }
 */

import {
  tinhGiaiThua,
  tinhTongChan,
  kiemTraNT,
  inSao,
  tongSoChan,
} from "./method.js";

//yêu cầu in ra giao diện hello world 5 lần

let soLan = 1; //giá trị ban đầu
while (soLan <= 5) {
  // biểu thức thực hiện
  console.log("hello world");
  //giá trị làm thay đổi biểu thức
  soLan++;
}

/**
 * soLan: từ người dùng nhập vô 
 * let lan = 1; //giá trị ban đầu
    while (lan <= soLan) {
        console.log("hello world");
        lan++;
    }
 */

document.getElementById("inKQ").onclick = function () {
  console.log("click ");
  const number = document.getElementById("number").value;

  //output
  /**
   * stringhtml
   * `
   * <p>Hello CyberSoft</p>
   * <p>Hello CyberSoft</p>
   * <p>Hello CyberSoft</p>
   * <p>Hello CyberSoft</p>
   * <p>Hello CyberSoft</p>
   * `
   */

  let lan = 1;
  let stringHTMl = ``;
  while (lan <= number) {
    stringHTMl += `<p>Hello CyberSoft</p>`;
    lan++;
  }

  document.getElementById("result").innerHTML = stringHTMl;
};

/**
 * n: số người dùng nhập
 * tong = 0
 * soHang = 1
 * white (soHang <= n){
 *  tong = tong + soHang
 *  soHang++
 * }
 */

document.getElementById("inKQViDu2").onclick = function () {
  console.log("clicked 2");
  const n = Number(document.getElementById("vidu2").value);

  let tong = 0;
  let soHang = 1;
  while (soHang <= n) {
    tong += soHang;
    soHang++;
  }
  console.log(tong);

  document.getElementById("resultViDu2").innerHTML = `tổng số hạng là ${tong}`;
};

document.getElementById("inKQViDu3").onclick = function () {
  const n = Number(document.getElementById("vidu3").value);

  let giaiThua = 1;

  giaiThua = tinhGiaiThua(n);

  console.log(giaiThua);

  document.getElementById("resultViDu3").innerHTML = `${n}! = ${giaiThua}`;
};

document.getElementById("inKQViDu4").onclick = function () {
  const n = Number(document.getElementById("vidu4").value);

  let tongSoChan = 0;
  tongSoChan = tinhTongChan(n);

  document.getElementById(
    "resultViDu4"
  ).innerHTML = `tổng số chẳn là ${tongSoChan}`;
};

document.getElementById("inKQViDu5").onclick = function () {
  const n = Number(document.getElementById("vidu5").value);

  let ketLuan = "";
  let kiemTra = kiemTraNT(n);
  if (kiemTra) {
    ketLuan = `${n} là số nguyên tố`;
  } else {
    ketLuan = `${n} không phải là số nguyên tô`;
  }
  document.getElementById("resultViDu5").innerHTML = ketLuan;
};

document.getElementById("inKQViDu6").onclick = function () {
  const soSao = Number(document.getElementById("vidu6").value);

  let stringHTML = ``;
  stringHTML = inSao(soSao);

  console.log(stringHTML);

  document.getElementById("resultViDu6").innerHTML = stringHTML;
};

//do....while
/**
 * do {
 *  luôn xử lý logic ở đây
 * }while(điều kiện)
 */
//yêu cầu: thực hiện xử lý đếm xem có nhiêu số chia hết cho 3 từ 0 đến 100

let count = 0;
let i = 0;
do {
  //những xử lý logic
  if (i % 3 == 0) {
    count++;
  }
  i++;
} while (i <= 100);

console.log(count);

//vòng lặp for
//for(giá trị ban đầu; điều kiện; xử lý tăng dần){xử lý logic}

// let stringHTML = ``
// for (let num = 1; num <= 5; num++) {
//   stringHTML += `<i class="fa-solid fa-star"></i>`;
// }
// console.log(stringHTML);

document.getElementById("inKQViDuFor1").onclick = function () {
  const n = Number(document.getElementById("viduFor1").value);

  let tongChan = tongSoChan(n);

  console.log(tongChan);

  document.getElementById(
    "resultViDuFor1"
  ).innerHTML = `Tổng chẳn là ${tongChan}`;
};
