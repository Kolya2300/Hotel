const username = localStorage.getItem('loginFormEmail');
const registerFormUserPhone = localStorage.getItem('registerFormUserPhone');
const registerFormUserEmail = localStorage.getItem('registerFormUserEmail');
if (username) {
    document.getElementById('loginFormEmail').textContent = username;
    document.getElementById('registerFormUserPhone').textContent = registerFormUserPhone;
} else {
   /* window.location.href = 'index.html';*/
    console.log('error')
}