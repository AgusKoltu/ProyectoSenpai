class Product { // Representación de algo del mundo real.
    constructor(id, name, price, stock){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
       

    }
    cargarProducto() {
        return (
            ` <div class="product">
                <div class="product__content">
                    <img style="height:200px; object-fit: contain;" src="../Fotos/Productos/producto_${this.id}.png" alt="" class="product__img">
                    <div class="product__description">
                        <h3 class="product__title">${this.name} </h3>
                        <span class="product__price">${this.price}</span><br>
                        <button  onclick="addToCart('${this.id}')"  class="btn">Lo quiero</button>
                    </div>
                </div>   
            </div>`
        )
    }

}

function initializeProducts() {
    return [
        new Product(1, 'Producto 1', 100, 5),
        new Product(2, 'Producto 2', 100, 5),
        new Product(3, 'Producto 3', 100, 5),
        new Product(4, 'Producto 4', 100, 5),
        new Product(5, 'Producto 5', 100, 5),
        new Product(6, 'Producto 6', 100, 5),         
    ]
}

function addToCart(props) {
    let estaEnCarrito = false;
    let productoCarrito;

    cart.forEach(cartLine => {
        if (cartLine.product.id == props){
            estaEnCarrito = true;
            productoCarrito = cartLine;
        } 
    })
    if (estaEnCarrito){
        productoCarrito.quantity = productoCarrito.quantity + 1;
    }
    else{
        cart.push(new Cart(products.find(cartLine => cartLine.id == props)))
    }
   
    renderCart();
   
    Carrito.classList.toggle('hover');
    Carrito.addEventListener('hover', function(){Carrito.classList.toggle('hover')});
    setTimeout(function(){Carrito.classList.toggle('hover')},5000);
    
}

function outOfCart(props){
    let i = 0;
    let j = 0;

    cart.forEach(cartLine => {
        if (cartLine.product.id == props){
           j = i;        
        }
    i++;
    })
    cart.splice(j,1);
    renderCart()

}