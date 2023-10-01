document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if (email == 'saber@bank.com' && password == 91196) {
        location.href = "http://127.0.0.1:5500/account.html"
    }
    else {
        alert('invalid user')
    }
})
