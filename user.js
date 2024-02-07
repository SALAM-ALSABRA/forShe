let hearted = JSON.parse(localStorage.getItem('lovedProducts')|| []);
let buy = JSON.parse(localStorage.getItem('boughtProducts')|| []);

let boughtSection = document.querySelector('.products-notbought-section');
let boughtSectionextra = document.querySelector('.products-bought-section');

function viewProducts(){
  let buyCard;
  if(buy.length!==0){
    boughtSection.classList.add('d-none');
    boughtSectionextra.classList.remove('d-none');
    buyCard=buy.map((item)=>{
      return `<div class="card mb-3" style="max-width:20rem;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${item.boughtCardImage}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${item.boughtCardTitle}</h5>
                      <p class="card-text text-start fs-6"> ${item.boughtCardColor}</p>
                      <p class="card-text text-start fs-6">${item.boughtCardCost}</p>
                      <p class="card-text text-start fs-6"><b>Quantity:</b>${item.boughtCardCounter}</p>
                    </div>
                  </div>
                </div>
              </div>`
    })
    boughtSectionextra.innerHTML=buyCard;
  }
}
viewProducts();

let sumSpan = document.getElementById('sum');
sumSpan.style.fontSize='1.5rem'

function sumOfProducts(){
  let currency = localStorage.getItem('currency');
  if(buy.length!==0){
    const cash = buy.reduce((total,item)=>{
      const r = /\d+/;
      let s = item.boughtCardCost 
      let k=s.match(r)
      let rr =Number(k * Number(item.boughtCardCounter));
      console.log(k)
      return total+=rr;
     },0)
     console.log(cash)
    if(currency == "dollar"){sumSpan.innerHTML='Sum is '+cash+'$';}else{sumSpan.innerHTML='Sum is '+cash+'€';}
  }

}
sumOfProducts();

let c=document.querySelector('.carousel-inner')
function viewCarousel(){

    if(hearted.length!== 0){
        let d = document.querySelector('.products-section');
        d.classList.add('d-none');
        let notD= document.querySelector('.carousel');
        notD.classList.remove('d-none')
        var add=``;
        if(hearted.length == 1){
          add=`<div class="carousel-item active">
                    <div class="card ms-3" style="max-width: 18rem; max-height: 25rem; display: inline-block;">
                    <img src="${hearted[0].lovedCardImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${hearted[0].lovedCardTitle}</h5>
                      <p class="card-text text-start fs-6">${hearted[0].lovedCardCost}</p>
                    </div>
                  </div>
                  </div>`
                  c.innerHTML=add;
        }else{
        for(let i=0;i<hearted.length;i++){
          var v ;
            
                if(i===0){v= `<div class="carousel-item active">
                    <div class="card  ms-3" style="max-width: 18rem; max-height: 25rem; display: inline-block;">
                    <img src="${hearted[i].lovedCardImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${hearted[i].lovedCardTitle}</h5>
                      <p class="card-text text-start fs-6">${hearted[i].lovedCardCost}</p>
                    </div>
                  </div>
                  `
                  add +=v
                  console.log(add)
                }else {
                  if(i%5!==0){
                v = `<div class="card  ms-3" style="max-width: 18rem; max-height: 25rem; display: inline-block;">
                      <img src="${hearted[i].lovedCardImage}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${hearted[i].lovedCardTitle}</h5>
                        <p class="card-text text-start fs-6">${hearted[i].lovedCardCost}</p>
                      </div>
                    </div>`
                  add +=v;
                  console.log(add)
                }else{
                  v =`</div>
                      <div class="carousel-item">
                      <div class="card  ms-3" style="max-width: 18rem; max-height: 25rem;display: inline-block;">
                  <img src="${hearted[i].lovedCardImage}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${hearted[i].lovedCardTitle}</h5>
                    <p class="card-text text-start fs-6">${hearted[i].lovedCardCost}</p>
                  </div>
                </div>
                ` 
                add +=v 
                console.log(add)              
              } 
              
            }
            
            
        }
      }
        c.innerHTML = add
    }
    
}
viewCarousel();

