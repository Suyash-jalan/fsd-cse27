document.getElementById('registrationForm').addEventListener('submit', function (event) {

    event.preventDefault();


    const fullName = document.getElementById('fullName');
    const phoneNumber = document.getElementById('phoneNumber');
    const gmail = document.getElementById('gmail');
    const password = document.getElementById('password');

    let isFormValid = true;

    function showError(inputElement, errorElementId, message) {
        const errorElement = document.getElementById(errorElementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        inputElement.style.borderColor = '#dc3545';
        isFormValid = false;
    }

    function clearError(inputElement, errorElementId) {
        const errorElement = document.getElementById(errorElementId);
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        inputElement.style.borderColor = '#ccc';
    }

    const nameValue = fullName.value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (nameValue === "") {
        showError(fullName, 'nameError', 'Name is required.');
    } else if (nameValue.length < 3) {
        showError(fullName, 'nameError', 'Name must be at least 3 characters.');
    } else if (!nameRegex.test(nameValue)) {
        showError(fullName, 'nameError', 'Name can only contain letters.');
    } else {
        clearError(fullName, 'nameError');
    }


    const phoneValue = phoneNumber.value.trim();
    const phoneRegex = /^\d{10}$/;
    if (phoneValue === "") {
        showError(phoneNumber, 'phoneError', 'Phone number is required.');
    } else if (!phoneRegex.test(phoneValue)) {
        showError(phoneNumber, 'phoneError', 'Enter a valid 10-digit phone number.');
    } else {
        clearError(phoneNumber, 'phoneError');
    }


    const gmailValue = gmail.value.trim().toLowerCase();
    const gmailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;
    if (gmailValue === "") {
        showError(gmail, 'gmailError', 'Gmail address is required.');
    } else if (!gmailRegex.test(gmailValue)) {
        showError(gmail, 'gmailError', 'Enter a valid address ending in @gmail.com.');
    } else {
        clearError(gmail, 'gmailError');
    }

    const passwordValue = password.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordValue === "") {
        showError(password, 'passwordError', 'Password is required.');
    } else if (!passwordRegex.test(passwordValue)) {
        showError(password, 'passwordError', 'Must be 8+ characters with an uppercase letter, lowercase letter, and number.');
    } else {
        clearError(password, 'passwordError');
    }

    const confirmpassElement = document.getElementById('confirm-password');
    const confirmpass = confirmpassElement.value;
    if(confirmpass === passwordValue){
        clearError(confirmpassElement, 'confirm-passwordError');
    }else{
        showError(confirmpassElement, 'confirm-passwordError', 'Confirm password does not match password.');
        isFormValid = false;
    }

    if (isFormValid) {
        const successBox = document.getElementById('successMessage');
        successBox.style.display = 'block';

        document.getElementById('registrationForm').reset();

        setTimeout(() => {
            successBox.style.display = 'none';
        }, 4000);
    }
});

const responsesArray = [];
