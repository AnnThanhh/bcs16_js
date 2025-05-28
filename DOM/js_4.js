//viết chương trình tính lương và xem sét nhân viên xuất sắc trong tháng
/**
 * 100-150h: nhân viên ưu tú
 * 151h-200h: nhân viên xuất sắc
 * >200h: nhân viên của tháng
 *
 * in kết quả ra màn hình với nội dung: chức vụ với ${giờ làm} và ${tổng lương} là nhân viên.....
 */

document.getElementById("calculateBtn").onclick = function () {
  const hours = Number(document.getElementById("hours").value);
  const hourlyrate = Number(document.getElementById("hourlyRate").value);
  const position = document.getElementById("position").value;

  const nhanVienUutu = hours >= 100 && hours <= 150;

  let tongLuong = 0;
  let result = "";

  tongLuong = hours * hourlyrate;

  if (nhanVienUutu) {
    result = `${position} với ${hours} giờ làm và ${tongLuong} là nhân viên ưu tú`;
  } else if (hours >= 151 && hours <= 200) {
    result = `${position} với ${hours} giờ làm và ${tongLuong} là nhân viên xuất sắc`;
  } else if (hours > 200) {
    result = `${position} với ${hours} giờ làm và ${tongLuong} là nhân viên của tháng`;
  } else {
    result = `vui lòng kiểm tra lại`;
  }

  document.getElementById("result").innerHTML = result;
};

//viết code để thêm nội dung vào thẻ p#txt-p với nội dung là hello world chữ màu đỏ
// const tagP = document.getElementById("txt-p")
// tagP.innerHTML = "Hello world"
// tagP.style.color = "red"
//viết code để thêm nội dung vào thẻ p#txt-div với nội dung là hello bcs16 chữ màu xanhdương
// const tagDiv = document.getElementById("txt-div");
// tagDiv.innerHTML = "Hello bcs16";
// tagDiv.style.color = "blue";
//viết code để thêm nội dung vào thẻ p#txt-section với nội dung là hello JavaScript chữ màu lá
// const tagSection = document.getElementById("txt-section");
// tagSection.innerHTML = "Hello JavaScript";
// tagSection.style.color = "green";

/**
 * tái sử dụng
 * maintain(bảo trì) và phát triển
 */
function xuLyVanBan(idThe, noiDung, mauSac) {
  //tham số || input
  const tag = document.getElementById(idThe);
  tag.innerHTML = noiDung;
  tag.style.color = mauSac;
}
//gọi hàm ra để lý
xuLyVanBan("txt-p", "Hello world", "red");
xuLyVanBan("txt-div", "Hello bcs16", "blue");
xuLyVanBan("txt-section", "Hello JavaScript", "green");

//import với export trong es6
//ctrl + space, cmd + `
//import là lệnh nhúng các file khác vào file chính
import { handleSize, tinhBMI, tinhTienDien, danhGia } from "./method.js";

let fontSize = 20;
document.getElementById("btnZoomIn").onclick = function () {
  fontSize += 5; //fontSize = fontSize + 5
  handleSize("txt", fontSize);
};

document.getElementById("btnZoomOut").onclick = function () {
  fontSize -= 5;
  handleSize("txt", fontSize);
};

//viết chương trình tính điểm dtb và kiểm tra học lực nếu
/**
 * dtb
 * 0-5: học sinh yếu
 * 5.1 - 6: học sinh trung bình
 * 6.1 - 7: học sinh khá
 * 7.1 - 8: học sinh giỏi
 * 8.1 - 10: học sinh xuất sắc
 */

import { diemTrungBinh, xepLoai } from "./method.js";
document.getElementById("tinhDiem").onclick = function () {
  //input
  const toan = Number(document.getElementById("toan").value);
  const ly = Number(document.getElementById("ly").value);
  const hoa = Number(document.getElementById("hoa").value);

  //process
  let dtb = 0;
  let xeploai = "";

  dtb = diemTrungBinh(toan, ly, hoa); //dtb: undefined nếu k return
  xeploai = xepLoai(dtb);

  console.log(dtb);
  console.log(xeploai);

  //output
  document.getElementById(
    "ketQua"
  ).innerHTML = `Điểm trung bình: ${dtb} - ${xeploai}`;
};

//viết hàm tính tiền điện theo công thức
/**
 * 50kw đầu: 500đ
 * 50kw tiếp: 650đ
 * 100kw tiếp theo: 850đ
 * 150kw tiếp: 1100đ
 * còn lại: 1300đ
 *
 * tongtien = số kw * 500đ
 *
 * tongtien = 50*500 + (so kw - 50) * 650
 */

document.getElementById("tinhTienDien").onclick = function () {
  const kw = Number(document.getElementById("kw").value);

  let tongTien = 0;
  tongTien = tinhTienDien(kw);

  document.getElementById("tinhTien").innerHTML = `tổng tiền là ${tongTien}`;
};

//viết chương trình tính chỉ số bmi và in kết quả ra màn hình
/**
 * <18.5 gầy (thiếu cân)
 * 18.5 - 24.9 bình thường
 * 25.0 - 29.9 thừa cân
 * 30.0 - 34.9 béo phì độ I
 * 35.0 - 39.9 béo phì độ II
 * >40 béo phì độ III (nguy hiểm)
 */

// bmi = cân nặng / (chiều cao * chiều cao)

document.getElementById("calculateBMI").onclick = function () {
  const name = document.getElementById("name").value;
  const chieuCao = Number(document.getElementById("height").value);
  const canNang = Number(document.getElementById("weight").value);

  let bmi = 0;
  let result = "";
  bmi = tinhBMI(chieuCao, canNang);
  result = danhGia(bmi);

  document.getElementById("resultBMI").innerHTML = `${name} - ${result}`;
};
