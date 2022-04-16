function myfunction() {
  var lname,
    fname,
    fcondi1,
    fcondi2,
    fcondi,
    lcondi,
    lcondi2,
    lcondi,
    fresult1,
    fresult2,
    fresult3,
    lresult1,
    lresult2,
    lresult3;
  fname = String(document.getElementById("fname").value);
  lname = String(document.getElementById("lname").value);
  fcondi = fname.length;
  lcondi = lname.length;
  fcondi1 = /[a-zA-Z]/g;
  lcondi1 = /[a-zA-Z]/g;
  fcondi2 = /[0-9]/g;
  lcondi2 = /[0-9]/g;
  //   fresult1=fname.match(fcondi1);
  lresult1 = lname.match(lcondi);
  fresult2 = fname.match(fcondi2);
  lresult2 = lname.match(lcondi2);
  if (fname == null) {
    alert("Please enter first name");
  } else if (lname == null) {
    alert("Please enter last name");
  } else if (fcondi < 3) {
    alert("Enter valid first name with min 3 letters");
  } else if (lcondi < 3) {
    alert("Enter valid last name with min 3 letters");
  } else if (fname != fname.match(fcondi1)) {
    alert("Enter valid first name with alphabets");
  } else if (lname != lresult1) {
    alert("Enter valid last name with alphabets");
  } else if (fname == fresult2) {
    alert("Enter valid first name without numbers");
  } else if (lname == lresult2) {
    alert("Enter valid last name without numbers");
  }
}
//   var pNo, firstDigit, allDigits, numValidate, numResult, rangeResult;
var pNo = document.getElementById("phoneNumber").value;

var firstDigit = pNo.charAt("0");
var numValidate = /[6-9]/g;
var numResult = numValidate.test(firstDigit);
var allDigits = /[0-9]/g;
var rangeResult = allDigits.test(Number(pNo));
if (pNo == null) {
  alert("Please enter Number");
} else if (rangeResult == false) {
  alert("Enter valid number");
} else if (numResult == false) {
  alert("Number should start with 6,7,8,9");
} else if (pNo.length != 10) {
  alert("Number digits should be 10");
}
