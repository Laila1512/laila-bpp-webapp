function onLoad() {
const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
x = document.getElementsByClassName("sampleText");  // Find the elements
  for(var i = 0; i < x.length; i++){
  x[i].innerText = sampleText;    // Change the content
  }
  
const joblist = ["HR", "Marketing", "Tax", "Assurance", "People Advisory Services"];

for (const x of joblist) {
  const option = document.createElement('option');
  option.value = x;
  datalist.appendChild(option);
};
  
console.log(joblist);
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
}
