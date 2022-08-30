function onLoad() {
const joblist =["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"];
let datalist = document.getElementById("jobrole");

// for (const x of joblist) {
//   const option = document.createElement('option');
//   option.value = x;
//   datalist.appendChild(option);
// };
  var options = '';

for (var i = 0; i < joblist.length; i++) {
  options += '<option value="' + joblist[i] + '" />';
}

datalist.innerHTML = options;
}

function onSave() {
  let firstName = "";
  let lastName = "";
  let jobRole = "";
  let startDate = "";
  
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  jobRole = document.getElementById("jobrole").value;
  startDate = document.getElementById("startDate").value;
  console.log(firstName, lastName, jobRole, startDate)
}
