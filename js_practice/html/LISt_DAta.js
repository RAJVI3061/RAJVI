var array = new Array();
function add() {
  get();
  array.push({
    fname: document.getElementById("fname").value,
    fname: document.getElementById("phonenumber").value,
    fname: document.getElementById("email").value,
  });
  localStorage.setItem("Data", JSON.stringify(array));
}
function get() {
  var str = localStorage.getItem("Data");
  if (str != null) array = JSON.parse(str);
}
function del() {
  localStorage.clear();
}
function show() {
  get();
  var tbl = document.getElementById("Table");
  for (i = 0; i < array.length; i++) {
    var r = tbl.insertRow();
    var cell1 = r.insertCell();
    var cell2 = r.insertCell();
    var cell3 = r.insertCell();
    cell1.value = array[i].fname;
    cell2.value = array[i].phonenumber;
    cell3.value = array[i].email;
  }
}
