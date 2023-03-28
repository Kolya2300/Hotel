const registerForm = document.querySelector('.register__form')


/*const loginForm = document.querySelector('.login')*/

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const registerFormUserName = document.querySelector('.register__form-user-name').value;
    const registerFormEmail = document.querySelector('.register__form-email').value;
    const registerFormUserPhone = document.querySelector('.register__form-tel').value;
    const registerFormUserPassword = document.querySelector('.register__form-password').value;
    const registerFormUserChecked = document.querySelector('.register__form-checked').value;

    /*fetch data, adding to db.json */
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({registerFormUserName, registerFormEmail, registerFormUserPhone, registerFormUserPassword, registerFormUserChecked})
    })
        .then(response =>{
            if(response.ok){
                registerForm.reset()
                window.location.href = './profileUser.html'
            }else{
                alert('Some error')
            }
        })
        .catch(err => console.error(err))
})