function palindrome() {
  // classList displays all HTML classes as array in javascript
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;

  if (userString == "") {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "RacecaR",
      text: "You jumped the light! No input detected.",
    });
  } else {
    // let revString = ReverseString(userString);
    //displayString(revString, userString);

    let returnObj = checkPalindrome(userString);
    displayString(returnObj);
  }
}

function checkPalindrome(userString) {
  userString = userString.toLowerCase();
  const regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  let revString = [];
  let returnObj = {};

  // reverse string using for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }

  if (userString == revString) {
    returnObj.msg = "Yes! This is a palindrome!";
  } else {
    returnObj.msg = "No! Not a palindrome!";
  }
  returnObj.reversed = revString;
  return returnObj;
}

// reverse string fn
// function ReverseString(userString) {
//   // if using push, must convert array back to string
//   let revString = [];
//   for (let i = userString.length - 1; i >= 0; i--) {
//     revString += userString[i];
//   }
//   return revString;
// }

/* quick reverse string fn with JS
function ReverseStringJS(userString) {
  // 'split' turns user input string into array
  let userArray = userString.split("");
  // 'reverse' only works on arrays
  let revArray = userArray.reverse(userArray);
  // 'join' returns the array to a string
  let revString = revArray.join("");

  // lets revString be seen outside of the ReverseStringJS function
  return revString;
} */

// display the string
function displayString(returnObj) {
  let palAlert = document.getElementById("alert");
  let alertHdr = document.getElementById("alertHeader");

  if (returnObj.msg.includes("Not")) {
    palAlert.classList.remove("alert-success");
    palAlert.classList.add("alert-danger");
  } else {
    palAlert.classList.remove("alert-danger");
    palAlert.classList.add("alert-success");
  }

  // write to the page
  alertHdr.innerHTML = returnObj.msg;

  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <br><h4>${returnObj.reversed}</h4>`;

  palAlert.classList.remove("invisible");

  // document.getElementById("alert").classList.remove("invisible");
}
