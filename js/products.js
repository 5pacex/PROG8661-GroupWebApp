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

  $("#product-list").on("click", ".product img", function (e) {
    var selectedProductID = $(this).attr("id");
    window.location.href = `product-page.html?id=${selectedProductID}`;
  });

  // add to cart button event listener
  $("#product-list").on("click", ".btn-add-to-cart", function (e) {
    e.preventDefault();
    if ($(this).text() == "Proceed to Checkout") {
      window.location.href = "cart.html";
    } else {
      addToCart($(this).attr("id"));
      $(this).css("background-color", "#a33115");
      $(this).text("Proceed to Checkout");
    }
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
    $(".bxslider").bxSlider();
    $("#accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
    });
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
