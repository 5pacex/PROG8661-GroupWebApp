$(document).ready(function () {
  loadProducts();
  $(".removeItem").click(function () {
    removeFromCart($(this).attr("id"));
    reloadProducts();
  });

  $("#checkout").click(function() {
    window.location.href = "./checkout.html";
  });
});

const reloadProducts = () => {
  $("#cart").empty();
  loadProducts();
}

const loadProducts = () => {
  const cart = loadCartData();
  for (i = 0; i < cart.length; i++) {
    const product = findProductById(cart[i].id);
    const subtotal = product.price * cart[i].quantity;
    const spinnerId = `spinner-${product.id}`;
    const subtotalId = `subtotal-${product.id}`;
    const html = `
    <tr>
      <td>
        <button class="removeItem" id=${product.id}>Delete</button>
        <img class="product-icon" src="${product.image}" alt="${[product.name]}">
        ${product.name}
      </td>
      <td>
        <div class="product-price">$${product.price}</div>
      </td>
      <td><input id="${spinnerId}" value="${cart[i].quantity}"></td>
      <td id="${subtotalId}">${subtotal}</td>
    </tr>
    `;
    $("#cart").append(html);

    $("#" + spinnerId).spinner({
      min: 1,
      spin: function (event, ui) {
        const newQuantity = ui.value;
        changeQuantity(product.id, newQuantity);
        $("#" + subtotalId).text(product.price * newQuantity);
        updateTotal();
      }
    });
  }

  updateTotal();
}

const updateTotal = () => {
  const cart = loadCartData();
  let subtotal = 0;
  for (i = 0; i < cart.length; i++) {
    const product = findProductById(cart[i].id);
    subtotal += product.price * cart[i].quantity;
  }

  $("#subtotal").text(toDollar(subtotal));

  const hst = (subtotal * HST).toFixed(2);
  $("#hst").html(toDollar(hst));

  const total = (subtotal * (1 + HST)).toFixed(2);
  $("#total").text(toDollar(total));
}