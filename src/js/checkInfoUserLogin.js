const checkInfoUserLogin = document.querySelector('.checkInfoUserLogin');

checkInfoUserLogin.addEventListener('submit', (event)=>{
    event.preventDefault()
    const login = checkInfoUserLogin.elements.login.value;
    const password = checkInfoUserLogin.elements.password.value;
    if (login === 'admin@gmail.com' && password === 'admin') {
        window.location.href = 'adminPage/Show.html';
    } else {
        const registerForm = document.querySelector('.register__form')



        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault()
            const registerFormUserName = document.querySelector('.register__form-user-name').value;
            const registerFormEmail = document.querySelector('.register__form-email').value;
            const registerFormUserPhone = document.querySelector('.register__form-tel').value;
            const registerFormUserPassword = document.querySelector('.register__form-password').value;
            const registerFormUserChecked = document.querySelector('.register__form-checked').value;

            /*fetch data, adding to db.json */
            await fetch("http://localhost:3000/users",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({registerFormUserName, registerFormEmail, registerFormUserPhone, registerFormUserPassword, registerFormUserChecked})
            })
                .then(response =>{
                    if(response.ok){
                        alert('Registration succesful')
                        registerForm.reset()
                    }else{
                        alert('Some error')
                    }
                })
                .catch(err => console.error(err))
        })


        const loginForm = document.querySelector('.login__form')
        loginForm.addEventListener('submit', async (event)=>{
            event.preventDefault()
            const loginFormEmail = document.querySelector('.login__form-email').value;
            const loginFormPassword = document.querySelector('.login__form-password').value;
            const response = await fetch("http://localhost:3000/users")
            const users = await response.json()
            const user = users.find(user => user.registerFormEmail === loginFormEmail && user.registerFormUserPassword === loginFormPassword)
            if(user){
                alert('Login successful')
                localStorage.setItem('loginFormEmail', loginFormEmail)
                /*        localStorage.setItem('registerFormUserPhone', registerFormUserPhone)
                        localStorage.setItem('registerFormUserEmail', registerFormUserEmail)*/
                window.location.href = './profileUser.html'
            }else{
                alert('error')
            }
        })
    }
})