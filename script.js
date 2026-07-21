const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Show error message and red border
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('.error-msg');
    small.innerText = message;
}

// Show green border for valid inputs
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email validity using regex
function isValidEmail(emailVal) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailVal).toLowerCase());
}

// Validate Username
function checkUsername() {
    const val = username.value.trim();
    if (val === '') {
        showError(username, 'Username is required');
        return false;
    } else if (val.length < 3) {
        showError(username, 'Username must be at least 3 characters');
        return false;
    } else {
        showSuccess(username);
        return true;
    }
}

// Validate Email
function checkEmail() {
    const val = email.value.trim();
    if (val === '') {
        showError(email, 'Email is required');
        return false;
    } else if (!isValidEmail(val)) {
        showError(email, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(email);
        return true;
    }
}

// Validate Password
function checkPassword() {
    const val = password.value.trim();
    const hasNumber = /\d/.test(val);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(val);

    if (val === '') {
        showError(password, 'Password is required');
        return false;
    } else if (val.length < 8) {
        showError(password, 'Password must be at least 8 characters');
        return false;
    } else if (!hasNumber || !hasSpecial) {
        showError(password, 'Include at least 1 number and 1 special character');
        return false;
    } else {
        showSuccess(password);
        return true;
    }
}

// Real-time validation listeners
username.addEventListener('input', checkUsername);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);

// Form submit event
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isUsernameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid) {
        alert('Form submitted successfully!');
        form.reset();
        // Clear success styles
        [username, email, password].forEach(input => {
            input.parentElement.className = 'form-control';
        });
    }
});