export function handleSize(id, fSize) {
  const tagP = document.getElementById(id);
  tagP.style.fontSize = `${fSize}px`;
}

//hàm xử lý kết quả có giá trị trả về (return)

/**
 * Đây là hàm tính giá trị trung bình với ba tham số là toán, lý, hóa, và có giá trị trả về là điểm trung bình
 * @param {*} toan: tham số toán nhận giá trị từ người dùng nhập
 * @param {*} ly
 * @param {*} hoa
 * @returns giá trị trả về điểm trung bình dựa trên công thức (toán + lý + hóa) / 3
 */
export function diemTrungBinh(toan, ly, hoa) {
  //input

  //process
  let dtb = 0;
  dtb = (toan + ly + hoa) / 3;

  //output
  return dtb;
}

export function xepLoai(dtb) {
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

  return result;
}

export function tinhTienDien(kw) {
  let tongTien = 0;
  if (kw <= 50 && kw > 0) {
    tongTien = kw * 500;
  } else if (kw > 50 && kw <= 100) {
    tongTien = 50 * 500 + (kw - 50) * 650;
  } else if (kw > 100 && kw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw > 200 && kw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 150) * 1100;
  } else {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  return tongTien;
}

export function tinhBMI(chieuCao, canNang) {
  let bmi = 0;
  bmi = canNang / chieuCao ** 2;
  return bmi
}

export function danhGia(bmi) {
  let danhGia = "";
  if (bmi > 0 && bmi < 18.5) {
    danhGia = "gầy (thiếu cân)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    danhGia = "bình thường";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    danhGia = "thừa cân";
  } else if (bmi >= 30 && bmi <= 34.9) {
    danhGia = "béo phì độ I";
  } else if (bmi >= 35 && bmi <= 39.9) {
    danhGia = "béo phì độ II";
  } else if (bmi >= 40) {
    danhGia = "béo phì độ III";
  } else {
    danhGia = "vui lòng nhập lại";
  }
  return danhGia;
}
