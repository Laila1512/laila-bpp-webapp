const joblist = ["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"];

function onLoad() {
const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
x = document.getElementsByClassName("sampleText");  // Find the elements
  for(var i = 0; i < x.length; i++){
  x[i].innerText = sampleText;    // Change the content
  }
  
let datalist = document.getElementById("jobrole");

for (const x of this.joblist) {
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
  const courses = ["People Management - HR", "Human Resource Training - HR",
        "Sales Strategy - Marketing", "Advertising at EY - Marketing", 
        "Submitting Financial Statements - Tax", "Accountancy Basics - Tax",
        "Audit Basics - Assurance", "Risk Management - Assurance",
        "Diversity & Inclusion - People Advisory Services", "Future Skills - People Advisory Services"];
  
  if (validateFormData(firstName, lastName, email, jobRole, startDate)) {
    document.getElementById("displayUserDetails").innerHTML = "<h1>Welcome " + firstName + " " + (!!lastName ? lastName : "") + "</h1>" + 
   (!!email ? "Email: " +  email + "<br>": "") + "Job role : " + jobRole + (!!startDate ? "<br>Start date: " + startDate : "");
    document.getElementById("courseList").innerHTML = "<h1>Suggested Courses:</h1>"
    for (const x of courses) {
      if (x.includes(jobRole)) {
        document.getElementById("courseList").innerHTML =  document.getElementById("courseList").innerHTML + x + "<br>";
      }
    }
  }
}

function validateFormData() {
  let validData = true; 
  if (!!arguments[2] && !arguments[2].match(/^\S+@\S+\.\S+$/)) {
    validData = false;
    alert("Please enter a valid email address");
  }
  else if (!!arguments[3] && !this.jobList.includes(arguments[3]) {
     validData = false;
     alert("Please enter a valid job role");
  }
  return validData;
}
