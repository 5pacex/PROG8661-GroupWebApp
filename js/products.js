$(document).ready(function () {
  $(".btn-add-to-cart").click(function (e) {
    e.preventDefault();
    if ($(this).text() == "Proceed to Checkout") {
      window.location.href = "cart.html";
    } else {
      let productName = $(this).closest(".product").find(".product-content")[0]
        .children[0].innerHTML;
      let productPrice = $(this).closest(".product").find(".product-content")[0]
        .children[2].innerHTML;

      localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            productName: productName,
            productPrice: productPrice,
          },
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
