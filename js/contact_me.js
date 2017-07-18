// Contact Form Scripts

$(function () {
  
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError  : function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      //var name      = $("input#name").val();
      var email     = $("input#email").val();
      //var phone     = $("input#phone").val();
      //var message   = $("textarea#message").val();
      
      //var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      //if (firstName.indexOf(' ') >= 0) {
      //  firstName = name.split(' ').slice(0, -1).join(' ');
      //}
      $.ajax({
        url     : "https://formspree.io/experience.landing@gmail.com",
        type    : "POST",
        data    : {
          //name   : name,
          email  : email,
          //message: message
        },
        dataType: 'json',
        success : function () {
          // Success message
          var $success = $('#success');
          $success.html("<div class='alert alert-success'>");
          $success.find('.alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
          $success.find('.alert-success')
              .append("<strong>Дякуємо, ми обов'язково повідомимо Вас про доступність сервісу</strong>");
          $success.find('.alert-success')
              .append('</div>');
          
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error   : function () {
          // Fail message
          var $success = $('#success');
          $success.html("<div class='alert alert-danger'>");
          $success.find('.alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
          $success.find('.alert-danger').append($("<strong>").text("Вибачте , здається наш сервер не відповідає. Ви можете підписатись на нас в соцмережах"));
          $success.find('.alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
      });
    },
    filter       : function () {
      return $(this).is(":visible");
    },
  });
  
  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});
