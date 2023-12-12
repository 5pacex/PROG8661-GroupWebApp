$(document).ready(function () {
  var startIndex = 0;
  var endIndex = 9;
  // Loop through the products and create HTML elements to display them
  const displayProducts = (startIndex, endIndex) => {
    const productListDiv = $("#product-list");
    const productsToShow = products.slice(startIndex, endIndex);
    productsToShow.forEach((product) => {
      const productDiv = $(`<div class="product" id=${product.id}>`);
      productDiv.html(`
    <img src="${product.image}" alt="${[product.name]}" id=${product.id}>
     <div class="product-content" id=${product.id}>
      <div class="product-title">${product.name}</div>
     <div class="product-price">$${product.price}</div>
     <button class="btn-add-to-cart" id=${product.id}>Add to Cart</button>
   </div>
                </div>
    `);
      productListDiv.append(productDiv);
    });
  };
  displayProducts(startIndex, endIndex);

  $(".product img").click(function (e) {
    var selectedProductID = $(this).attr("id");
    window.location.href = `product-page.html?id=${selectedProductID}`;
  });

  // add to cart button event listener
  $(".btn-add-to-cart").click(function (e) {
    e.preventDefault();
    if ($(this).text() == "Proceed to Checkout") {
      window.location.href = "cart.html";
    } else {
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

  $("#loadProducts").click(() => {
    startIndex = endIndex;
    endIndex = products.length;
    displayProducts(startIndex, endIndex);
  });

  const productPageDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const productDetails = products.find((product) => product.id == productId);

    // Update the HTML elements on the product page
    $("#product_image").attr("src", productDetails.image);
    $("#product_title").text(productDetails.name);
    $("#product_price").text(`$${productDetails.price}`);
    $("#product_description").text(productDetails.description);
  };

  // Call the productPageDetails function on product page load
  if (window.location.pathname.includes("product-page.html")) {
    productPageDetails();
  }
});
