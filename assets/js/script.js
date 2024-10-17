// Cart functionality
let cart = [];
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart-count');

// Add product to cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
    alert(`${productName} has been added to your cart!`);
}

// Update cart display
function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeItem(index);
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalPriceElement.innerText = `Total: $${total.toFixed(2)}`;
    cartCountElement.innerText = cart.length;
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Chatbot functionality
const chatbot = document.getElementById('chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');

function toggleChatbot() {
    chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (!userMessage) return;

    appendMessage('You', userMessage);
    chatbotInput.value = '';

    // Basic chatbot response simulation
    setTimeout(() => {
        const botResponse = generateBotResponse(userMessage);
        appendMessage('Bot', botResponse);
    }, 500);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${sender}: ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateBotResponse(message) {
    if (message.toLowerCase().includes('hello')) return 'Hi! How can I assist you today?';
    if (message.toLowerCase().includes('price')) return 'Check out our product section for details!';
    return 'I am still learning. Try asking something else!';
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
