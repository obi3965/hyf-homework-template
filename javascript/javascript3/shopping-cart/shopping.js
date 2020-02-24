let cartBtn = document.querySelector('.cart-btn')
let closeCartBtn = document.querySelector('.close-cart')
let clearCartBtn = document.querySelector('.clear-cart')
let cartDom = document.querySelector('.cart')
let cartOverlay = document.querySelector('.cart-overlay')
let cartItems = document.querySelector('.cart-items')
let cartTotal = document.querySelector('.cart-total')
let cartContent = document.querySelector('.cart-content')
let productsDom = document.querySelector('.products-center')


//we will place our all items
let cart =[];
//buttons
let buttonsDom = []
//getting the products
class Products{
    //asynchrinous code
  async getProducts(){
      try{
          let results = await fetch('./products.json') 
          //return the json method
          let data = await results.json();
       
        //to get the array
        let products = data.items;
        products = products.map(item =>{
            let {title,price} = item.fields;
            let {id} = item.sys;
            let image = item.fields.image.fields.file.url;
            return{title,price,id,image}
        })
        return products
        
      } catch(error){
          console.log(error)
      }
       
    }

}

//display products
class UI{
displayProducts(products){
// console.log(products)
let results = '';
products.forEach(product =>{
    results += `
    <article class="product">
    <div class="img-container">
        <img src="${product.image}" alt="product-1" class="product-img">
        <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            add to cart
        </button>
    </div>
    <h3>${product.title}</h3>
    <h4>${product.price} kr </h4>
</article>
    `;
})

productsDom.innerHTML = results;
}
getBagButtons(){
    let buttons = [...document.querySelectorAll('.bag-btn')];  
    // console.log(buttons)
    buttonsDom = buttons
    buttons.forEach(button =>{
        let id = button.dataset.id;
        // console.log(id)
        let inCart = cart.find(item => item.id === id);
        if(inCart){
            button.innerText= "IN CART";
            button.disabled = true;
        }
            button.addEventListener('click', (event)=>{
                // console.log(event)
                event.target.innerText ="in cart";
                event.target.disabled = true;

                //get product from products
              let cartItems ={...Storage.getProduct(id), amount:1}
              console.log(cartItems)

                //add product to the cart
                cart = [...cart,cartItems];
                console.log(cart)

                //save cart in localstorage
                Storage.saveCart(cart)

                //set cart values
                this.setCartValues(cart)

                //display cart item
                this.addCartItem(cartItems)

                //show the cart
                this.showCart()
            })
        
    })
}
setCartValues(cart){
    let tempTotal = 0;
    let itemsTotal = 0;
    //map method
    cart.map(item =>{
        tempTotal += item.price * item.amount;
        itemsTotal += item.amount
    })
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
    cartItems.innerText = itemsTotal;
    // console.log(cartTotal,cartItems)
}
addCartItem(item){
let div = document.createElement('div')
div.classList.add('cart-item')
div.innerHTML = `
<img src=${item.image} alt="product-1">
<div>
    <h4>${item.title}</h4>
    <h5>${item.price}</h5>
    <span class="remove-item" data-id =${item.id}>remove</span> 

</div>
<div>
   <i class="fas fa-chevron-up" data-id =${item.id}></i>
   <p class="item-amount">${item.amount}</p>
   <i class="fas fa-chevron-down" data-id =${item.id}></i>
</div>`;
cartContent.appendChild(div);
// console.log(cartContent)
}

//my method to show the cart
showCart(){
cartOverlay.classList.add('transparentBcg')
cartDom.classList.add('showCart')
}
setApp(){
 cart = Storage.getCart();
 this.setCartValues(cart);
 this.populateCart(cart);
 cartBtn.addEventListener('click', this.showCart)
 closeCartBtn.addEventListener('click', this.hideCart)
}
populateCart(cart){
    cart.forEach(item =>this.addCartItem(item))
}
hideCart(){
cartOverlay.classList.remove('transparentBcg')
cartDom.classList.remove('showCart')
}
//clear cart in shopping cart
cartLogic(){
clearCartBtn.addEventListener('click', ()=>{
    this.clearCart();
})

//cart functionality
cartContent.addEventListener('click', event =>{
    //to remove the items
    if(event.target.classList.contains('remove-item')){
        let removeItem = event.target;
        // console.log(removeItem)
        let id = removeItem.dataset.id;
        cartContent.removeChild;
        (removeItem.parentElement.parentElement)
        this.removeItem(id)
    }
    //to increase our quantity
    else if(event.target.classList.contains('fa-chevron-up')){
     let addAmount = event.target;
     let id = addAmount.dataset.id;
     let tempItem = cart.find(item => item.id === id);
     tempItem.amount = tempItem.amount + 1;
     Storage.saveCart(cart);
     this.setCartValues(cart)
     addAmount.nextElementSibling.innerText = tempItem.amount;
    
    }
    //to decrease our quantity
    else if(event.target.classList.contains('fa-chevron-down')){
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount -1;

        if(tempItem.amount > 0){
           Storage.saveCart(cart)
           this.setCartValues(cart)
           lowerAmount.previousElementSibling.innerText = tempItem.amount;
        }else{
            cartContent.removeChild(lowerAmount.parentElement.parentElement)
            this.removeItem(id)
        }
       
       }
})
}
clearCart(){
    //get all id of the items that is in the cart
     let cartItems = cart.map(item => item.id)
    // console.log(cartItems)
    //it removes item in the array
    cartItems.forEach(id => this.removeItem(id))
    while(cartContent.children.length > 0){
        cartContent.removeChild(cartContent.children[0])
         
    }
    this.hideCart()
}
removeItem(id){
    //it will removes all the id which is in the array
   cart = cart.filter(item => item.id !==id);
   this.setCartValues(cart)
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `
    <i class="fas fa-shopping-cart"> add to cart
    `
}
getSingleButton(id){
    return buttonsDom.find(button => button.dataset.id === id)
}
}


//localstorage
class Storage{
static saveProducts(products){
    localStorage.setItem('products', JSON.stringify(products))
}
static getProduct(id){
    let products = JSON.parse(localStorage.getItem('products'))
    //looking for a specific items in the array
    return products.find(product => product.id === id)
}
static saveCart(cart){
    localStorage.setItem('cart',JSON.stringify(cart))
}
static getCart(){
    //it will exist our items if the users refresh the page
return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}
}


//to listen
document.addEventListener('DOMContentLoaded', ()=>{

    //to create instances
    let ui = new UI();
    let products = new Products()
    
    //set up app
    ui.setApp();
    //get all products
    products.getProducts()
    .then(products => { 
    ui.displayProducts(products)
    Storage.saveProducts(products);
})
.then(()=>{
    ui.getBagButtons()
    ui.cartLogic();
})
    
})