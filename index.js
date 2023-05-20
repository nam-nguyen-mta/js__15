//------------------------------------------------------BÀI 1: ĐIỂM TUYỂN SINH--------------------------------------------------
/***
 *bài tập tuyển sinh
 * 
 * 1/ input: Điểm chuẩn, điểm 3 môn, khu vực, loại đối tượng
 * 
 * 2/ tính tổng điểm:
 *      - tính điểm ưu tiên theo khu vực (if else)
 *      - tính điểm ưu tiên theo đối tượng (if else)
 *      - tổng điểm = điểm 3 môn + điểm khu vực + điểm đối tượng
 * 
 * 3/ kết quả: tổng điểm >= điểm chuẩn và không có môn nào 0 điểm => đậu
 * 
 * 4/ in kết quả ra màn hình
 * 
 */

function calAreaGrade(area) {
  var areaMark = 0
  // Tính điểm ưu tiên theo khu vực
  if (area === "A") {
    areaMark = 2;
  } else if (area === "B") {
    areaMark = 1;
  } else if (area === "C") {
    areaMark = 0.5;
  }
  return areaMark
}


function calTypeGrade(type) {
  var typeMark = 0
  // Tính điểm ưu tiên theo đối tượng
  if (type === "1") {
    typeMark = 2.5;
  } else if (type === "2") {
    typeMark = 1.5;
  } else if (type === "3") {
    typeMark = 1;
  }
  return typeMark
}

function exercise1() {
  var benchmark = +document.getElementById("benchmarkInput").value
  var sub1 = +document.getElementById("sub1Input").value
  var sub2 = +document.getElementById("sub2Input").value
  var sub3 = +document.getElementById("sub3Input").value

  // không sử dụng dấu cộng cho check
  var areaVal = document.getElementById("areaSelect").value
  var typeVal = document.getElementById("typeSelect").value

  //điểm khu vực
  var areaGrade = calAreaGrade(areaVal)
  //điểm đối tượng
  var typeGrade = calTypeGrade(typeVal)

  //tính tổng điểm
  var sum = sub1 + sub2 + sub3 + areaGrade + typeGrade

  if ((sum >= benchmark) && (sub1 !== 0) && (sub2 !== 0) && (sub3 !== 0)) {
    document.getElementById("noticeSpan").innerHTML = "trúng tuyển"
  }
  else {
    document.getElementById("noticeSpan").innerHTML = "tạch"
  }

}

// event: click
// event handle: exercise1
// khi viết exercise1 mà ko có cặp ngoặc tròn (): nghĩa là đăng kí trước chỉ khi xảy ra event mới chạy hàm này còn nếu viết () thì nghĩa là chưa xảy ra sự kiện nó đã chạy luôn r

document.getElementById("btnSubmit").onclick = exercise1;



//------------------------------------------------------BÀI 2: TÍNH TIỀN ĐIỆN--------------------------------------------------
function calElectric(kwFunct) {
  var moneyElectric = 0
  if (kwFunct <= 50) {
    moneyElectric = kwFunct * 500
  }
  else if (kwFunct > 50 && kwFunct <= 100) {
    moneyElectric = (kwFunct - 50) * 650 + 50 * 500
  }
  else if (kwFunct > 100 && kwFunct <= 200) {
    moneyElectric = (kwFunct - 100) * 850 + 50 * 500 + 50 * 650
  }
  else if (kwFunct > 200 && kwFunct <= 350) {
    moneyElectric = (kwFunct - 200) * 1100 + 50 * 500 + 50 * 650 + 100 * 850
  }
  else {
    moneyElectric = (kwFunct - 350) * 1300 + 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100
  }
  return moneyElectric
}

function exercise2() {
  var name = document.getElementById("nameInput").value
  var kw = +document.getElementById("kwInput").value

  document.getElementById("nameSpan").innerHTML = name
  document.getElementById("sumElectric").innerHTML = Math.round(calElectric(kw))
}

document.getElementById("subElectric").onclick = exercise2;



// bài tập 3
function calSalaryTax(salaryFunct, numberDependFunct) {
  var salaryTax = 0
  if (salaryTax >= 0 && numberDependFunct >= 0) {
    salaryTax = salaryFunct - 4 - numberDependFunct * 1.6
  }
  else (
    alert("bạn nhập giá trị không hợp lệ hãy nhập lại")
  )
  return salaryTax
}

function calTax(salaryFunct) {
  var taxFunct = 0
  if (salaryFunct <= 60) {
    taxFunct = salaryFunct * 0.05
  }
  else if (salaryFunct > 60 && salaryFunct <= 120) {
    taxFunct = salaryFunct * 0.1
  }
  else if (salaryFunct > 120 && salaryFunct <= 210) {
    taxFunct = salaryFunct * 0.15
  }
  else if (salaryFunct > 210 && salaryFunct <= 384) {
    taxFunct = salaryFunct * 0.2
  }
  else if (salaryFunct > 384 && salaryFunct <= 624) {
    taxFunct = salaryFunct * 0.25
  }
  else if (salaryFunct > 624 && salaryFunct <= 960) {
    taxFunct = salaryFunct * 0.3
  }
  else {
    taxFunct = salaryFunct * 0.35
  }
  return taxFunct
}

function exercise3() {

  var name3 = document.getElementById("nameInput3").value
  var salary = +document.getElementById("salaryInput3").value
  var numberDepend = +document.getElementById("numberDependInput").value

  document.getElementById("nameSpan3").innerHTML = name3
  document.getElementById("taxSpan").innerHTML = Math.round(calTax(calSalaryTax(salary, numberDepend)))

}

document.getElementById("subTax").onclick = exercise3;

// bài 4: tính tiền cáp

function calBill(customerFunct, connectorInput, channelFunct) {
  var billFunct
  if (customerFunct === "private") {
    billFunct = 4.5 + 20.5 + channelFunct * 7.5
  }
  else if (customerFunct === "company") {
    if (connectorInput <= 10) {
      billFunct = 15 + 75 + channelFunct * 50
    }
    else if (connectorInput > 10) {
      billFunct = 15 + 75 + (connectorInput - 10) * 5 + channelFunct * 50
    }
  }
  else {
    
  }
  return billFunct
}

function exercise4() {

  var code = document.getElementById("codeInput").value
  var name4 = document.getElementById("nameInput4").value
  var customer = document.getElementById("customerSelect").value
  var connector = +document.getElementById("connectorInput").value
  var channel = +document.getElementById("channelInput").value

  document.getElementById("customerSpan").innerHTML = name4
  document.getElementById("codeSpan").innerHTML = code
  document.getElementById("moneyCable").innerHTML = Math.round(calBill(customer, connector, channel))

}

function disableConnector() {
  if (document.getElementById("customerSelect").value === "private") {
    document.getElementById("connectorInput").style.display = "none"
    document.getElementById("channelInput").placeholder = "hãy nhập số kênh"
  }
  else if (document.getElementById("customerSelect").value === "company") {
    document.getElementById("connectorInput").style.display = "inline"
    document.getElementById("channelInput").placeholder = "hãy nhập số kênh cao cấp"
  }
  else{
    alert("ở bài tập 4 tại ô khách hàng bạn hãy chọn một trong các loại hình khách hàng của mình")
  }
}


document.getElementById("subMoneyCab").onclick = exercise4