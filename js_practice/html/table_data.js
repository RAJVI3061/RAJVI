function fn() {
  var FNAME = document.getElementById("fname").value;
  var LNAME = document.getElementById("lname").value;

  var NUMBER = document.getElementById("phoneNumber").value;
  var EMAIL = document.getElementById("email").value;

  data = {
    fName: FNAME,
    lName: LNAME,
    No: NUMBER,
    Email: EMAIL,
  };
  localStorage.setItem("data", JSON.stringify(data));
  //JSON.parse(data);
}
