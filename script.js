addEventListener("load",function(){
  products = [
  {
    id: 1,
    name: "Baccarat Rouge",
    title: "Baccarat Rouge 540",
    description: "A luxurious amber floral fragrance with a long-lasting signature.",
    price: 135,
    image: "assets/item1.png"
  },
  {
    id: 2,
    name: "Dior Sauvage",
    title: "Sauvage Elixir",
    description: "An intense and spicy fragrance inspired by raw freshness.",
    price: 120,
    image: "assets/item2.png"
  },
  {
    id: 3,
    name: "Black Opium",
    title: "YSL Black Opium",
    description: "Bold and addictive scent with coffee and vanilla notes.",
    price: 110,
    image: "assets/item3.png"
  },
  {
    id: 4,
    name: "Coco Mademoiselle",
    title: "Chanel Coco Mademoiselle",
    description: "Elegant and modern fragrance with citrus and patchouli.",
    price: 150,
    image: "assets/item4.png"
  },
  {
    id: 5,
    name: "Lost Cherry",
    title: "Tom Ford Lost Cherry",
    description: "A sensual blend of black cherry, almond, and tonka bean.",
    price: 180,
    image: "assets/item5.png"
  },
  {
    id: 6,
    name: "My Way",
    title: "Armani My Way",
    description: "Fresh floral fragrance celebrating discovery and femininity.",
    price: 98,
    image: "assets/item6.png"
  },
  {
    id: 7,
    name: "Eros",
    title: "Versace Eros",
    description: "Powerful fragrance inspired by love, passion, and desire.",
    price: 90,
    image: "assets/item7.png"
  },
  {
    id: 8,
    name: "Gucci Bloom",
    title: "Gucci Bloom Eau de Parfum",
    description: "A rich white floral scent inspired by a blooming garden.",
    price: 105,
    image: "assets/item8.png"
  },
  {
    id: 9,
    name: "Paradoxe",
    title: "Prada Paradoxe",
    description: "Modern feminine fragrance reinventing classic floral notes.",
    price: 115,
    image: "assets/item9.png"
  }
];
lis=document.querySelector(".option-nav");
liss=document.querySelectorAll(".option-nav li");
search=document.querySelector(".search input");
table=document.querySelector(".products-table")


displayProducts(products);

hearts=document.querySelectorAll(".heart");
carts=document.querySelectorAll(".cart");

search.addEventListener("input", function () {
    value = this.value.toLowerCase();

    filtered = products.filter(function(product){
      return product.name.toLowerCase().includes(value) ||
      product.title.toLowerCase().includes(value)}
    );

    displayProducts(filtered);
  });//search event

function displayProducts(products) {
    table.innerHTML = "";
    row=null;
    products.forEach(function(product, i){
      if (i % 3 == 0) {
        row = document.createElement("tr");
        table.appendChild(row);
      }

      row.innerHTML += `
        <td>
          <div class="product-box">
            <div class="product-img">
              <img src="${product.image}">
              <img src="assets/shopping-cart.png" class="cart" product-id="${product.id}"/>
              <span class="heart" product-id="${product.id}">♡</span>
            </div>
            <p class="brand">${product.title}</p>
            <h3>${product.name}</h3>
            <p class="price">$${product.price}.00</p>
          </div>
        </td>
      `;
    });
  } // function for display data

lis.addEventListener("click",function(e){
  pages=e.target;
  console.log(pages);
  e.target.style.cssText="";
            
if(e.target.tagName=="LI"){
      liss.forEach(function(li){
      li.style.backgroundColor = "";
      li.style.color = "black";
    });
  if(pages.innerText=="Cart"){
    e.target.style.cssText=`
           background-color: #dcd7d7;
            color:#531B24;
          padding: 6px;
          border-radius:20px ;
            `;
    location.href = "cart.html";
  }
  else if (pages.innerText=="Shop") {
    e.target.style.cssText=`
           background-color: #dcd7d7;
            color:#531B24;
          padding: 6px;
          border-radius:20px ;
            `;
      location.href = "index.html";
    
  }
  else if(pages.innerText=="Favourites"){
    e.target.style.cssText=`
           background-color: #dcd7d7;
           color:#531B24;
          padding: 6px;
          border-radius:20px ;
            `;
    location.href = "favorite.html";
  };

}
});// pages event in the nav-bar

carts.forEach(function(cart){
cart.addEventListener("click",function(e){
  this.style.backgroundColor="#923544";

  id=this.getAttribute("product-id");
  product=products.find(function(p){
    return p.id==id;
  });
  cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push({id: product.id,
  name: product.name,
  price: product.price,
  image: product.image,
  quantity: 1});
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert(`${product.name} added to cart!`);
});
});// add to cart icon

hearts.forEach(function(heart){
heart.addEventListener("click",function(e){
  this.style.backgroundColor="#923544";

  id=this.getAttribute("product-id");
  product=products.find(function(p){
    return p.id==id;
  });
  favoriteItems = JSON.parse(localStorage.getItem("heart")) || [];
  favoriteItems.push(product);
  localStorage.setItem("heart", JSON.stringify(favoriteItems));
  alert(`${product.name} added to Favorites !`);
});
});// add to favorite icon


});