function validateForm() {
    var nickname = document.getElementById("nickname").value;
    var dob = document.getElementById("DOB").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;

    if (nickname.length < 4) {
        alert("Nickname must be at least 4 characters");
        return false;
    }
    else if (!email.endsWith("@gmail.com")) {
        alert("Please enter a valid email");
        return false;
    }
    else if (password.length < 5) {
        alert("Password must be at least 5 characters");
        return false;
    }
    else if (confirmPassword !== password) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
