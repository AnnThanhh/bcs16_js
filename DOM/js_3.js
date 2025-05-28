//boolean
let isLogin = true;

// so sánh bằng về giá trị: ==
const num1 = 5; //number
const num2 = 5; //number
const num3 = num1 == num2;
console.log(num3); //true

// so sánh bằng về giá trị và kiểu dữ liệu: ===
const a = 5; //number
const b = "5"; //string
const num4 = a === b;
console.log(num4); //false

//so sánh khác nhau về giá trị !=
const num5 = 10;
const num6 = "10";
const num7 = num5 != num6;
console.log(num7); //false

//so sánh khác nhau về giá trị và kiểu dữ liệu !==
const num8 = 10; //number
const num9 = "5"; //string
const num10 = num8 != num9;
console.log(num10); //true

// > < >= <=
const num11 = 6;
const num12 = 7;
const num13 = num11 < num12; // > <= >=
console.log(num13);

// &&: và
const bt_1 = true;
const bt_2 = false;
const bt_3 = false;
const rs_123 = bt_1 && bt_2 && bt_3;
console.log(rs_123);

// ||: hoặc
const bt_4 = false;
const bt_5 = false;
const bt_6 = true;
const rs_456 = bt_4 || bt_5 || bt_6;
console.log(rs_456);

// !: phủ định
console.log(!isLogin);

//câu điều kiện
/**
 * if(điều kiện){
 *  thực hiện logic
 * }
 */

/**
 * viết chương trình kiểm tra ngày đi học
 * học 2 4 6 => log hôm nay đi học
 */

/**
 * if(điều kiện){
 *  thực hiện logic
 * }else{
 *  thực hiện logic
 * }
 */

const today = 3;
if (today == 2 || today == 4 || today == 6) {
  console.log("hôm nay đi học");
} else {
  console.log("hôm nay không đi học");
}

/**
 * viết chương trình kiểm tra độ tuổi
 * 1. lấy dữ liệu từ ô input
 * 2. kiểm tra dữ liệu, nếu dữ liệu > 6 tuổi => log(đủ điều kiện đi học lớp 1), nếu k > 6 -> log(k đủ điều kiện)
 * 3. in kết quả ra màn hình
 */

document.getElementById("check").onclick = function () {
  const age = Number(document.getElementById("age").value);

  let result = "";
  if (age > 6) {
    result = "Đủ điều kiện đi học lớp 1";
  } else {
    result = "Không đủ điều kiện đi học lớp 1";
  }

  document.getElementById("result").innerHTML = result;
};

/**
 * viết chương trình nhận thưởng
 * 1. lấy dữ liệu từ ô input
 * 2. kiểm tra dữ liệu, nếu dữ liệu > 100 => log(${tên} được thưởng 10% doanh thu), nếu k >100  -> log(${tên} không được thưởng)
 * 3. in kết quả ra màn hình
 */

document.getElementById("kiemTra").onclick = function () {
  const name = document.getElementById("name").value;
  const qty = Number(document.getElementById("qty").value);

  let result = "";
  //   if (qty > 100) {
  //     result = `${name} được thưởng 10% doanh thu`;

  //   } else {
  //     result = "không được thưởng";
  //   }

  result =
    qty > 100 ? `${name} được thưởng 10% doanh thu` : "không được thưởng";

  document.getElementById("ketQua").innerHTML = result;
};

/**
 * toán tử 3 ngôi
 * dk ? logic 1 : logic 2
 */

/**
 * if(điều kiện){
 *  thực hiện logic
 * }else if(điều kiện b){
 *  thực hiện logic
 * }else if(điều kiện c){
 * thực hiện logic}
 * else{
 * thực hiện logic}
 */

const num_a = 10238701283;
if (num_a == 1) {
  console.log("số 1");
} else if (num_a == 2) {
  console.log("số 2");
} else if (num_a == 3) {
  console.log("số 3");
} else if (num_a == 4) {
  console.log("số 4");
} else {
  console.log("số không phù hợp");
}

//viết chương trình tính điểm dtb và kiểm tra học lực nếu
/**
 * dtb
 * 0-5: học sinh yếu
 * 5.1 - 6: học sinh trung bình
 * 6.1 - 7: học sinh khá
 * 7.1 - 8: học sinh giỏi
 * 8.1 - 10: học sinh xuất sắc
 */

document.getElementById("tinhDiem").onclick = function () {
  const toan = Number(document.getElementById("toan").value);
  const ly = Number(document.getElementById("ly").value);
  const hoa = Number(document.getElementById("hoa").value);

  let dtb = 0;
  dtb = (toan + ly + hoa) / 3;
  let result = "";
  if (dtb >= 0 && dtb <= 5) {
    result = "học sinh yếu";
  } else if (dtb >= 5.1 && dtb <= 6) {
    result = "học sinh trung bình";
  } else if (dtb >= 6.1 && dtb <= 7) {
    result = "học sinh khá";
  } else if (dtb >= 7.1 && dtb <= 8) {
    result = "học sinh giỏi";
  } else if (dtb >= 8.1 && dtb <= 10) {
    result = "học sinh xuất sắc";
  } else {
    result = "điểm số không hợp lý, vui lòng nhập lại";
  }

  document.getElementById("ketQuaKiemTra").innerHTML = result;
};

//switch case

