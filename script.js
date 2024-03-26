let cart = {};

function addToCart(itemName) {
    if (cart[itemName]) {
        cart[itemName]++;
    } else {
        cart[itemName] = 1;
    }
    updateCartValue();
}

function updateCartValue() {
    let cartValue = document.getElementById('cart-value');
    let totalItems = Object.values(cart).reduce((acc, curr) => acc + curr, 0);
    cartValue.textContent = totalItems;
}

function printDetails() {
    console.log("Cart Items:");
    for (let item in cart) {
        console.log(`${item}: ${cart[item]}`);
    }
    let totalAmount = calculateTotalAmount();
    console.log("Total Amount:", totalAmount);
}

const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cart) {
        let price = getItemPrice(item);
        totalAmount += price * cart[item];
    }
    return totalAmount.toFixed(2);
}

const getItemPrice = (itemName) => {
    let prices = {
        "This was our pact": 7.49,
        "The famous five": 4.59,
        "Matlida": 6.80,
        "Harry Potter": 10,
        "For Young Readers": 7.29,
        "Wimpy Kid - DIY": 4.99,
        "Dart Board": 17.49,
        "Connect 4": 19.99,
        "Jenga": 20.99,
        "Monopoly": 19.49,
        "Bookmarks": 12.49,
        "Birthday card": 19.99,
        "Stuffed toys": 15.99,
        "Dream catcher drawing": 18.49
    };
    return prices[itemName] || 0;
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        let itemName = button.parentNode.parentNode.querySelector('h3').textContent;
        addToCart(itemName);
    });
});

document.getElementById('cart').addEventListener('click', printDetails);