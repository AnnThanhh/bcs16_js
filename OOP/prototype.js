// let user = {
//   email: "abc@gmai.com",
//   password: 123,
// };

// let admin = {
//   email: "cdf@gmail.com",
//   password: 123,
// };

//prototype: lớp đối tượng
//es5
// function Member() {
//   this.email = "";
//   this.password = "";
//   this.bod = "";

//   this.showInfo = function () {
//     console.log(`
//             email: ${this.email},
//             pass: ${this.password}
//             bod: ${this.bod}
//             `);
//   };
// }
//es6
class Member {
  email = "";
  password = "";
  bod = "";

  showInfo() {
    console.log(`
        email: ${this.email},
        pass: ${this.password}
        bod: ${this.bod}
        `);
  }
}

let user = new Member();
user.email = "abc@gmail.com";
user.password = 123;
user.showInfo();
console.log("user", user);

let admin = new Member();
admin.email = "cde@gmail.com";
admin.password = 123;
console.log("admin", admin);

//quản lý và xử lý đối tượng
/**
 * 2 dạng kiểu dữ liệu
 * primative value: string, number, boolean, undefined, null
 * non-primative value: object, array(object) */
//liên quan đến bộ nhớ và tham chiếu
let num1 = 5;
let num2 = num1;
num2 = 10;

console.log("num1", num1); //5
console.log("num2", num2); //10

let obj1 = {
  number: 5,
};
let obj2 = { ...obj1 }; //spread operator (shadow clone)

obj2.number = 10;
console.log("obj1", obj1); //5 //5
console.log("obj2", obj2); //5 //10

//deep clone -> mới update được những thuộc lòng bên trong object

let product = {
  id: 1,
  name: "shoe",
  price: 1000,

  desc: {
    img: "https://i.pravatar.cc",
    shortDesc: "............",
  },
};

let productClone = { ...product };
//let productClone = _.cloneDeep(product)

productClone.id = 2;
productClone.desc.shortDesc = "abc";

console.log(product);
console.log(productClone);

/**
 * kết luận:
 * khi nào không cần clone: khi ta cần update thông tin của object
 * khi nào cần clone: khi ta sử dụng object để xử lý thêm các tác vụ khác
 */

//array object

const phones = [
  { id: 1, name: "iPhone 14 Pro", price: 999, type: "apple" },
  { id: 2, name: "Samsung Galaxy A54", price: 499, type: "samsung" },
  { id: 3, name: "Sony Xperia 10 V", price: 399, type: "sony" },
  { id: 4, name: "iPhone SE (2022)", price: 429, type: "apple" },
  { id: 5, name: "Sony Xperia Pro-I", price: 1299, type: "sony" },
  { id: 6, name: "Samsung Galaxy S23 Ultra", price: 1199, type: "samsung" },
  { id: 7, name: "iPhone 13", price: 799, type: "apple" },
  { id: 8, name: "Samsung Galaxy Z Flip 5", price: 999, type: "samsung" },
  { id: 9, name: "Sony Xperia Ace III", price: 299, type: "sony" },
  { id: 10, name: "iPhone 14", price: 899, type: "apple" },
  { id: 11, name: "Samsung Galaxy M14", price: 199, type: "samsung" },
  { id: 12, name: "Sony Xperia 5 IV", price: 799, type: "sony" },
  { id: 13, name: "iPhone 12 Mini", price: 699, type: "apple" },
  { id: 14, name: "Samsung Galaxy S23", price: 899, type: "samsung" },
  { id: 15, name: "Sony Xperia 1 V", price: 949, type: "sony" },
];

phones[1].price = 2000;
console.log(phones);

for (let phoneItem of phones) {
  console.log(phoneItem);
}

/**
 * lấy ra các sản phẩm có type là apple
 * .filter: là phương thức của array dùng để thoải điều kiện của function bên trong với kết quả trả về là 1 mảng
 */

function getApplePhone() {
  let output = [];
  for (let phone of phones) {
    if (phone.type === "apple") {
      output.push(phone);
    }
  }
  return output;
}

let res1 = getApplePhone();
console.log(res1);

let res2 = phones.filter(function (phone) {
  return phone.type === "apple";
});

// let res3 = phones.filter((phone) => phone.type === "apple");
console.log(res2);

/**
 * lấy ra sản phẩm có id là 12  thay đổi giá tiền thành 2000
 * .find: tương tự filter tuy nhiên kết quả trả về là phần tử đầu tiên khớp với biểu thức, còn nếu không tìm thấy thì kết quả return ra undefined => sẽ được dùng cho các nghiệp vụ update phần tử trên mảng
 * .findIndex: tương tự find tuy nhiên khi tìm tháy giá trị thỏa mãn biểu thức thì return về index (thay vì element ). nếu mà không tìm thấy thì sẽ trả về -1  => thường sử dụng trong nghiệp xóa
 */

function getProductById(id) {
  let product = undefined; //chưa xác định
  for (let phone of phones) {
    if (phone.id === id) {
      product = phone;
      break;
    }
  }
  return product;
}

let phone_rs = getProductById(12);
phone_rs.price = 2000;
console.log(phones);

let phoneItem = phones.find((item) => item.id === 12);
console.log(phoneItem);
if (phoneItem !== undefined) {
  phoneItem.price = 4000;
}
console.log(phones);

//xóa sản phẩm có id là 14
let indexDel = phones.findIndex((item) => item.id === 14);
if (indexDel != -1) {
  phones.splice(indexDel, 1);
}

//xóa sản phẩm có type là samsung
let phoneFilter = phones.filter(item => item.type !== "samsung")
console.log(phoneFilter);