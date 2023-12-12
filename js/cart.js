$(document).ready(function () {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  const productListDiv = $(".cartitems");
  for (i = 0; i < cartItems.length; i++) {
    products.forEach((product) => {
      if (product.id == cartItems[i]) {
        const productDiv = $('<div class="cartitems">');
        productDiv.html(`
    <img src="${product.image}" alt="${[product.name]} id=${product.id}">
     <div class="product-content">
      <div class="product-title">${product.name}</div>
     <div class="product-price">$${product.price}</div>
     <button class="removeItem" id=${product.id}>Delete</button>
   </div>
                </div>
    `);
        productListDiv.append(productDiv);
      }
    });
  }
  $(".removeItem").click(function () {
    let id = $(this).attr("id");
    const newCartItems = cartItems.filter((items) => items !== id);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  });
});
