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

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    console.log(res);
    alert("your message sent successfully");
  });
  // .catch((err) => console.log(err));
}
