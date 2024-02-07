window.onload=function(){

}


let signUp = document.getElementById('signUp');
let gender = document.querySelectorAll('input[type="radio"]');
let modal = document.getElementById('modal');
let username=document.getElementById('username');
let password=document.getElementById('password');
let email=document.getElementById('email');
let modal1=document.getElementById('modal1');
let currency = document.getElementById('usedCurrency')
let emailModal=document.getElementById('emailModal');
signUp.style.backgroundColor='#FF5F00';
signUp.style.border='none';
signUp.style.color='#06113C';
let lovedProducts = [];
let boughtProducts = [];
let c=document.querySelector('.card');
c.style.boxShadow='none'
c.style.translate='none'
console.log(gender)
gender.forEach(e =>{
    e.addEventListener('change',function(event){
        let labelText = event.target.nextElementSibling.nextElementSibling;
        if(labelText.innerText === 'Mr.'){         
            modal.classList.add('show');
            signUp.disabled = true;
            event.target.checked=false;  
            
        }
        signUp.disabled = false;
    })
})

function closeModal(){
    modal.classList.remove('show')
    modal1.classList.remove('show');
    emailModal.classList.remove('show');
}

signUp.addEventListener('click',function(event){
    event.preventDefault();
    
        if(username.value ===''){
            username.style.borderColor='#FF5733';
            modal1.classList.add('show')
        }else if(email.value === '' || email.value.trim().indexOf('@')=== -1){
            email.style.borderColor ='#FF5733';
            emailModal.classList.add('show');
        } else if(password.value === ''){
            password.style.borderColor='#FF5733';
            modal1.classList.add('show');
        }
        
else{
    localStorage.setItem('username',username.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',password.value);
    // localStorage.setItem('gender',gender.nextElementSibling.textContent);
    localStorage.setItem('currency',currency.value);
    localStorage.setItem('lovedProducts',JSON.stringify(lovedProducts));
    localStorage.setItem('boughtProducts',JSON.stringify(boughtProducts))
    
    setTimeout(() => {
        

        window.location='signIn.html';
    }, 1200)
}
    
    
})