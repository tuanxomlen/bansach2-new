function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    // Lấy danh sách user đã đăng ký
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm user trùng khớp
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        msg.textContent = "Đăng nhập thành công!";
        msg.style.color = "green";
    } else {
        msg.textContent = "Sai tài khoản hoặc mật khẩu!";
        msg.style.color = "red";
    }
}
