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
