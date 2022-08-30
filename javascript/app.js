const jobroles =["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"]
// Get dropdown element from DOM
var dropdown = document.getElementById("jobrole");

// Loop through the array
for (var i = 0; i < jobroles.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(jobroles[i], jobroles[i]);
}

function onSave() {
  let firstName = document.getElementById("fname").value;
  console.log(firstName, "test")
}
