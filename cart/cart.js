// Lấy dữ liệu giỏ hàng
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render giỏ hàng
function renderCart() {
    const table = document.getElementById("cartTable");
    
    // Xóa tất cả hàng (giữ lại header)
    table.innerHTML = `
        <tr>
            <th>Hình</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Xóa</th>
        </tr>
    `;

    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("tr");

        total += item.price;

        row.innerHTML = `
            <td><img src="${item.img}" alt=""></td>
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()} VNĐ</td>
            <td><button onclick="removeItem(${index})">Xóa</button></td>
        `;

        table.appendChild(row);
    });

    document.getElementById("totalPrice").textContent =
        "Tổng tiền: " + total.toLocaleString() + " VNĐ";
}

// Xóa 1 sản phẩm
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
}

renderCart();

