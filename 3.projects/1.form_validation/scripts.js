const form_submit = (event) => {
  event.preventDefault();

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  const mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Check First Name
  if (firstname == "") {
    document.getElementById("firstname_error_message").innerHTML = "firstname is required";
  } else {
    document.getElementById("firstname_error_message").style.display = "none";
  }

  // Check Last Name
  if (lastname == "") {
    document.getElementById("lastaname_error_message").innerHTML = "lastname is required";
  } else {
    document.getElementById("lastaname_error_message").style.display = "none";
  }

  // Check Email
  if (email == "") {
    document.getElementById("email_error_message").innerHTML = "email is required";
  } else {
    if (email.match(mailformat)) {
      console.log(`everything is okay`);
    } else {
      alert("please enter the valid emaid address");
    }
    document.getElementById("email_error_message").style.display = "none";
  }

  // Check Password
  if (password1 == "") {
    document.getElementById("password1_error_message").innerHTML = "password is required";
  } else if (password1.length < 7) {
    document.getElementById("password1_error_message").innerHTML = "password must content 8 charaters long";
  } else {
    document.getElementById("password1_error_message").style.display = "none";
  }

  // Check Confirm Password
  if (password2 == "") {
    document.getElementById("confirm_paossword_error_message").innerHTML = "confirm password cannot be empty";
  } else if (password1 != password2) {
    alert("Passwords are not match");
  } else {
    document.getElementById("confirm_paossword_error_message").style.display = "none";
  }
};
