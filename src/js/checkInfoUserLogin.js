const checkInfoUserLogin = document.querySelector('.checkInfoUserLogin');
checkInfoUserLogin.addEventListener('submit', (event)=>{
    event.preventDefault()
    const login = checkInfoUserLogin.elements.login.value;
    const password = checkInfoUserLogin.elements.password.value;
    if (login === 'admin@gmail.com' && password === 'admin') {
        window.location.href = 'adminPage/Show.html';
    } else {
        window.location.href = 'google.com';
    }
})