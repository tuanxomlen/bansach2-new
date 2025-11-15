// Danh sách sản phẩm mẫu
const products = [
    { id: 1, name: "Sách JavaScript", price: 100000, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Sách HTML & CSS", price: 90000, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Sách NodeJS", price: 120000, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Sách ReactJS", price: 150000, img: "https://via.placeholder.com/200" }
];

// Render danh sách sản phẩm
function renderProducts() {
    const container = document.getElementById("productList");
    container.innerHTML = "";

    products.forEach(p => {
        const item = document.createElement("div");
        item.className = "product";

        item.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()} VNĐ</p>
            <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        `;

        container.appendChild(item);
    });
}

// Thêm vào giỏ hàng
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === id);

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng!");
}

renderProducts();
