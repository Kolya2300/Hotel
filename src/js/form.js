const loginForm = document.querySelector('.login_form')
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const email = document.querySelector('.login__form-email').value;
    const password = document.querySelector('.login__form-password').value;
    const response = await fetch("http://localhost:3000/users?email=" + email)
    const users = await response.json()
    if (users.length > 0 && users[0].password === password) {
        localStorage.setItem('user', JSON.stringify(users[0]));
        window.location.href = './profileUser.html';
    } else {
        alert('Invalid email or password')
    }
})
const registerForm = document.querySelector('.register__form');
registerForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name = document.querySelector('.register__form-user-name').value;
    const email = document.querySelector('.register__form-email').value;
    const phone = document.querySelector('.register__form-tel').value;
    const password = document.querySelector('.register__form-password').value;
    const newUser = {name, email, phone, password};

    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newUser),
    });
    if(response.ok){
        localStorage.setItem('user', JSON.stringify(newUser));
        window.location.href = './profileUser.html';
    }else{
        alert('Error to register')
    }

})