function getValues() {
  document.getElementById("alert").classList.add("invisible");

  let userString = document.getElementById("userString").value;
  let revString = ReverseAString(userString);

  displayString(revString);
}

function ReverseAString(userString) {
  let revString = [];

  // reverse the string using decrementing for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }
  return revString;
}

function displayString(revString) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <strong><h4>${revString}</h4></strong>`;

  document.getElementById("alert").classList.remove("invisible");
}
