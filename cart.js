addEventListener("load", function () {

  cartContainer = document.querySelector(".cart-container");
  totalPrice = document.querySelector(".total");

  products = JSON.parse(localStorage.getItem("cart")) || [];

  function displayCart() {
    cartContainer.innerHTML = "";
    total = 0;

    if (products.length == 0) {
      cartContainer.innerHTML =
        "<h2 style='color:#531B24'>Nothing added to cart yet</h2>";
      totalPrice.innerText = "";
      return;
    }

    products.forEach(function(item, index){
      subtotal = item.price * item.quantity;
      total += subtotal;

      cartContainer.innerHTML += `
        <div class="cart-card">
          <img src="${item.image}">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>

          <div class="qty-controls">
            <button class="qty-btn minus" data-index="${index}">−</button>
            <span class="qty">${item.quantity}</span>
            <button class="qty-btn plus" data-index="${index}">+</button>
          </div>

          <p class="subtotal">Subtotal: $${subtotal}</p>

          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
    });

    totalPrice.innerText = `Total: $${total}`;
  }

  cartContainer.addEventListener("click", function (e) {
    index = e.target.getAttribute("data-index");
    console.log(index);
    if (e.target.classList.contains("plus")) {
      products[index].quantity++;
    }

    if (e.target.classList.contains("minus")) {
      if (products[index].quantity > 1) {
        products[index].quantity--;
      }
    }

    if (e.target.classList.contains("remove-btn")) {
      products.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(products));
    displayCart();

  });

  displayCart();
});
