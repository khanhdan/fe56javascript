console.log("Hello Polly");

/**
 * Biến
 */
// String 
var username = "Nguyen Khanh Dan";
// tên biến : username 
// biến có giá trị "Nguyen Khanh Dan"
var address = "142 Cao Thang";
// Number 
var age = 18;
// Boolean
var status = true;
// Null 
var numberStudent = null;
// undefined 
var people;
// cách đặt tên 
var firstName = "Dinh";
var last_Name = "Dan";

console.log(people);
console.log("ten la: " + username);
console.log("dia chi: " + address);
console.log(username, "dia chi: " + address);

// hoisting 
console.log("fullName: " + fullName);
// khi chưa khai báo biến, ct sẽ tự tạo biến giá trị undifined
var fullName = "Nguyen Van A";

isLogin = true;
console.log("isLogin: ", isLogin);

// console.log("ủaaaa" + student);
const PI = 3.15;
// hằng số phải gán giá trị nếu k sẽ bị lỗi 
console.log(PI);

/**
 * Câu lệnh điều kiện
 */
// 2 dấu bằng so sánh giá trị 
if (1 == "1") {
    console.log("DK đúng");
} else {
    console.log("DK sai");
}
//  3 dấu bằng kiểm tra cả giá trị và kiểu 
if (1 === "1") {
    console.log("DK đúng");
} else {
    console.log("DK sai");
}

// Toán tử ba ngôi
// DK ? "Dung" : "Sai"

1 == "1" ? console.log("DK đúng") : console.log("DK sai");

var btA = true;
var btB = false;
console.log("Kết quả &&: ", btA && btB);
console.log("Kết quả ||: ", btA || btB);
console.log("Phủ định của btAz: ", !btA);

switch (age) {
    case 0:
        console.log("Đây là số 0");
        break;
    case 1:
        console.log("Đây là số 1");
        break;
    case 2:
        console.log("Đây là số 2");
        break;
    case 3:
        console.log("Đây là số 3");
        break;
    default:
        console.log("Đây là số lạ");
        break;
}

var list = ["Nguyen", "Khanh", "Dan", "Nam"];
console.log(list);
console.log(list[0]);

/**
 * Vòng lặp
 */

for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}

var number__1 = 10;
var number__2 = 5;
var number__3 = 20;
var number__4 = 7;

var total = number__1 + number__2;
console.log("tổng là: ", total);
var total2 = number__3 + number__4;
console.log("tổng là: ", total2);

/**
 * Hàm 
 * - hàm không tham số
 * hàm có tham số
 * hàm không có giá trị trở về
 * hàm có giá trị trở về
 */
function tinhTong() {
    var sum = number__1 + number__2
    console.log("sum là: ", sum);
}

tinhTong();

// Hàm có tham số 
function tinhHieu(so1, so2) {
    var hieu = so1 - so2;
    console.log("hieu la: " + hieu);
}

tinhHieu(number__1, number__2);
tinhHieu(number__3, number__4);
tinhHieu(100, 50);

// Hàm có giá trị trở về 
function tinhNhan(so1, so2) {
    var nhan = so1 * so2;
    console.log("ket qua phep nhan la: " + nhan);
    return nhan;
}

var ketQua = tinhNhan(50, 50);
console.log(ketQua);

/**
 * Bài tập
 * tính điểm trung bình: toán lý hóa
 * dtb = ( toan + ly + hoa) /3
 * xếp loại: 
 * >9 : xuất sắc
 * > 8 : giỏi
 * > 7 : khá
 * > 6 : TB Khá
 * > 5 : trung bình
 * dưới <5 : yếu
 * 
 */

function tinhDTB(toan, ly, hoa) {
    return diemTB = (toan + ly + hoa) / 3;

}

var diemTB = tinhDTB(9, 9, 10);

function xepLoai(dtb) {
    if (dtb >= 9) {
        xepLoai = " Xuat sac";
    } else if (dtb >= 8) {
        xepLoai = " Giỏi";
    } else if (dtb >= 7) {
        xepLoai = " Kha";
    } else if (dtb >= 5) {
        xepLoai = " Trung Binh";
    } else {
        xepLoai = "Yếu";
    }
    return xepLoai;
}
var xepLoai = xepLoai(diemTB);
console.log("Điểm TB là: ", diemTB, "xếp loại: ", xepLoai);

/**
 * DOM
 */

var txtInput = document.getElementById("txtInput");
console.log(txtInput);
console.log(txtInput.value);
var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);
var _pText = document.getElementById("pText");
console.log(_pText.innerHTML);
/**
 * Event
 */
// Cách 1 
// function eventClick(){
// var txtValue = document.getElementById("txtInput").value;
// console.log(txtValue);
// }


// Cách 2 
// document.getElementById("btnClick").onclick = function(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

// Cách 3 (callback function)
// document.getElementById("btnClick").addEventListener("click",function(){
//     // addEventListener là 1 hàm có 2 tham số. tham số thứ 2 là 1 hàm khác (callback function)
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// })

// Diễn giải cách 3 
function demoClick() {
    var txtValue = document.getElementById("txtInput").value;
    console.log(txtValue);
}
document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnNhanEmDi").addEventListener("click", function () {
    console.log(111111);
    document.getElementById("divContent").innerHTML = "Thay đổi rồi nhé!";
    document.getElementById("divContent").style.backgroundColor = "red";
    // background_color trong CSS qua JS thành backgroundColor 
    document.getElementById("divContent").style.fontSize = "30px";
    document.getElementById("divContent").style.fontWeight = "700";
    document.getElementById("divContent").style.color = "white";
})

document.getElementById("btnBiAnDi").addEventListener("click", function () {
    document.getElementById("divContent").style.display = "none";
})

document.getElementById("btnHienRa").addEventListener("click", function () {
    document.getElementById("divContent").style.display = "block";
})

document.getElementById("btnDisable").addEventListener("click", function () {
    document.getElementById("btnNhanEmDi").disabled = true;
})

// document.getElementById("btnUndisable").addEventListener("click",function(){
//     document.getElementById("btnNhanEmDi").disabled = false;
// })

document.getElementById("btnUndisable").addEventListener("click", function () {
    document.getElementById("btnNhanEmDi").removeAttribute("disabled");
})

document.getElementById("btnBulbOn").addEventListener("click", function () {
    document.getElementById("imgBulb").src = "./img/pic_bulbon.gif";
})

document.getElementById("btnBulbOff").addEventListener("click", function () {
    document.getElementById("imgBulb").src = "./img/pic_bulboff.gif";
})

document.getElementById("userLogin").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password);

    // if (username === "cybersoft" && password === "cybersoft") {
    //     console.log("Login thành công");
    //     document.getElementById("txtThongBao").innerHTML = "Login thành công"
    //     document.getElementById("txtThongBao").style.backgroundColor = "blue";
    //     document.getElementById("txtThongBao").style.color = "white"
    // } else {
    //     console.log("Login thất bại");
    //     document.getElementById("txtThongBao").innerHTML = "Login thất bại";
    //     document.getElementById("txtThongBao").style.backgroundColor = "red";
    //     document.getElementById("txtThongBao").style.color = "white"
    // }

    if (username === "cybersoft" && password === "cybersoft") {
        // changeColor("Login thành công", "green");
        changeColor2("Logic thành công", "alert alert-success");
    } else {
        // changeColor("Login thất bại", "red");
        changeColor2("Logic thất bại", "alert alert-danger");
    }
})

function changeColor(mess,bg) {
    document.getElementById("txtThongBao").innerHTML = mess;
    document.getElementById("txtThongBao").style.backgroundColor = bg;
    document.getElementById("txtThongBao").style.color = "white"
}

function changeColor2(mess, classes){
    document.getElementById("txtThongBao").innerHTML = mess;
    document.getElementById("txtThongBao").className = classes;
}

/**
 * DOM TagName
 */

 var tagName = document.getElementsByTagName("button")[1];
 console.log(tagName);

 /**
  * DOM className
  */

  var className = document.getElementsByClassName("btn")[0];
  console.log(className);

  /**
   * DOM query selector
   */

   var _querySelector = document.querySelector(".container #txtThongBao");
   console.log(_querySelector);

   /**
    * DOM querySeclectorAll
    */
    var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
    console.log(_querySelectorAll);

    /**
     * Tính tiền tip
     */

     document.getElementById("btnTinhTienTip").addEventListener("click",function(){
         var tiepTip = document.getElementById("txtTongTien").value * document.getElementById("slPhanTramTip").value /100 / document.getElementById("txtSoNguoi").value;

        
         document.getElementById("txtThongBaoTienTip").innerHTML = tiepTip + "mỗi người";
         document.getElementById("txtThongBaoTienTip").className="alert alert-danger d-block";


     })

     
     
     function themNguoiDung(){
         console.log("thy themNguoiDung");
     }
