function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  //console.log(arrows);
  Array.from(arrows).map((arrow, index) => {
    //console.log(arrow);
    arrow.addEventListener("click", function (arrow) {
      var input = arrow.srcElement.previousElementSibling.value;

      const parent = arrow.srcElement.parentElement;

      var nextForm = parent.nextElementSibling;

      //check

      //console.log("here");
      const result = validateUser(input);
      if (result) {
        parent.style.display = "none";
        //console.log(nextForm);
        nextForm.style.display = "flex";
      } else if (input.type === "email" && validateEmail(input)) {
        parent.style.display = "none";
        nextForm.style.display = "flex";
      } else if (input.type === "password" && validateUser(input)) {
        parent.style.display = "none";
        nextForm.style.display = "flex";
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
    });
  });
}
function validateUser(value) {
  if (value.length < 6) {
    console.log("not enough characters");
    errorColor("rgb(189,87,87)");

    return false;
  } else {
    errorColor("rgb(87, 189, 130)");
    return true;
  }
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    errorColor("rgb(87, 189, 130)");
    return true;
  } else {
    errorColor("rgb(189,87,87)");
  }
}
function errorColor(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
