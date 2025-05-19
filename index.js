/**
 * kiểu dữ liệu
 * +String (chuỗi) - chứa các giá trị không tính toán (họ tên, email, số điện thoại,....)
 * +number (số) - chứa giá trị có thể tính toán (lương, điểm số,...)
 * còn lại là null, undefined, boolean
 */

let hoTen = "Trịnh An Thành"; //string
let luong = 20000000; //number
console.log(hoTen);
console.log(luong);
//typeof dùng để xem kiểu dữ liệu chuẩn
console.log(typeof hoTen);
console.log(typeof luong);

/**
 * Toán tử trong javascript
 * +toán tử số học ( + - * / %)
 */

let soHang1 = 5;
let soHang2 = 10;

console.log("Tổng ", soHang1 + soHang2);
console.log("Hiệu ", soHang1 - soHang2);
console.log("Tích ", soHang1 * soHang2);
console.log("Thương ", soHang1 / soHang2);

// let luong1Ngay = 10;
// let soNgayLamViec = 30;
// let tongLuong = luong1Ngay * soNgayLamViec;
// console.log("Tổng tiền lương: ", tongLuong, " USD");

//Chia lấy phần dư
let result = 10 % 3;
console.log("Dư ", result);

//các phép tính tiền tố, hậu tố

//Tiền tố
// soHang1 = soHang1 + 1;
// console.log(soHang1);
console.log(++soHang1); //tính rồi mới log giá trị ra

//Hậu tố
// console.log(soHang2);
// soHang2 = soHang2 + 1
console.log(soHang2++); //log ra rồi mới tính
console.log(soHang2);
//sử dụng nhiều trong vòng lặp

soHang1 += 10; // tương dương soHang1 = soHang1 + 10
soHang1 -= 10; // tương dương soHang1 = soHang1 - 10
soHang1 *= 10; // tương dương soHang1 = soHang1 * 10
soHang1 /= 10; // tương dương soHang1 = soHang1 / 10

//Phép xử lý trên chuỗi
let fullName = "Nguyễn Văn A";
let message = "Hello " + fullName; //phép nối chuỗi
let message2 = "hello".concat(fullName);
console.log(message);
console.log(message2);

//string template hoặc template string
let message3 = `Hello ${fullName} đã đến với lớp Bootcamp Sáng 16`;

//phép ép kiểu
let res = Number("5") + Number("5");
console.log(res);

//Mô hình IPO

/**
 * Input
 *  +Giá trị từ đề cho
 *  +Hằng số
 *  +Giá trị từ người dùng nhập
 */

/**
 * Process
 *  +xử lý logic
 */

/**
 * Output
 *  +kết quả của process cần hiển thị hoặc sử dụng
 */

//yêu cầu: viết chương trình nhập vào username và password bất kỳ, hiển thị trên trình duyệt = document.write với nội dung sau: chào mừng username đã đến với hệ thống học tập CyberSoft

//input: userName và password
// let userName = prompt("Nhập tên người dùng")
// let password = prompt("Nhập password")
//process
// let ketQua = `chào mừng ${userName} đã đến với hệ thống học tập CyberSoft`;

//output: in kết quả ra màn hình
// document.write(ketQua);

//yêu cầu: viết chương trình cho phép người dùng nhập vào luongNgayLamViec và soNgayLamVie. Yêu cầu tính tổng lương và in ra màn hình. Ví dụ: lương 1 ngày là 10 làm 28 ngày => in ra màn hình tổng lương = 280đ

//input: lương 1 ngày và số ngày làm
// let luong1Ngay = prompt("Nhập lương 1 ngày");
// let soNgayLamViec = prompt("Nhập số ngày làm");

//Process
// let tongLuong = 0;
// tongLuong = luong1Ngay * soNgayLamViec;

//Output
// document.write(`tổng lương = ${tongLuong}`);

//Yêu cầu: viết chương trình cho phép người dùng nhập vào điểm toán, lý, hóa yêu cầu tính điểm trung bình 3 môn của học và in ra màn hình

//input
// let diemToan = Number(prompt("Nhập vào điểm toán"));
// let diemLy = +prompt("nhập vào điểm lý");
// let diemHoa = prompt("Nhập vào điểm hóa")*1;

//process
// let dtb = 0;
// dtb = (diemToan + diemLy + diemHoa) / 3;

//output
// document.write(`điểm trung bình = ${dtb}`)

/**
 * dom là truy xuất đến thẻ thông qua document
 * cú pháp: document.getElementById("id_thẻ")
 */

//.innerHTML: phần nội dung giữa 2 thẻ đóng mở
console.log(document);
let tagP = document.getElementById("txt");
tagP.innerHTML = "abc";
//.className: phần class trên thẻ
tagP.className = "text-red-500 text-3xl text-center";

//.value (đối với các thẻ input): lấy giá trị hoặc gán giá trị
let tagInput = document.getElementById("price");
console.log(tagInput.value);

tagInput.value = "abc";

console.log(tagInput.value);

//.src (đối với các thẻ có thuộc src ví dụ img)

//.style (css): thay đỏi css của thẻ = js
//css                           js
//font-size         ->          fontSize
//padding-top       ->          paddingTop
let tagDiv = document.getElementById("content").style
tagDiv.width = "100px"
tagDiv.height = "60px"
tagDiv.backgroundColor = "red"
tagDiv.marginTop = "10px"

