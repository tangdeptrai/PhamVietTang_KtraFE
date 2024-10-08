function updateQuantity(button, change) {
    const quantityInput = button.parentNode.querySelector('.quantity');
    let quantity = parseInt(quantityInput.value) + change;

    if (quantity < 1) quantity = 1;
    quantityInput.value = quantity;

    updateCartCount();
    updateTotalPrice();
}

function updateCartCount() {
    const quantities = document.querySelectorAll('.quantity');
    let totalItems = 0;

    quantities.forEach(function (input) {
        totalItems += parseInt(input.value);
    });

    document.getElementById('cart-count').innerText = totalItems;
}

function updateTotalPrice() {
    const prices = [8480000, 8990000]; // Giá các sản phẩm tương ứng
    const quantities = document.querySelectorAll('.quantity');
    let totalPrice = 0;

    quantities.forEach(function (input, index) {
        totalPrice += parseInt(input.value) * prices[index];
    });

    // Format số tiền thành kiểu tiền tệ
    document.getElementById('total-price').innerText = totalPrice.toLocaleString('vi-VN') + '₫';
}

// Khởi tạo cập nhật ban đầu
updateCartCount();
updateTotalPrice();
