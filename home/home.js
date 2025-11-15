// Lấy user đang đăng nhập
const currentUser = localStorage.getItem("currentUser");

// Nếu chưa đăng nhập → chuyển về login
if (!currentUser) {
    window.location.href = "login.html";
}

// Hiển thị lời chào
document.getElementById("welcome").textContent = "Xin chào, " + currentUser + "!";

// Hàm đăng xuất
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";    
}
