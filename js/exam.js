document.getElementById('exam-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add logic for handling exam submission here
    // For now, let's redirect to the result page
    window.location.href = 'result.html';
});
