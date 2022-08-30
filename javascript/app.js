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
