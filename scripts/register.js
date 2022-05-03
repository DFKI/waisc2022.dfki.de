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
      firstname: {
        required: true,
        minlength: 1
      },
      lastname: {
        required: true,
        minlength: 1
      },
      email: {
        required: true,
        email: true
      },
      country: {
        required: true,
        minlength: 1        
      }
    },
 
    // Specify what error messages to display
    // when the user does something horrid
    messages: {
      firstname: {
        required: "Please enter your first name.",
        minlength: "At least 1 character required."
      },
      lastname: {
        required: "Please enter your last name.",
        minlength: "At least 1 character required."
      },
      email: {
        required: "Please enter your email.",
        email: "Please enter a valid email."
      },
      country: {
        required: "Please enter your country.",
        minlength: "At least 1 character required."
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
    }
  });
});
