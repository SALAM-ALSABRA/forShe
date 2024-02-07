let signIn = document.getElementById('signIn');
let gender = document.querySelector('input[type="radio"]');
let modal = document.getElementById('userlogin');
let username=document.getElementById('username');
let password=document.getElementById('password');
let checked = document.getElementById('gridCheck1')
let c=document.querySelector('.card');

c.style.boxShadow='none'
c.style.translate='none'

let modal1 = document.getElementById('userNotLogged');

signIn.style.backgroundColor='#FF5F00';
signIn.style.border='none';
signIn.style.color='#06113C';
function closeModal(){
    modal.classList.remove('show')
    modal1.classList.remove('show')
}
signIn.addEventListener('click' ,function(event){
    event.preventDefault();
    if(window.localStorage.length==0){
        modal1.classList.add('show');
    }else{
    if(username.value.trim() === localStorage.getItem('username').trim() && password.value === localStorage.getItem('password')){
        
        setTimeout(() => {
            window.location='index.html';
        }, 1200);
    }else{
        modal.classList.add('show')
    }
}
})