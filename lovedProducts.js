let userEntering = document.querySelector('.user-entering');
let container =  document.querySelector('.products-section');
let boughtProductsCounter = document.querySelector('.bought-products-counter')


let userInfo = document.querySelector('.user-info');
let userName = document.querySelector('.user-name');

userEntering.style.display='none';
userInfo.style.display='block';
userName.textContent = 'Welcome ' + `${localStorage.getItem('username')}`;
boughtProductsCounter.innerHTML=JSON.parse(localStorage.getItem('boughted'))
let hearted1 = JSON.parse(localStorage.getItem('lovedProducts')|| []);

console.log(hearted1)
function viewProducts(){

    if(hearted1.length!== 0){
        let d = document.querySelector('.show');
        d.classList.remove('show')
        d.classList.add('vanish');
            
        let viewed = hearted1.map((item)=>{
          
        return `<div class="col-sm-4">
        <div class="card" title="${item.lovedCardCounter}" id="${item.lovedCardId}">
          <img src="${item.lovedCardImage}" class="card-img-top rounded-top" alt="...">

          <div class="card-body">
            <h5 class="card-title">${item.lovedCardTitle}</h5>
            <p class="card-text text-start fs-6"> ${item.lovedCardColor}</p>
            <p class="card-text text-start fs-6"> ${item.lovedCardCategory}</p>
            <p class="card-text text-start fs-6"> ${item.lovedCardCost}</p>
            
            
              <button class="btn w-75" style="border:none; background-color:#FF5F00; color:#06113C">Add to Cart</button>
              <img src="${item.lovedCardlogo}"  alt="">
          </div>
        </div>
      </div>`
    } )
    container.innerHTML = viewed
}}
viewProducts()