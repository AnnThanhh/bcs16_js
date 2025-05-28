export function tinhGiaiThua(n) {
  //th: người dùng nhập vô số 0 => 0! = 1
  let giaiThua = 1;
  let soHang = 1;
  while (soHang <= n) {
    giaiThua *= soHang;
    soHang++;
  }
  return giaiThua;
}

export function tinhTongChan(n) {
  let tongSoChan = 0;
  let soHang = 1;
  while (soHang <= n) {
    if (soHang % 2 == 0) {
      tongSoChan += soHang;
    }
    soHang++;
  }
  return tongSoChan;
}

/**
 * ketQua = false
 * soChia =1
 * n: số từ người dùng nhập
 *
 * while (soChia <= n)
 * if(soChia % n ==0)
 *      demUoc++
 *
 * soChia++
 *
 *
 * if(demUoc === 2){
 *  Ketqua = true
 * }else{
 * ketqua =false
 * }
 */

//soChia 2 <= căn bậc 2 của n

export function kiemTraNT(n) {
  let kqKiemTra = false; //false là không phải số nt, true là số nt

  let soChia = 1;
  let demUoc = 0;

  while (soChia <= n) {
    //mỗi lần chia sẽ kiểm tra xem thử có phải là ước hay không
    if (n % soChia == 0) {
      demUoc++;
    }

    soChia++;
  }

  if (demUoc === 2) {
    kqKiemTra = true;
  } else {
    kqKiemTra = false;
  }
  return kqKiemTra;
}

export function kiemTraNTv2(n) {
  let kqKiemTra = true;
  // bất kì số tự nhiên cũng chia hết cho 1 và chính, cho nên kiểm tra xem thử còn tồn tại thêm 1 ước nữa thì không phải số NT
  let soChia = 2;
  while (soChia <= Math.sqrt(n)) {
    if (n % soChia === 0) {
      kqKiemTra = false;
      break;
    }
    soChia++;
  }
  return kqKiemTra;
}

export function inSao(soSao) {
  let stringHTML = ``;
  let num = 1;
  while (num <= soSao) {
    stringHTML += `<i class="fa-solid fa-star"></i>`;
    num++;
  }
  return stringHTML;
}

export function tongSoChan(n) {
  let tongChan = 0;
  for (let num = 1; num <= n; num++) {
    if (num % 2 == 0) {
      tongChan += num;
    }
  }
  return tongChan;
}

