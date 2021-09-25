

class Cart {
    constructor(product) {
        this.product = product
        this.quantity = 1
        
    }

  
}

function renderCart() {
    cartHolder.innerHTML = ''
    botonPagar.innerHTML = ''
    totalHolder.innerHTML = 0
    totalProducts.innerHTML = 0
    total = 0;
    total_products = 0;
    cart.forEach(cartLine => {
        total += cartLine.product.price * cartLine.quantity;
        total_products += cartLine.quantity*1;
        cartHolder.innerHTML += `<li class="item_cart">
        
                <div style="display:flex; justify-content:center;align-items: center;">
                    <img style="height:50px; object-fit: contain; " src="../Fotos/Productos/producto_${cartLine.product.id}.png" alt="" class="product__img">
                </div>
                <div class="cart_description">
                    <p class="precio_p">${cartLine.product.name}</p>
                    <div class="cart_price">
                        <input type="number" style="width: 30px;" id="quantity${cartLine.product.id}" value="${cartLine.quantity}"/>
                        <p class="precio_p" id="priceById${cartLine.product.id}">$${cartLine.product.price * cartLine.quantity}</p>
                    </div>
                </div> 
                <div style="display:flex; align-items: center; justify-content: center;">   
                    <button class="btn_borrar" onclick="outOfCart('${cartLine.product.id}')">QUITAR</button>
                </div>
            </li>`
    })
    cart.forEach(cartLine => {
        document.getElementById(`quantity${cartLine.product.id}`).addEventListener('keyup', (event) => editQuantity(event, cartLine.product.id));
    })
    if(total_products > 0 ){
         botonPagar.innerHTML += `<a href="#" class="btn_pagar" > IR A PAGAR </a>  `
    }
    totalHolder.innerHTML = total
    totalProducts.innerHTML = total_products
}

function editQuantity(event, productId) {
    let quantity = event.target.value;
    let cartLine = cart.find(value => value.product.id == productId)

    cartLine.quantity = quantity
    document.getElementById(`priceById${productId}`).innerHTML = cartLine.product.price * quantity
    total = 0;
    total_products = 0;

    cart.forEach(cartLine => {
        
        total += cartLine.product.price * cartLine.quantity;
        total_products = total_products*1 + cartLine.quantity*1;
    
    })

    totalHolder.innerHTML = total
    totalProducts.innerHTML = total_products 
}