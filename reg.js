function validate(e) {
    e.preventDefault();
    debugger
    let firstname = document.getElementById("firstname").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;
    let add = document.getElementById("add").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    if (firstname == '') {
        alert("Name is Empty");
    }
    else if (age == '') {
        alert("Age is Required");
    }
    else if (date == '') {
        alert("DOB Is Must Required");
    }
    else if (add == '') {
        alert("Address is Empty");
    }
    else if (mobile.length < 10) {
        alert("Number Missing");
    }
    else if (email == '') {
        alert("email id is Empty");
    }
    else if (password.length < 6) {
        alert("Password Must Be Less Than 6 Digit");
    }
    else if (password != confirmpassword) {
        alert("Password did'nt Match Try Again");

    }
  else {
    alert("Registration successful!");
    window.location.href = "./log.html";
 }
}
