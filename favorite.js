addEventListener("load", function () {

  favoriteContainer = document.querySelector(".cart-container");
  fproducts = JSON.parse(localStorage.getItem("heart")) || [];
  console.log(fproducts);
  function displayFavorite() {
    favoriteContainer.innerHTML = "";
    if (fproducts.length == 0) {
      favoriteContainer.innerHTML =
        "<h2 style='color:#531B24'>Nothing added to favorites yet</h2>";
      return;
    }

    fproducts.forEach(function(item, index){
      favoriteContainer.innerHTML += `
        <div class="cart-card">
          <img src="${item.image}">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
    });
  }

  favoriteContainer.addEventListener("click", function (e) {
    index = e.target.getAttribute("data-index");
    console.log(index);
    if (e.target.classList.contains("remove-btn")) {
      fproducts.splice(index, 1);
    }
    localStorage.setItem("heart", JSON.stringify(fproducts));
    displayFavorite();
  });

  displayFavorite();
});
