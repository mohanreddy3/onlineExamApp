document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check the credentials
    if (username === 'admin' && password === 'password123') {
        // Redirect to the exam page if credentials are correct
        window.location.href = 'exam.html';
    } else {
        // Display an error message if credentials are incorrect
        alert('Invalid username or password. Please try again.');
    }
});
