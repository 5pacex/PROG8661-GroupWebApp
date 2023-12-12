$(document).ready(function () {
  const productListDiv = $("#product-list");

  // Loop through the products and create HTML elements to display them
  products.forEach((product) => {
    const productDiv = $('<div class="product">');
    productDiv.html(`
    <img src="${product.image}" alt="${[product.name]} id=${product.id}">
     <div class="product-content">
      <div class="product-title">${product.name}</div>
     <div class="product-price">$${product.price}</div>
     <button class="btn-add-to-cart" id=${product.id}>Add to Cart</button>
   </div>
                </div>
    `);
    productListDiv.append(productDiv);
  });

  $(".product img").click((e) => {
    e.preventDefault();
    console.log($(this).attr("id"));
  });

  // add to cart button event listener
  $(".btn-add-to-cart").click(function (e) {
    e.preventDefault();
    if ($(this).text() == "Proceed to Checkout") {
      window.location.href = "cart.html";
    } else {
      console.log($(this).attr("id"));
      var cartData = $(this).attr("id");
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...(JSON.parse(localStorage.getItem("cart")) || []),
          cartData,
        ])
      );

      $(this).css("background-color", "#a33115");

      $(this).text("Proceed to Checkout");
    }
    //  to fetch data in carts page use the follow code
    // JSON.parse(localStorage.getItem("cart")).map((item) => {
    //   console.log(item.productName, item.productPrice);
    // });
  });
});
