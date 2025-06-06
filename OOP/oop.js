//yêu cầu: lấy thông tin người dùng nhập là console.log dưới dev tool với (sử dụng onsubmit, queryselectorall, duyệt mảng để tạo ra giá trị cho object là sinh vien)

document.querySelector("#formThongTinSV").onsubmit = function (e) {
  e.preventDefault();

  let sinhVien = {};

  let arrInput = document.querySelectorAll("#formThongTinSV input");

  for (let input of arrInput) {
    let id = input.id;
    let value = input.value;
    sinhVien[id] = value;
  }

  //tạo thêm phương thức mới bên trong object
  sinhVien.diemTrungBinh = function () {
    let dtb = 0;
    dtb =
      (Number(sinhVien.toan) + Number(sinhVien.ly) + Number(sinhVien.hoa)) / 3;
    return dtb;
  };
  
  console.log(sinhVien.diemTrungBinh());

  document.getElementById("ketQua").innerHTML = `Điểm trung bình là ${sinhVien.diemTrungBinh()}`
};
