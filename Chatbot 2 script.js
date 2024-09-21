// Optional JavaScript to toggle the chatbot window
document.getElementById('chatbot-toggle').addEventListener('click', function() {
    var chatWindow = document.getElementById('chatbot-window');
    if (chatWindow.style.display === 'block') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'block';
    }
});