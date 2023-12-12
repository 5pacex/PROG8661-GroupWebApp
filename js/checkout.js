$(function () {
  $.validator.setDefaults({
    submitHandler: function () {
      $("#submit-dialog").dialog("open");
    },
  });

  $("#province").selectmenu();

  $("#submit-dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      "Continue shopping": function () {
        $(this).dialog("close");
        window.location.href = "./products.html";
      },
    },
  });
  // validate shipping-form form and submit
  $("#shipping-form").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 2,
      },
      lastname: {
        required: true,
        minlength: 2,
      },
      address: {
        required: true,
        minlength: 5,
      },
      city: {
        required: true,
        minlength: 2,
      },
      "postal-code": {
        required: true,
        minlength: 6,
        maxlength: 6,
      },
      phone: {
        required: true,
        phoneUS: true,
      },
      email: {
        required: true,
        email: true,
      },
      "order-notes": {
        maxlength: 200,
      },
    },
    messages: {
      firstname: {
        required: "Please enter your firstname",
        minlength: "Your firstname must consist of at least 2 characters",
      },
      lastname: {
        required: "Please enter your lastname",
        minlength: "Your lastname must consist of at least 2 characters",
      },
      address: {
        required: "Please provide a address",
        minlength: "Your address must be at least 5 characters long",
      },
      city: {
        required: "Please provide a city",
        minlength: "Your city must be at least 2 characters long",
      },
      "postal-code": {
        required: "Please provide a postal code",
        minlength: "Your postal code must be 6 characters long (exclude space)",
        maxlength: "Your postal code must be 6 characters long (exclude space)",
      },
      phone: {
        required: "Please provide your phone",
        phoneUS: "Your phone must be a valid phone number",
      },

      email: {
        required: "Please enter a valid email address",
        email: "Your email must be a valid email address",
      },
      "order-notes": {
        maxlength: "Your order notes must be less than 200 characters long",
      },
    },
  });

  $("#firstname").focus();
});
