const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");
const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");

function validatePasswords() {
  // pass1.classList.remove("is-valid", "is-invalid");
  // pass2.classList.remove("is-valid", "is-invalid");

  pass1.classList = [];
  pass2.classList = [];

  if (
    pass1.value.length >= 6 &&
    pass2.value.length >= 6 &&
    pass1.value === pass2.value
  ) {
    pass1.classList.add("form-control is-valid");
    pass2.classList.add("form-control is-valid");
  } else {
    pass1.classList.add("form-control is-invalid");
    pass2.classList.add("form-control is-invalid");
  }
}

submitBtn.addEventListener("click", (e) => {
  // const passwordsEqual = pass1.value == pass2.value;
  // const validityState1 = pass1.validity;
  // const validityState2 = pass2.validity;

  // if (validityState1.valueMissing) {
  //   pass1.setCustomValidity("You gotta fill this out, yo!");
  // } else if (validityState1.rangeUnderflow) {
  //   pass1.setCustomValidity("We need a higher number!");
  // } else if (validityState1.rangeOverflow) {
  //   pass1.setCustomValidity("Thats too high!");
  // } else if (!passwordsEqual) {
  //   pass1.setCustomValidity("Passwords must be the same.");
  // } else {
  //   pass1.setCustomValidity("");
  // }

  // if (validityState2.valueMissing) {
  //   pass1.setCustomValidity("You gotta fill this out, yo!");
  // } else if (validityState2.rangeUnderflow) {
  //   pass1.setCustomValidity("We need a higher number!");
  // } else if (validityState2.rangeOverflow) {
  //   pass1.setCustomValidity("Thats too high!");
  // } else if (!passwordsEqual) {
  //   pass1.setCustomValidity("Passwords must be the same.");
  // } else {
  //   pass1.setCustomValidity("");
  // }

  form.classList.add("was-validated");
  // validatePasswords();
});
