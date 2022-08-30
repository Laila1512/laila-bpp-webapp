const jobroles =["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"]
var options = '';

for (var i = 0; i < jobroles.length; i++) {
  options += '<option value="' + jobroles[i] + '" />';
}

let firstName = "";
let lastName = "";
let jobRole = "";
let startDate = "";

if (document.getElementById('jobrole') != null) {
  document.getElementById('jobrole').innerHTML = options;
}

function onSave() {
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  jobRole = document.getElementById("jobrole").value;
  startDate = document.getElementById("startDate").value;
  console.log(firstName, lastName, jobRole, startDate)
}
