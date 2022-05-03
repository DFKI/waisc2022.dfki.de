$(function() {
  // Validate the contact form
  $('#registerform').validate({
    // Specify what the errors should look like
    // when they are dynamically added to the form
    errorElement: "span",
    errorPlacement: function(error, element) {
      error.insertBefore( element );
      error.wrap("<p class='error'></p>");
    },
 
    // Add requirements to each of the fields
    rules: {
      fullname: {
        required: true,
        minlength: 2
      },
      address: {
        required: true,
        minlength: 2
      },
      city: {
        required: true,
        minlength: 1
      },
      country: {
        required: true,
        minlength: 1        
      },
      email: {
        required: true,
        email: true
      },
      option: {
        required: true
      },
      name: {
        required: true,
        minlength: 1
      },
      institution: {
        required: true,
        minlength: 3
      }
    },
 
    // Specify what error messages to display
    // when the user does something horrid
    messages: {
      fullname: {
        required: "Please enter your full name.",
        minlength: "At least 2 characters required."
      },
      country: {
        required: "Please enter your country.",
        minlength: "At least 1 character required."
      },
      address: {
        required: "Please enter your address.",
        minlength: "At least 1 character required."
      },
      city: {
        required: "Please enter your city.",
        minlength: "At least 1 character required."
      },
      email: {
        required: "Please enter your email.",
        email: "Please enter a valid email."
      },
      option: {
        required: "Please selection an option."
      },
      name: {
        required: "Please enter your display name.",
        minlength: "At least 1 character required."
      },
      institution: {
        required: "Please enter your institution.",
        minlength: "At least 3 characters required."
      }
    },
 
    // Use Ajax to send everything to register.php
    submitHandler: function(form) {
      $('#response').empty();

      $("#registerform-submit").attr("value", "Sending...");
      $(form).ajaxSubmit({
        target: "#response",
        success: function(responseText, statusText, xhr, $form) {
          $("#response").html(responseText);
          $("#registerform-submit").attr("value", $("#registerform-submit").attr("data-value"));
        },
        error: function(responseText, statusText, xhr, $form) {
          $("#response").html(responseText);
          $("#registerform-submit").attr("value", $("#registerform-submit").attr("data-value"));
        }
      });
      return false;
    },

    invalidHandler: function (event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        $('#response').empty();
        var msg = "There " + errors + " missing fields. "
        if (errors === 1) {
          msg = "There is 1 missing field. "
        }
        $("#response").html("<span class='failure'>" + msg + "Please check the form.</span>");
      }
    }
  });
});
