document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('voice-btn').addEventListener('click', startVoiceInput);

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value;
    if (userMessage.trim()) {
        displayMessage('User', userMessage);
        inputField.value = '';
        // Simulated chatbot responses (you can replace these with real responses or API calls)
        setTimeout(() => respondToUser(userMessage), 1000);
    }
}

function displayMessage(sender, message) {
    const chatOutput = document.getElementById('chat-output');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'User' ? 'message user-message' : 'message bot-message';
    messageDiv.innerHTML = `<span class="sender-name">${sender}</span>: ${message}`;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll
}

function respondToUser(message) {
    const selectedLanguage = document.getElementById('language-select').value;

    // Define responses in different languages
    const responses = {
        admissions: {
            en: 'You can find information about college admissions on our Admissions page. Would you like me to direct you there?',
            hi: 'आप हमारे प्रवेश पृष्ठ पर कॉलेज प्रवेश के बारे में जानकारी प्राप्त कर सकते हैं। क्या मैं आपको वहां ले चलूं?',
            kn: 'ನೀವು ನಮ್ಮ ಪ್ರವೇಶ ಪುಟದಲ್ಲಿ ಕಾಲೇಜು ಪ್ರವೇಶದ ಕುರಿತು ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಬಹುದು. ನಾನು ನಿಮ್ಮನ್ನು ಅಲ್ಲಿ ಮಾರ್ಗದರ್ಶಿಸಲು ಬಯಸುತ್ತೀರಾ?',
            ml: 'നിങ്ങൾക്ക് ഞങ്ങളുടെ അഡ്മിഷൻ പേജിൽ കോളേജ് അഡ്മിഷൻ സംബന്ധിച്ച വിവരങ്ങൾ ലഭ്യമാണ്. ഞാൻ നിങ്ങളെ അവിടെ എത്തിക്കുമോ?',
            te: 'మీరు మా ప్రవేశ పేజీలో కళాశాల ప్రవేశం గురించి సమాచారం పొందవచ్చు. నేను మిమ్మల్ని అక్కడకు తీసుకెళ్లాలా?'
        },
        schedule: {
            en: 'Please visit the Course Schedule section on the college website or let me know what specific information you need.',
            hi: 'कृपया कॉलेज वेबसाइट के कोर्स शेड्यूल अनुभाग पर जाएं या मुझे बताएं कि आपको क्या विशेष जानकारी चाहिए।',
            kn: 'ದಯವಿಟ್ಟು ಕಾಲೇಜು ವೆಬ್‌ಸೈಟ್‌ನ ಕೋರ್ಸ್ ಶೆಡ್ಯೂಲ್ ವಿಭಾಗಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ನಿಮಗೆ ಯಾವ ಮಾಹಿತಿಯ ಅಗತ್ಯವಿದೆ ಎಂಬುದನ್ನು ನನಗೆ ತಿಳಿಸಿ.',
            ml: 'കോളജ് വെബ്സൈറ്റ്上的 കോഴ്സ് ഷെഡ്യൂൾ വിഭാഗം സന്ദർശിക്കുക അല്ലെങ്കിൽ നിങ്ങൾക്ക് ആവശ്യമുള്ള പ്രത്യേക വിവരങ്ങൾ എനിക്ക് അറിയിക്കുക.',
            te: 'కళాశాల వెబ్‌సైట్‌లోని కోర్సు షెడ్యూల్ విభాగాన్ని సందర్శించండి లేదా మీకు అవసరమైన సమాచారం చెప్పండి.'
        },
        // Add more responses as needed for other intents
    };

    // Check for a keyword in the message and respond accordingly
    let responseKey = '';
    if (message.toLowerCase().includes('admissions')) {
        responseKey = 'admissions';
    } else if (message.toLowerCase().includes('course schedule')) {
        responseKey = 'schedule';
    } else {
        responseKey = 'default';
    }

    // Select the appropriate response
    let response = '';
    if (responseKey && responses[responseKey]) {
        response = responses[responseKey][selectedLanguage] || responses[responseKey]['en'];
    } else {
        response = {
            en: 'I\'m here to help with anything related to the college! Could you clarify what you need?',
            hi: 'मैं कॉलेज से संबंधित किसी भी चीज़ में मदद करने के लिए यहां हूं! कृपया स्पष्ट करें कि आपको क्या चाहिए?',
            kn: 'ಕಾಲೇಜು ಸಂಬಂಧಿತ ಯಾವುದೇ ವಿಷಯದಲ್ಲಿ ಸಹಾಯ ಮಾಡಲು ನಾನು ಇಲ್ಲಿ ಇದ್ದೇನೆ! ನಿಮಗೆ ಏನು ಬೇಕು ಎಂದು ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟಪಡಿಸಿ.',
            ml: 'കോളേജുമായി ബന്ധപ്പെട്ട കാര്യങ്ങളിൽ സഹായിക്കാൻ ഞാൻ ഇവിടെ ഉണ്ടു! നിങ്ങൾക്ക് എന്താണ് ആവശ്യമെന്നു വ്യക്തമാക്കാമോ?',
            te: 'కళాశాల‌కు సంబంధించిన ఏదైనా సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను! మీకు అవసరమైనది స్పష్టంగా చెప్పగలరా?'
        }[selectedLanguage] || 'I\'m here to help with anything related to the college! Could you clarify what you need?';
    }

    displayMessage('Bot', response);
}

function startVoiceInput() {
    const selectedLanguage = document.getElementById('language-select').value;
    alert(`Voice input is under construction! You selected ${selectedLanguage}. Stay tuned for updates.`);
}
