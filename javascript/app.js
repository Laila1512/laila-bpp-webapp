function onLoad() {
const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
x = document.getElementsByClassName("sampleText");  // Find the elements
  for(var i = 0; i < x.length; i++){
  x[i].innerText = sampleText;    // Change the content
  }
  
const joblist = ["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"];
let datalist = document.getElementById("jobrole");

for (const x of joblist) {
  const option = document.createElement('option');
  option.value = x;
  datalist.appendChild(option);
};
}

function onSave() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let jobRole = document.getElementById("jobList").value;
  let startDate = document.getElementById("startdate").value;
  
  if (validateFormData(firstName, lastName, email, jobRole, startDate)) {
    document.getElementById("displayUserDetails").innerHTML = firstName, lastName, email, jobRole, startDate;
  }
}

function validateFormData() {
  console.log(arguments);
  return true;
}
