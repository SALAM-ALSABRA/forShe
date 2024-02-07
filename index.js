let userEntering = document.querySelector('.user-entering');
let userInfo = document.querySelector('.user-info');
let userName = document.querySelector('.user-name');
var lovedProducts = document.querySelector('.user-loves');
let boughtProductsCounter = document.querySelector('.bought-products-counter')
let cartOfBoughtedProducts = document.querySelector('.user-bag img');
let inCartList=document.querySelector('.bought-products');

let productsContainer = document.querySelector('.products-section .container .row');
let products = [
 {
     id:1,
     name:'Fancy Bag',
     cat:'bag',
     color:'black',
     costUSD:'50',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/bags/blackbag.jpg'

 },
 {
     id:2,
     name:'Crystal Bag',
     cat:'bag',
     color:'white & gold',
     costUSD:'70',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/bags/crystalbag.jpg'
 },
 {
     id:3,
     name:'Simple Bag',
     cat:'bag',
     color:'pink',
     costUSD:'35',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/bags/pinkbag.jpg'
 },
 {
     id:4,
     name:'Shaped Bag',
     cat:'bag',
     color:'russet',
     costUSD:'45',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/bags/redbag.jpg'
 },
 {
     id:5,
     name:'Special-Design Bag',
     cat:'bag',
     color:'gold & silver',
     costUSD:'85',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/bags/specialdesigngoldbag.jpg'
 },
 {
     id:6,
     name:'Long Coat',
     cat:'coat',
     color:'blue',
     costUSD:'250',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/coats/blueCoat.jpg'
 },
 {
     id:7,
     name:'Long Wide Coat',
     cat:'coat',
     color:'green',
     costUSD:'230',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/coats/greenCoat.jpg'
 },
 {
     id:8,
     name:'Long Coat',
     cat:'coat',
     color:'russet',
     costUSD:'200',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/coats/redCoat.jpg'
 },
 {
     id:9,
     name:'Special-Design Coat',
     cat:'coat',
     color:'black & white',
     costUSD:'350',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/coats/specialdesignjacket.jpg'
 },
 {
     id:10,
     name:'Mini Short Coat',
     cat:'coat',
     color:'dark blue',
     costUSD:'150',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/coats/vintageminicoat.jpg'
 },
 {
     id:11,
     name:'long Coat',
     cat:'coat',
     color:'white',
     costUSD:'300',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/coats/whiteCoat.jpg'
 },
 {
     id:12,
     name:'Colored long Coat',
     cat:'coat',
     color:'coloured',
     costUSD:'450',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/coats/whitewithcolorsCoat.jpg'
 },
 {
     id:13,
     name:'Puffed Sleeves Long Dress',
     cat:'dress',
     color:'dark-blue',
     costUSD:'230',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/dresses/blackdress.jpg'
 },
 {
     id:14,
     name:'Long Dress',
     cat:'dress',
     color:'blue',
     costUSD:'200',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/dresses/bluedress.jpg'
 },
 {
     id:15,
     name:'Long Dress',
     cat:'dress',
     color:'hell-blue',
     costUSD:'330',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/dresses/hellbluedress.jpg'
 },
 {
     id:16,
     name:'Mini Short Dress',
     cat:'dress',
     color:'white',
     costUSD:'160',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/dresses/miniwhitedress.jpg'
 },
 {
     id:17,
     name:'Short Dress',
     cat:'dress',
     color:'pink',
     costUSD:'100',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/dresses/shortpinkdress.jpg'
 },
 {
     id:18,
     name:'Long Dress',
     cat:'dress',
     color:'white',
     costUSD:'400',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/dresses/whitedress1.jpg'
 },
 {
     id:19,
     name:'Mini Boots',
     cat:'shoes',
     color:'bieg',
     costUSD:'50',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/shoes/biegshortboots.jpg'
 },
 {
     id:20,
     name:'Short Heels open Shoes',
     cat:'shoes',
     color:'white',
     costUSD:'37',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/shoes/biegshortheelsshoe.jpg'
 },
 {
     id:21,
     name:'Short lovely Boots',
     cat:'shoes',
     color:'black',
     costUSD:'130',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/shoes/blackshortboots.jpg'
 },{
     id:22,
     name:'Short Heels Shoes',
     cat:'shoes',
     color:'blue',
     costUSD:'80',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/shoes/bluebridalshoe.jpg'
 },{
     id:23,
     name:'Short Boots',
     cat:'shoes',
     color:'white',
     costUSD:'100',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/shoes/whiteboots.jpg'
 },{
     id:24,
     name:'Short Bridal Heels',
     cat:'shoes',
     color:'white',
     costUSD:'100',
     counter:0,
     buttonStyle:'border:none; background-color:#FF5F00; color:#06113C',
     buttonText:'Add to Cart',
     loved:'images/heart-empty.png',
     imagLocation:'images/shoes/image.jpg'
 }
]

if (window.localStorage.length !==0) {
    userEntering.style.display="none";
    userInfo.style.display="block";
    
    userName.textContent ='Welcome '+`${localStorage.getItem('username')}`;
    let love = JSON.parse(localStorage.getItem('lovedProducts'));
    let buy = JSON.parse(localStorage.getItem('boughtProducts'));
    let boughted = JSON.parse(localStorage.getItem('boughted'));
    
    if(love.length!=0 ){
        love.forEach((element)=>{
            
            for(let i=0 ; i<products.length;i++){
                if(products[i].id == element.lovedCardId){
                    
                    products[i].loved='images/heart.png'
                }
            }                  
        })
    }
    else{console.log('empty')
        }

        if(buy.length!=0 ){
            buy.forEach((element)=>{
                
                for(let i=0 ; i<products.length;i++){
                    if(products[i].id == element.boughtCardId){
                       products[i].counter = element.boughtCardCounter;
                       products[i].buttonStyle='background-color:#ff0020;border:none';
                       products[i].buttonText='Remove from Cart'
                        
                    }
                }                  
            })
        }
        else{console.log('empty')
            }
            if(boughted){
                boughtProductsCounter.innerHTML=boughted;
            }
    
   }else{
    
        userInfo.style.display="none";       
        userEntering.style.display="block";
   }


  
 

function viewProducts(){
    let viewed = products.map((item)=>{
        return `<div class="col-sm-4">
        <div class="card h-100 w-200" title="${item.counter}" id="${item.id}">
          <img src="${item.imagLocation}" class="card-img-top rounded-top" alt="..."><div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-start fs-6"><b>Color:</b> ${item.color}</p>
            <p class="card-text text-start fs-6"><b>Category:</b>  ${item.cat}</p>
            <p class="card-text text-start fs-6"><b>Cost:</b> ${item.costUSD} <b class="b">€</b></p>
            <button class="btn w-75" style="${item.buttonStyle}" id="liveToastBtn" >${item.buttonText}</button>
                <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                    <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                        <img src="images/add-to-cart.png" class="ms-auto " style="width: 20px; height: 20px;" alt="...">
                        <strong class="me-auto">Item Added To Cart</strong>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        
                    </div>
                </div>
                <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                    <div id="liveToast1" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                        <img src="images/remove-from-cart.png" class="ms-auto " style="width: 20px; height: 20px;" alt="...">
                        <strong class="me-auto">Item removed from Cart</strong>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        
                    </div>
                </div>
            <img src="${item.loved}" class='m' alt="">
            </div>
            </div>
            </div>`
    } )
    for(let i = 0; i<viewed.length ; i++){
        productsContainer.innerHTML += viewed[i]
    }
    let currency = localStorage.getItem('currency');
    if(currency == 'dollar'){document.querySelectorAll('.b').forEach((c)=>{c.innerHTML='$'
            })}
}

let hearted;
let cart;
function heartingProduct(){  
hearted = JSON.parse(localStorage.getItem('lovedProducts'));
let emptyHearted = document.querySelectorAll('.m');

emptyHearted.forEach((heart)=>{
    heart.addEventListener('click', addToHeart)
})
}
function addToHeart(event){
    if(window.localStorage.length!==0){
    let targetHeart = event.target;
    let heartedProduct = targetHeart.parentElement.parentElement;
    let child = heartedProduct.children;
    let children = child[0].nextElementSibling.children
    let unheartedId = heartedProduct.getAttribute('id');

    let h = {
        lovedCardId:heartedProduct.getAttribute('id'),
        lovedCardImage:child[0].getAttribute('src'),
        lovedCardTitle:children[0].innerText,
        lovedCardColor:children[1].innerText,
        lovedCardCategory:children[2].innerText,
        lovedCardCost:children[3].innerText,
        lovedCardlogo:'images/heart.png',
        lovedCardCounter:heartedProduct.getAttribute('title')
    }    
// if user wanted to love a product
        if(targetHeart.getAttribute('src') === 'images/heart-empty.png'){
// if user is in ...if not go to sign in
            
                targetHeart.setAttribute('src', 'images/heart.png');
// item not loved before ...or his heart is blank ...undefined means it is not excesting in loved products...so no doubled products in local storage
                if(typeof(hearted.find((item)=>{
                    return unheartedId == item.lovedCardId
                    })) !== undefined){
                        hearted.push(h);
                        localStorage.setItem('lovedProducts' , JSON.stringify(hearted))
                    }else{
                        console.log('dont')
                    }
                

            }else{  
//if user in and want to unheart a product  
            targetHeart.setAttribute('src', 'images/heart-empty.png');
// remove product from localstorage  
            let unhearted = hearted.find((item)=>{
                 return unheartedId == item.lovedCardId
                
                 });
                 let index = hearted.indexOf(unhearted) 
            hearted.splice(index,1);
            localStorage.setItem('lovedProducts' , JSON.stringify(hearted));           
            }
        }else{
                setTimeout(()=>{
                    window.location = 'signIn.html';
                },500);
            }
        
}

function addingToCart(){ 
    let addToCart = document.querySelectorAll('.btn');
   
    addToCart.forEach((btn)=>{
        btn.addEventListener('click',add)
    }
    )}


function add(e){
    
    cart=JSON.parse(localStorage.getItem('boughtProducts')) || [];     
    let pressedBtn = e.target;
    // the whole card 
    let thisProduct = pressedBtn.parentElement.parentElement;
    let child = thisProduct.children;
    
    let children = child[0].nextElementSibling.children
    let unboughtedId = thisProduct.getAttribute('id');
    let boughtedCounter=Number(thisProduct.getAttribute('title'));

    let h = {
        boughtCardId:thisProduct.getAttribute('id'),
        boughtCardImage:child[0].getAttribute('src'),
        boughtCardTitle:children[0].innerText,
        boughtCardColor:children[1].innerText,
        boughtCardCategory:children[2].innerText,
        boughtCardCost:children[3].innerText,
        boughtCardButtonStyle:children[4].getAttribute('style'),
        boughtCardText:children[4].innerText,
        boughtCardCounter:boughtedCounter,
        cardLogo:children[7].getAttribute('src')
    }    

    if(localStorage.getItem('username')){
        if(boughtedCounter%2== 0)        
                {   
                    pressedBtn.setAttribute('style','background-color:#ff0020;border:none ') 
                    pressedBtn.innerText='Remove from Cart'
                    h.boughtCardButtonStyle='background-color:#ff0020;border:none ';
                    h.boughtCardText='Remove From Cart'
                    h.boughtCardCounter = boughtedCounter+1;
                    thisProduct.setAttribute('title',boughtedCounter+1);
                    
                    cart.push(h);
                    localStorage.setItem('boughtProducts',JSON.stringify(cart));
                    const toastLiveExample = document.getElementById('liveToast')
                    
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                    toastBootstrap.show()
                    boughtProductsCounter.innerHTML = Number(boughtProductsCounter.innerHTML)+1
                    localStorage.setItem('boughted',JSON.stringify(boughtProductsCounter.innerHTML)); 
                    
        
                    
                }else{
                    pressedBtn.setAttribute('style',' background-color:#FF5F00; color:#06113C') 
                    pressedBtn.innerText='Add to Cart'
                    h.boughtCardButtonStyle=' background-color:#FF5F00; color:#06113C ';
                    h.boughtCardText='Add to Cart'
                    let unboughted = cart.find((item)=>{
                        return unboughtedId == item.boughtCardId
                       
                        });
                    boughtProductsCounter.innerHTML = Number(boughtProductsCounter.innerHTML)-unboughted.boughtCardCounter;
                    thisProduct.setAttribute('title',0);
                    localStorage.setItem('boughted',JSON.stringify(boughtProductsCounter.innerHTML)); 
                    
                    
                    editProductInList(unboughted.boughtCardId);
                        let index = cart.indexOf(unboughted) 
                        cart.splice(index,1);
                        localStorage.setItem('boughtProducts',JSON.stringify(cart));
                        const toastLiveExample = document.getElementById('liveToast1')
                       
                        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                        toastBootstrap.show()
                        
             
                }

    }else{
        setTimeout(()=>{
            window.location = 'signIn.html';
        },500);
    }


  
}
var pro=JSON.parse(localStorage.getItem('boughtProducts'));

function editProductInList(product){
    let updateBoughtedCardInList = [].slice.call(document.querySelectorAll('.bought-products li'))
    console.log(updateBoughtedCardInList)
        updateBoughtedCardInList.forEach((li)=>{
             if(li.getAttribute('title')==product){
                console.log(li)
                // let index =li.cildren.child[0].children.child[1];
                // console.log(index)
                li.parentElement.removeChild(li)
             }

         })
        
}

function addToList(){
    if(inCartList.style.display=='flex'){
        let lis = [].slice.call(document.querySelectorAll('.bought-products li'));
        cart = JSON.parse(localStorage.getItem('boughtProducts'))||[];
        
        cart.forEach((item)=>{
        let i = lis.find((li)=>{return li.getAttribute('title')==item.boughtCardId})
        if(i==undefined){
        inCartList.innerHTML +=
         `<li title="${item.boughtCardId}" style="">
        ${item.boughtCardTitle}
        <div>
            <i class="fa-solid fa-plus icons"></i>
            <span>${item.boughtCardCounter}</span>
            <i class="fa-solid fa-minus icons"></i>
        </div>
    </li>`
}  
        
        document.querySelectorAll('.fa-plus').forEach((e)=>{
            e.addEventListener('click',(event)=>{
                let listenerId= event.target.parentElement.parentElement.getAttribute('title');
                console.log(listenerId)
                let newSpan=event.target.nextElementSibling;
                console.log(newSpan)
                let updatedBoughtedCard = cart.find((item1)=>{
                    return listenerId == item1.boughtCardId
                    
                     });
                console.log(updatedBoughtedCard.boughtCardCounter)
                newSpan.innerHTML=updatedBoughtedCard.boughtCardCounter+1;
                boughtProductsCounter.innerHTML=Number(boughtProductsCounter.innerHTML)+1;
                
                     let index = cart.indexOf(updatedBoughtedCard);
                     console.log(index ,'is the index of added items from li')
                     cart[index].boughtCardCounter=Number(newSpan.innerHTML);
                     console.log(cart[index].boughtCardCounter)
                     localStorage.setItem('boughtProducts',JSON.stringify(cart));
                    
                localStorage.setItem('boughted',JSON.stringify(boughtProductsCounter.innerHTML));
    
            })
        })
    
        
        document.querySelectorAll('.fa-minus').forEach((e)=>{
            e.addEventListener('click', function(event) {
                let listenerId= event.target.parentElement.parentElement.getAttribute('title');
                console.log(listenerId)
                let newSpan1=event.target.previousElementSibling;
                console.log(newSpan1)
                let updatedBoughtedCard = cart.find((item1)=>{
                    return listenerId == item1.boughtCardId
                    
                     });
                console.log(updatedBoughtedCard.boughtCardCounter)
                
                if( updatedBoughtedCard.boughtCardCounter > 0){
                newSpan1.innerHTML=updatedBoughtedCard.boughtCardCounter-1;
                boughtProductsCounter.innerHTML=Number(boughtProductsCounter.innerHTML)-1;
                localStorage.setItem('boughted',JSON.stringify(boughtProductsCounter.innerHTML));
                console.log(updatedBoughtedCard.boughtCardCounter);
                
                     let index = cart.indexOf(updatedBoughtedCard);
                     console.log(index)
                     cart[index].boughtCardCounter=Number(newSpan1.innerHTML);
                     localStorage.setItem('boughtProducts',JSON.stringify(cart));
                    }
                    
                    if( updatedBoughtedCard.boughtCardCounter == 0){
                        let removeLi = newSpan1.parentElement.parentElement;
                        removeLi.parentElement.removeChild(removeLi);
                        let unboughted = cart.find((item1)=>{
                            return listenerId == item1.boughtCardId
                            
                             });
                             console.log(unboughted)
                                editProduct(unboughted);
                                let index =cart.indexOf(unboughted) 
                                cart.splice(index,1);
                                localStorage.setItem('boughtProducts',JSON.stringify(cart));
                                
    
                                const toastLiveExample = document.getElementById('liveToast1')
                                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                                toastBootstrap.show()
                                
                    
                            }
                        
                          
                })
        })
    
        })
    }
        
}


function editProduct(product){
    let z=[].slice.call(document.querySelectorAll('.card'));
    
    let zz= z.find((zzz)=>{
        return zzz.id==product.boughtCardId;
    })

    console.log(zz)
    let editP = products.find((i)=>{

        return i.id == product.boughtCardId;
    })

    editP.buttonStyle=' background-color:#FF5F00; color:#06113C ';
    editP.buttonText= 'Add to Cart';
    editP.counter = 0;
    
    zz.setAttribute('title',0);
    let child = zz.children;
    let children = child[1].children

    for(let i=0;i<children.length;i++){
        if(i==4){
            children[i].setAttribute('style','background-color:#FF5F00;color:#06113C');
            children[i].innerText='Add to Cart';}
    }

}

lovedProducts.addEventListener('click',function(){
    
    
        setTimeout(()=>{
            window.location = 'lovedProducts.html';
        },1200);

})

cartOfBoughtedProducts.addEventListener('click',()=>{  
        if(inCartList.style.display == "none"){
            inCartList.style.display = "flex"; 
            inCartList.style.flexDirection="column"
            inCartList.style.justifyContent ="center"
            inCartList.style. alignItems="left";
            addToList();
        }else{
            inCartList.style.display = "none"; 
        }
        
})



userName.addEventListener('click',()=>{
    setTimeout(()=>{
        window.location = 'user.html';
    },1200);
})

window.onload=function(){
    viewProducts();
    filtering()
    heartingProduct();
    addingToCart();
    
}
var productsSection;
function filtering(){
    let theChoice = document.getElementById('category');
    console.log(theChoice)
    theChoice.addEventListener('change',handleWithFilterChanging);
    productsSection = document.querySelectorAll(".col-sm-4");
    console.log(productsSection)
}
function handleWithFilterChanging(event) {
    let input1 = document.getElementById('input1');
    const currentValue = event.target.value;
    console.log(currentValue,input1)
    if(currentValue === 'name'){
        
        input1.addEventListener('keyup',filteringByNames);
    }else{
        input1.addEventListener('keyup',filteringByCategory);
    }
  }


function filteringByNames(event){
    productsSection.forEach((card)=>{       
        card.classList.add('vanish');
    })
    let r = document.querySelectorAll('.newDiv');
    console.log(r)
    r.forEach((e)=>e.remove())
    let input = event.target.value.toLowerCase();
    console.log(input)

    if(input!=='' || input!==null){
        theNameFilter = products.filter((p)=>{
            return p.name.toLowerCase().startsWith(input);
        })
        console.log(theNameFilter)
        theFiltered = theNameFilter.map((item)=>{
            return `<div class="col-sm-4 newDiv">
            <div class="card h-100 w-200" title="${item.counter}" id="${item.id}">
            <img src="${item.imagLocation}" class="card-img-top rounded-top" alt="..."><div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-start fs-6"><b>Color:</b> ${item.color}</p>
            <p class="card-text text-start fs-6"><b>Category:</b>  ${item.cat}</p>
            <p class="card-text text-start fs-6"><b>Cost:</b> ${item.costUSD}</p><button class="btn w-75" style="${item.buttonStyle}" id="liveToastBtn" >${item.buttonText}</button>
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                <img src="images/add-to-cart.png" class="ms-auto " style="width: 20px; height: 20px;" alt="...">
            <strong class="me-auto">Item Added To Cart</strong>
            
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            
        </div>
    </div>
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast1" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                    <img src="images/remove-from-cart.png" class="ms-auto " style="width: 20px; height: 20px;" alt="...">
                    <strong class="me-auto">Item removed from Cart</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    
                </div>
            </div>
        <img src="${item.loved}" class alt=""></div></div></div>`

        });
        for(let i=0;i<theFiltered.length;i++){
            productsContainer.innerHTML += theFiltered[i];
        }
    }else{
        console.log(input)
        productsSection.forEach((card)=>{
            card.classList.remove('vanish');
        })
    }
    
}
function filteringByCategory(event){
    let r = document.querySelectorAll('.newDiv');
    console.log(r)

    r.forEach((e)=>e.remove())
    let input = event.target.value.toLowerCase();
    console.log(input)


    if(input!=='' || input!==null){
        theCategoryFilter = products.filter((p)=>{
            return p.cat.toLowerCase().startsWith(input);
        })
        productsSection.forEach((card)=>{       
            card.classList.add('vanish');
        })
        theFiltered = theCategoryFilter.map((item)=>{
            return `<div class="col-sm-4 newDiv">
            <div class="card h-100 w-200" title="${item.counter}" id="${item.id}">
            <img src="${item.imagLocation}" class="card-img-top rounded-top" alt="..."><div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-start fs-6"><b>Color:</b> ${item.color}</p>
            <p class="card-text text-start fs-6"><b>Category:</b>  ${item.cat}</p>
            <p class="card-text text-start fs-6"><b>Cost:</b> ${item.costUSD}</p><button class="btn w-75" style="${item.buttonStyle}" id="liveToastBtn" >${item.buttonText}</button>
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                <img src="images/add-to-cart.png" class="ms-auto " style="width: 20px; height: 20px;" alt="...">
            <strong class="me-auto">Item Added To Cart</strong>
            
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            
        </div>
    </div>
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast1" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                    <img src="images/remove-from-cart.png" class="ms-auto " style="width: 20px; height: 20px;" alt="...">
                    <strong class="me-auto">Item removed from Cart</strong>
                    
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    
                </div>
            </div>
        <img src="${item.loved}" class alt=""></div></div></div>`

        });
        for(let i=0;i<theFiltered.length;i++){
            productsContainer.innerHTML += theFiltered[i];
        }
    }else{
        productsSection.forEach((card)=>{
            card.classList.remove('vanish');
        })
    }
    
} 