import { SinhVien } from "./models/SinhVien.js";
//cách 1: dùng axios (thư viện)
console.log(axios);
//cách 2: dùng fetch từ chính browser
// function getDataDanhSachSinhVien (){
//     //dùng axios
//     //bất đồng bộ
//     let promise = axios({
//       url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien", //đường dẫn backend
//       method: "GET", // phương thức backend qui định
//       requestType: "json", // định dạng của dữ liệu trả về
//     });

//     //dữ liệu trả về thành công
//     promise.then(function(response){
//         console.log(response.data);

//         let arrSinhVien = response.data

//         renderTableSinhVien(arrSinhVien);
//     })

//     //dữ liệu trả về thất bại
//     promise.catch(function(error){
//         console.log(error);
//     })
// }

//async await
async function getDataDanhSachSinhVien() {
  //dùng axios
  //bất đồng bộ
  try {
    let response = await axios({
      url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien", //đường dẫn backend
      method: "GET", // phương thức backend qui định
      requestType: "json", // định dạng của dữ liệu trả về
    });
    console.log(response.data);
    renderTableSinhVien(response.data);
  } catch (error) {
    console.log(error);
  }
}

getDataDanhSachSinhVien();

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

document.querySelector("#sinhVienForm").onsubmit = async function (e) {
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

  try {
    let response = await axios({
      url: "https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
      method: "POST",
      data: sv,
    });

    getDataDanhSachSinhVien(response.data);
  } catch (error) {
    console.log(error);
  }
};

window.xoaSinhVien = async function xoaSinhVien(maSinhVien) {
  let response = await axios({
    url: `https://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
    method: "DELETE",
  });

  getDataDanhSachSinhVien(response.data);
};
