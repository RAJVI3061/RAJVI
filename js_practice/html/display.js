function fn() {
  var NAME = document.getElementById("fname").value;

  //   localStorage.setItem("Name", NAME);
  var NUMBER = document.getElementById("phoneNumber").value;
  var EMAIL = document.getElementById("email").value;
  //   localStorage.setItem("No", NUMBER);
  //   localStorage.setItem("Mail", EMAIL);
  data = {
    Name: NAME,
    No: NUMBER,
    Email: EMAIL,
  };
  localStorage.setItem("data", JSON.stringify(data));
  JSON.parse(data);
}
