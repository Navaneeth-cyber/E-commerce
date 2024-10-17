// Product Data
const products = [
    { name: 'Smartphone', price: 29999 },
    { name: 'Laptop', price: 49999 },
    { name: 'Headphones', price: 1999 },
];

// Display Products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products
        .map(product => `<div class="product"><h3>${product.name}</h3><p>₹${product.price}</p></div>`)
        .join('');
}

// Search Functionality
document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
    displayFilteredProducts(filteredProducts);
});

function displayFilteredProducts(filtered) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = filtered
        .map(product => `<div class="product"><h3>${product.name}</h3><p>₹${product.price}</p></div>`)
        .join('');
}

// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Swiper Initialization
const swiper = new Swiper('.swiper-container', { 
    loop: true, 
    autoplay: { delay: 3000 } 
});

// Chatbot Initialization
const chatbot = document.getElementById('chatbot');
chatbot.innerHTML = '<p>Hello! How can I assist you today?</p>';

// Razorpay Payment Integration
document.getElementById('pay-button').onclick = function () {
    const options = {
        key: 'your-razorpay-key',
        amount: 50000, // Amount in paise (₹500.00)
        currency: 'INR',
        name: 'Navaneeth Store',
        description: 'Test Transaction',
        handler: function (response) {
            alert('Payment successful!');
        }
    };
    const rzp = new Razorpay(options);
    rzp.open();
};

// Initial Load
displayProducts();
