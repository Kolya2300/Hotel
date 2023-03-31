const userInfo = document.getElementById('user-info');
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    userInfo.innerHTML = `<p>Name: ${user.name}</p><p>Phone: ${user.phone}</p><p>Email: ${user.email}</p>`;
} else {
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}
function goBack() {
    window.location.href = 'index.html';
    const profileLogo = document.querySelector('.btnLogin-popup').innerHTML = 'Lol'
}