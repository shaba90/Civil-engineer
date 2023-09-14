/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : Template : Konstruk - Construction & Building HTML Template
 * Author : devsdesign
 * Author URI : http://www.devsdesign.com/
 *
 * -----------------------------------------------------------------------------
 *
 **/

// (function($) {
//     'use strict';
//     // Get the form.
//     var form = $('#contact-form');

//     // Get the messages div.
//     var formMessages = $('#form-messages');

//     // Set up an event listener for the contact form.
//     $(form).submit(function(e) {
//         // Stop the browser from submitting the form.
//         e.preventDefault();

//         // Serialize the form data.
//         var formData = $(form).serialize();

//         // Submit the form using AJAX.
//         $.ajax({
//             type: 'POST',
//             url: $(form).attr('action'),
//             data: formData
//         })
//         .done(function(response) {
//             // Make sure that the formMessages div has the 'success' class.
//             $(formMessages).removeClass('error');
//             $(formMessages).addClass('success');

//             // Set the message text.
//             $(formMessages).text(response);

//             // Clear the form.
//             $('#name, #email, #phone, #website, #message').val('');
//         })
//         .fail(function(data) {
//             // Make sure that the formMessages div has the 'error' class.
//             $(formMessages).removeClass('success');
//             $(formMessages).addClass('error');

//             // Set the message text.
//             if (data.responseText !== '') {
//                 $(formMessages).text(data.responseText);
//             } else {
//                 $(formMessages).text('Oops! An error occured and your message could not be sent.');
//             }
//         });
//     });

// })(jQuery);

//   bjkkjcjkefcbkejkc
function sendMail() {
  var params = {
    first: document.getElementById("first").value,
    last: document.getElementById("last").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_x303jya";
  const templateID = "template_0awse3b";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("first").value = "";
      document.getElementById("last").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";

      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}
