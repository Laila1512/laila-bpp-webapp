const joblist =["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"];
const datalist = document.getElementById("jobrole");

for (const x of joblist) {
  const option = document.createElement('option');
  option.value = x;
  datalist.appendChild(option);
};

let firstName = "";
let lastName = "";
let jobRole = "";
let startDate = "";

function onSave() {
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  jobRole = document.getElementById("jobrole").value;
  startDate = document.getElementById("startDate").value;
  console.log(firstName, lastName, jobRole, startDate)
}
