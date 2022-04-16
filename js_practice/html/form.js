function myfunction() {
  var a, b, c, d, e, f, g, h, i, j, k, l, m;
  a = String(document.getElementById("fname").value);
  b = String(document.getElementById("lname").value);
  e = String(document.getElementById("num").value);
  g = document.getElementById("date").value;
  console.log(a, b, e, g);
  c = a.length;
  d = b.length;
  f = e.length;
  h = new Date(g);
  j = 2022 - h.getFullYear();
  if (j < 18) {
    alert("sorry Age out of range");
  }

  if (c < 3) {
    alert("Enter Valid Name.");
  }
  if (d < 3) {
    alert("Enter Valid Last Name.");
  }
  if (f == 10) {
    return true;
  } else {
    return alert("Enter Valid Phone Number.");
  }
}
