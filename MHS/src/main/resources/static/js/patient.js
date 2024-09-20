function validatePasswords() {
    // Get the values from the input fields
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cpassword').value;

    // Get the message element to display the result
    const messageElement = document.getElementById('message');

    // Check if the passwords match
    if (password && confirmPassword) { // Check if both fields are filled
        if (password === confirmPassword) {
            messageElement.textContent = 'Passwords match!';
            messageElement.className = 'success';
        } else {
            messageElement.textContent = 'Passwords do not match.';
            messageElement.className = 'error';
        }
    } else {
        messageElement.textContent = ''; // Clear the message if one or both fields are empty
    }
}

document.getElementById('email').addEventListener('input', function() {
    const emailInput = this.value;
    const messageElement = document.getElementById('e_Message');

    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        this.classList.add('valid');
        this.classList.remove('invalid');
        messageElement.textContent = 'Email format is correct.';
        messageElement.className = 'valid-message';
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
        messageElement.textContent = 'Invalid email format.';
        messageElement.className = 'invalid-message';
    }
});
