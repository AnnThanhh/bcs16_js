//sự kiện click (.onclick)
console.log("hello world");

document.getElementById("btnClick").onclick = function () {
  //xử lý tất cả các hoạt động của người dùng khi click vào
  console.log("Nguyễn Văn A");

  let hinhAnh = document.getElementById("hinhAnh");
  console.log(hinhAnh);
  hinhAnh.src =
    "https://cdn-media.sforum.vn/storage/app/media/ctv_seo10/doraemon-movie-12.jpg";
};

//querySelector
document.querySelector("#content p").innerHTML = "hello bcs16";

document.querySelector("#flex_container p").innerHTML = "hello Thành";

//lưu ý khi sử dụng querySelector: nếu câu selector không rõ ràng, và có thể gọi tới nhiều thẻ cùng lúc, thì các chỉnh sửa được viết sẽ chỉnh cho thẻ html đầu tiên thỏa mãn đoạn selector

//yêu cầu: thực hiện chức năng bật tắt bóng đèn cho 2 nút, khi click vào nút bật bóng đèn bóng đèn sẽ được bật và ngược lại
/**
 * bước 1: dom tới button bật đèn
 * bước 2: thực hiện sự kiện onclick thông qua id hoặc selector (id tự tạo), dom vào thẻ img thay đổi hình ảnh bóng đèn sáng
 * bước 3: dom tới button tắt đèn
 * bước 4: thực hiện sự kiện onclick thông qua id hoặc selector (id tự tạo), dom vào thẻ img thay đổi hình ảnh bóng đèn tắt
 */

const bongDen = document.getElementById("bongDen");
document.getElementById("btnBat").onclick = function () {
  console.log("clicked");
  bongDen.src = "./img/pic_bulbon.gif";
};

document.getElementById("btnTat").onclick = function () {
  console.log("clicked 2");
  bongDen.src = "./img/pic_bulboff.gif";
};

//khai báo biến
/**
 * var, let cho phép gán giá trị, const thì không
 * const không hỗ trợ cơ chế hoisting (var,let có hỗ trợ)
 * var cho phép trùng tiên biến, let và const không cho phép điều đó
 */

//sự kiện onmouseenter và onmouseleave
//onmouseenter: sự kiện sẽ được kích hoạt khi người dùng di chuyển con trỏ chuột vào vùng hiển thị của hình
bongDen.onmouseenter = function () {
  bongDen.src = "./img/pic_bulbon.gif";
};
//onmouseenter: sự kiện sẽ được kích hoạt khi người dùng di chuyển con trỏ chuột ra khỏi vùng hiển thị của hình
bongDen.onmouseleave = function () {
  bongDen.src = "./img/pic_bulboff.gif";
};

//yêu cầu: làm bài tập tính lương thực hiện chức năng tính lương của người dùng
/**
 * bước 1: thực hiện xử lý tạo sự kiện click cho button
 * bước 2: lấy giá trị nhập từ người dùng thông qua dom và gắn vào biến (ví dụ: let a = document.getElementById("id").value) => giá trị sẽ được lấy từ ô input của người dùng thông qua id và gắn vào biến
 * bước 3: thực hiện tính toán tổng lương = lương 1 giờ * tổng giờ làm
 * bước 4: in kết quả ra màn hình ở div#result thông qua innerhtml với nội dung là "chức vụ" với "tổng số giờ làm" có lương là "tổng lương" (ví dụ document.getElementById("result").innerHTML = `nội dung....`)
 *
 */

document.getElementById("calculateBtn").onclick = function () {
  console.log("click");
  //input
  const tongGio = Number(document.getElementById("hours").value);
  const luong1Gio = Number(document.getElementById("hourlyRate").value);
  const chucVu = document.getElementById("position").value;

  //process
  let tongLuong = 0;
  tongLuong = tongGio * luong1Gio;

  //output
  document.getElementById(
    "result"
  ).innerHTML = `${chucVu} có tổng ${tongGio} giờ làm với tổng lương là ${tongLuong.toLocaleString(
    "vi-VN",
    { style: "currency", currency: "VND" }
  )}`;
};

let number = 45;

let firstDigit = Math.floor(number / 10); // 4
let secondDigit = number % 10; // 5

console.log(firstDigit); // 4
console.log(secondDigit); // 5

//yêu cầu: thực hiện chức năng tính điểm trung bình của học sinh
document.getElementById("tinhDiem").onclick = function () {
  //input
  const toan = document.getElementById("toan").value * 1;
  const ly = document.getElementById("ly").value * 1;
  const hoa = document.getElementById("hoa").value * 1;

  //process
  let dtb = 0;
  dtb = (toan + ly + hoa) / 3;

  console.log(dtb);

  //output
  document.getElementById(
    "ketQua"
  ).innerHTML = `Điểm trung bình của bạn là ${dtb}`;
};
