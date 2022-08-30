const jobroles =["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"]
var options = '';

for (var i = 0; i < jobroles.length; i++) {
  options += '<option value="' + jobroles[i] + '" />';
}

document.getElementById('jobrole').innerHTML = options;

function onSave() {
  let firstName = document.getElementById("fname").value;
  console.log(firstName, "test")
}
