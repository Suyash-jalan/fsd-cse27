function press() {
    let password = document.getElementById("password").value;
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    let specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }

        else if (char >= 'a' && char <= 'z') {
            hasLower = true;
        }

        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }

        else if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        alert("strong password");
    } else {
        alert("weak password")
    }

}

