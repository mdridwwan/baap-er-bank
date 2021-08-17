document.getElementById('login-submit').addEventListener('click', function() {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password.........\
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password........../
    if (userEmail == 'Ridwan@gmail.com' && userPassword == '01869696652') {
        window.location.href = "banking.html";
    }
})