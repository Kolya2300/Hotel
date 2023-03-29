const username = localStorage.getItem('loginFormEmail');
if (username) {
    document.getElementById('loginFormEmail').textContent = username;
} else {
   /* window.location.href = 'index.html';*/
    console.log('error')
}