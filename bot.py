<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot with Voice Translation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="chat-container">
        <div id="chat-window" class="chat-window">
            <div class="chat-output" id="chat-output"></div>
        </div>
        <div class="input-container">
            <input type="text" id="user-input" placeholder="Type your message here..." />
            <button id="send-btn">Send</button>
            <button id="voice-btn">🎤</button>
        </div>
    </div>

    <script>
        // JavaScript functionality (basic outline)
        document.getElementById('send-btn').addEventListener('click', sendMessage);
        document.getElementById('voice-btn').addEventListener('click', startVoiceInput);

        function sendMessage() {
            const inputField = document.getElementById('user-input');
            const userMessage = inputField.value;
            if (userMessage.trim()) {
                displayMessage('User', userMessage);
                // Call chatbot processing function here (e.g., API call, chatbot logic)
                inputField.value = '';
            }
        }

        function displayMessage(sender, message) {
            const chatOutput = document.getElementById('chat-output');
            const messageDiv = document.createElement('div');
            messageDiv.className = sender === 'User' ? 'message user-message' : 'message bot-message';
            messageDiv.textContent = `${sender}: ${message}`;
            chatOutput.appendChild(messageDiv);
            chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll
        }

        function startVoiceInput() {
            // Voice input functionality (e.g., speech recognition API) to be integrated here
            alert('Voice input not implemented yet.');
        }
    </script>
</body>
</html>
