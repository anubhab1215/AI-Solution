// Create chatbot toggle button
const chatbotButton = document.createElement('button');
chatbotButton.id = "chatbot-toggle";
chatbotButton.textContent = "Chat";
document.body.appendChild(chatbotButton);

// Create chatbot container
const chatbotContainer = document.createElement('div');
chatbotContainer.id = "chatbot-container";
chatbotContainer.innerHTML = `
  <div id="chatbot-header">Chatbot</div>
  <div id="chatbot-messages"></div>
  <input id="chatbot-input" type="text" placeholder="Type your message..." />
  <button id="chatbot-send">Send</button>
`;
document.body.appendChild(chatbotContainer);

// Show/hide chatbot
chatbotButton.addEventListener('click', () => {
  chatbotContainer.style.display =
    chatbotContainer.style.display === "block" ? "none" : "block";
});

// Basic AI responses
const chatbotAI = (message) => {
  const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! How can I help?",
    "services": "We offer various AI-powered solutions. Check our Services page for more details!",
    "contact": "You can reach us through the Contact Us page.",
    "bye": "Goodbye! Feel free to chat anytime.",
  };
  return responses[message.toLowerCase()] || "Sorry, I don't understand. Can you rephrase?";
};

// Send chatbot messages
document.getElementById('chatbot-send').addEventListener('click', () => {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if (message) {
    const messages = document.getElementById('chatbot-messages');
    messages.innerHTML += `<div>You: ${message}</div>`;
    input.value = '';
    setTimeout(() => {
      const botReply = chatbotAI(message);
      messages.innerHTML += `<div>Bot: ${botReply}</div>`;
    }, 1000);
  }
});
