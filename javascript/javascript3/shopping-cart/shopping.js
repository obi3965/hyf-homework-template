

    //LETS CREATE THE ARRAY OF PRODUCTS OBJECTS
    let products =[
        {
            name:'Gray Tshirt',
            tag:'greytshirt',
            price:15,
            inCart:0
        },
        {
            name:'Gray Tshirt',
            tag:'greytshirt',
            price:25,
            inCart:0
        },
        {
            name:'Gray Tshirt',
            tag:'greytshirt',
            price:35,
            inCart:0
        },
        {
            name:'Gray Tshirt',
            tag:'greytshirt',
            price:45,
            inCart:0
        }
    ]


let carts = document.querySelector('.add-cart');
for(let i=0; i < carts.length; i++){
    // console.log(carts)
    carts[i].addEventListener('click', ()=>{ 
        // console.log('add to cart')
        cartNumbers();
    })
}

function onloadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

//to save the cart items into the localstorage
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)

    if(productNumbers){
         localStorage.setItem('cartNumbers', productNumbers +1)
         document.querySelector('.cart span').textContent = productNumbers +1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
    
   

}

onloadCartNumbers();
