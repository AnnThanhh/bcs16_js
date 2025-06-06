import { SinhVien } from "./models/SinhVien.js";

let arrSinhVien = [];

document.querySelector("#sinhVienForm").onsubmit = function (e) {
  e.preventDefault(); //ngăn chặn trình duyệt reload
  //input
  let sv = new SinhVien();

  let arrInput = document.querySelectorAll("#sinhVienForm input");

  console.log(arrInput);
  for (let input of arrInput) {
    let id = input.id;
    let value = input.value;
    sv[id] = value;
  }

  arrSinhVien.push(sv);

  renderTableSinhVien(arrSinhVien);
  // output
  // let html = ``;
  // html = `
  //   <tr>
  //       <td>${sv.maSinhVien}</td>
  //       <td>${sv.tenSinhVien}</td>
  //       <td>${sv.soDienThoai}</td>
  //       <td>${sv.email}</td>
  //       <td>${sv.diemToan}</td>
  //       <td>${sv.diemLy}</td>
  //       <td>${sv.diemHoa}</td>
  //       <td>${sv.diemRenLuyen}</td>
  //       <td>${sv.loaiSinhVien}</td>
  //       <td>
  //           <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow">Cập nhật</button>
  //           <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow" onclick="xoaSinhVien(this)">Xóa</button>
  //       </td>
  //   </tr>
  // `;
  // document.querySelector("#tblSinhVien").innerHTML += html;
};

window.xoaSinhVien = function xoaSinhVien(maSinhVien) {
  console.log(maSinhVien);
  let sinhVienIndex = arrSinhVien.findIndex(
    (sv) => sv.maSinhVien === maSinhVien
  );
  console.log(sinhVienIndex);
  if (sinhVienIndex != -1) {
    arrSinhVien.splice(sinhVienIndex, 1);
    renderTableSinhVien(arrSinhVien);
  }
};

//mô hình mvc
/**
 * Models: là nơi chứa các class của chương trình và chỉ chưa class
 * Views: giao diện để chương trình thực hiện
 * Controllers: là để điều hướng giao diện
 */

window.renderTableSinhVien = function renderTableSinhVien(arrSinhVien) {
  let html = ``;
  for (let sv of arrSinhVien) {
    console.log(sv);
    html += `
   <tr>
       <td>${sv.maSinhVien}</td>
       <td>${sv.tenSinhVien}</td>
       <td>${sv.soDienThoai}</td>
       <td>${sv.email}</td>
       <td>${sv.diemToan}</td>
       <td>${sv.diemLy}</td>
       <td>${sv.diemHoa}</td>
       <td>${sv.diemRenLuyen}</td>
       <td>${sv.loaiSinhVien}</td>
       <td>
           <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow" onclick=chinhSua('${sv.maSinhVien}')>Cập nhật</button>
           <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow" onclick="xoaSinhVien('${sv.maSinhVien}')">Xóa</button>
       </td>
   </tr>
 `;
  }
  document.querySelector("#tblSinhVien").innerHTML = html;
};

window.chinhSua = function (maSinhVien) {
  document.querySelector("#maSinhVien").disabled = true;

  let svUpdate = arrSinhVien.find((sv) => sv.maSinhVien === maSinhVien);

  if (svUpdate) {
    // document.getElementById("maSinhVien").value = svUpdate.maSinhVien
    for (let key in svUpdate) {
      document.getElementById(`${key}`).value = svUpdate[key];
    }
  }
};

document.getElementById("btnLuuThongtin").onclick = function () {
  let svEdit = new SinhVien();

  let arrInput = document.querySelectorAll("#sinhVienForm input");

  for (let input of arrInput) {
    let id = input.id;
    let value = input.value;
    svEdit[id] = value;
  }

  let svTrongMang = arrSinhVien.find(
    (sv) => sv.maSinhVien === svEdit.maSinhVien
  );

  console.log(svTrongMang);

  if (svTrongMang) {
    for (let key in svTrongMang) {
      svTrongMang[key] = svEdit[key];
    }
  }

  renderTableSinhVien(arrSinhVien);

  document.querySelector("#maSinhVien").disabled = false;
};

//yêu cầu: viết chương trình cho ô tìm kiếm, lấy dữ liệu từ người dùng nhập, tìm kiếm thông tin và load dưới bảng thông tin
document.querySelector("#formTimKiem").onsubmit = function (e) {
  e.preventDefault();

  //input: dữ liệu - keyword từ ô tìm kiếm lưu vào tuKhoa - nếu chưa id cho ô tìm kiếm thì thêm id
  //.trim(): loại bỏ khoảng trống đầu và cuối
  //.toLowerCase(): chuyển đổi thành dạng viết thường
  let tuKhoa = document.getElementById("tuKhoa").value.trim().toLowerCase();
  console.log(tuKhoa);

  //process: filter arrSinhVien sv.tenSinhVien == tuKhoa
  //includes: bao gồm
  let arrFilter = arrSinhVien.filter((sv) =>
    sv.tenSinhVien.toLowerCase().includes(tuKhoa)
  );
  console.log(arrFilter);

  //output: render lại table
  renderTableSinhVien(arrFilter);
};
