let cart = JSON.parse(localStorage.getItem('cart')) || [];
const Button = document.querySelectorAll('.add-to-cart');
let cartItemsDisplay = document.querySelector("#cartItems");



cartItemsDisplay.addEventListener("click", () => {
    let shoppingCart = document.querySelector("#Shopping-cart");
    shoppingCart.style.display = "block";
    setTimeout(() => {
        shoppingCart.style.display = "none";
    }, 5000);
})



Button.forEach(addButton => {
    addButton.addEventListener('click', (event) => {
        const Idname = event.target.name;
        const Id = document.getElementById(Idname);
        console.log(Idname);
        const product = {
            name: Id.querySelector(".name").textContent,
            price: Number((Id.querySelector(".price").textContent).replace('$', '')),
            quantity: 1
        };
        console.log(product);

        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }


        localStorage.setItem('cart', JSON.stringify(cart));
        ShowCart();


    });
});

let ShowCart = () => {
    let count = cart.length;
    let cartCount = document.querySelector("#cartItems span");
    cartCount.textContent = "[" + count + "]"
    console.log(count)
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity} x ${item.name} - $${item.price}`;
        cartList.appendChild(li);
        total += item.quantity * item.price;
    });
    document.getElementById('total').textContent = total.toFixed(2);

}
ShowCart();