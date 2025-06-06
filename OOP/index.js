//lập trình sử dụng biến
let maSV = "abc123";
let tenSV = "Trinh An Thanh";
let CCCD = "123123123";
let sdt = "123123123123";

//sử dụng arr
let thongTinSinhVien = [
  "abc123",
  "Trinh An Thanh",
  "123123123",
  "123123123123",
];
console.log("tenSV", thongTinSinhVien[1]);

//object: đối tượng
/**
 * cấu trúc của 1 object
 *  object = {
 *      key: value
 * }
 * key: tên thuộc tính
 * value: giá trị của thuộc tính đó
 * truy xuất thuộc tính(key) của đối tượng: object.key hoặc object["key"]
 */
let ttsv = {
  key: "value",
  maSV: "abc123",
  tenSV: "Trinh An Thanh",
  cccd: "123123123",
  sdt: "123123123123",
};
console.log("tên sinh viên: ", ttsv.tenSV);

//duyệt object
for (let key in ttsv) {
  console.log(key, ttsv[key]); // không sử dụng được ttsv.key vì .key đồng nghĩa việc gọi tới thuộc tính là key
}

//CRUD
/**
 * Read: vòng lặp for in
 *      object["tên thuộc tính"] hoặc object.thuocTinh
 *
 * Create: thêm 1 thuộc tính mới vào trong đối tượng (khi thêm thì key phải khác biệt)
 *       object.tenThuocTinhMoi = "Giá trị"
 *       object['tenThuoctinhMoi'] = "Giá trị"
 *
 * Update: thay đổi giá trị thuộc tính
 *       object["key"] = "giá trị mới" // tương tự giống như thêm mới thì key trùng nhau thì giá trị sau sẽ đè lên giá trị trước
 *
 * Delete xóa thuộc tính object
 *        delete object.key
 */

ttsv.tuoi = 20;
console.log(ttsv);

delete ttsv.tuoi;
console.log(ttsv);

let ttsv2 = {
  //thuộc tính
  maSV: "abc123",
  tenSV: "Trinh An Thanh",
  cccd: "123123123",
  sdt: "123123123123",
  //phương thức
  showInfo: function () {
    console.log(123);
    console.log("name", this.tenSV); //this này gọi con trỏ, sẽ trỏ về đối tượng object chứa nó
    //lưu ý: khi sử dụng this thì bắc buộc phải sử dụng function(){}, không sử dụng arrow function( ()=>{} )
  },
  //   showInfo2: () => {
  //     console.log("name", this.tenSV); //undefined => this sẽ tìm ra window 
  //   }
};

ttsv2.showInfo();

//lập trình hướng đối tượng là hướng các biến và hàm về đối tượng cần xử lý

