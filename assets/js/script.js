// Fetch Product Data from API
async function fetchProducts() {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    displayProducts(products);
}

// Display Products
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products
        .map(product => `
            <div class="product p-3 col-md-4">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">₹${product.price}</p>
            </div>
        `)
        .join('');
}

// Search Functionality
document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    fetchProducts().then(products => {
        const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });
});

// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

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
fetchProducts();
