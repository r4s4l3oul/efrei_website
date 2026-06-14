let responses = [];

fetch("../json/response.json")
    .then(response => response.json())
    .then(data => {
        responses = data;
    })
    .catch(error => {
        console.error("Erreur de chargement du JSON :", error);
    });

const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") return;

    addMessage(message, "user");

    const botResponse = getBotResponse(message);
    addMessage(botResponse, "bot");

    userInput.value = "";
}

function addMessage(text, sender) {
    const messageElement = document.createElement("p");

    if (sender === "user") {
        messageElement.className = "user-message";
        messageElement.textContent = "Vous : " + text;
    } else {
        messageElement.className = "bot-message";
        messageElement.textContent = "Bot : " + text;
    }

    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();

    for (let item of responses) {
        for (let keyword of item.keywords) {
            if (message.includes(keyword.toLowerCase())) {
                return item.answer;
            }
        }
    }

    return "Désolé, je n'ai pas compris votre question.";
}