$(function() {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      const firstName = $("input#firstName").val();
      // additional error messages or events
      $('#success').html("<div class='alert alert-danger col-md-12'>");
      $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that our mail server is not responding. Please try again later!"));
      $('#success > .alert-danger').append('</div>');
      //clear all fields
    //   $('#contactForm').trigger("reset");
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "https://formspree.io/maybqnpy",
        headers: {  'Access-Control-Allow-Origin': 'https://formspree.io/maybqnpy' },
        dataType: "json",
        crossDomain: true,
        type: "POST",
        // data: {
        //   name: `${firstName} ${lastName}`,
        //   phone: phone,
        //   location: location,
        //   email: email,
        //   message: message
        // },
        cache: false,
        // success: function() {
        //   // Success message
        //   $('#success').html("<div class='alert alert-success'>");
        //   $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        //     .append("</button>");
        //   $('#success > .alert-success')
        //     .append("<strong>Your message has been sent. </strong>");
        //   $('#success > .alert-success')
        //     .append('</div>');
        //   //clear all fields
        //   $('#contactForm').trigger("reset");
        // },
        // error: function(xhr, status, error) {
        //     console.log('error', error)
        //     console.log('status', status)
        //     console.log('xhr', xhr)
        //   // Fail message
        //   $('#success').html("<div class='alert alert-danger col-md-12'>");
        //   $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        //     .append("</button>");
        //   $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that our mail server is not responding. Please try again later!"));
        //   $('#success > .alert-danger').append('</div>');
        //   //clear all fields
        //   $('#contactForm').trigger("reset");
        // },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#success > .alert-success')
        .append("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success')
        .append('</div>');
      //clear all fields
      $('#contactForm').trigger("reset");
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
