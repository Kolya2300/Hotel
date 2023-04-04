const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnLogin = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')
const form = document.querySelector('.form__inner')
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
})
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
})

btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
})
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
})
btnLogin.addEventListener('click', function (){
    form.style.display = 'block'
})
iconClose.addEventListener('click', function (){
    form.style.display = 'none'
})

const user = JSON.parse(localStorage.getItem('user'));
const profileLogo = document.querySelector('.btnLogin-popup');
if (user) {
    profileLogo.innerHTML = 'Profile';
    {profileLogo.addEventListener('click', ()=>{
        form.style.display = 'none'
        window.location.href = 'profileUser.html'
    })}

}