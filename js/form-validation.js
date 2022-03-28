$(function () {
  $("form[name='contactUs']").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
        maxlength: "100",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      },
      phNum: {
        required: true,
        number: true,
        maxlength: 10,
        pattern: "^?d3?(-| )?d{3}(-| )?d{4}$",
      },
      message: {
        maxlength: 500,
      },
    },
    messages: {
      name: "Please enter name!",
      email: "Please enter email with correct format",
      phNum: "Please enter phone number with correct format",
      message: "Message cannot be larger than 500 words",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });

  $("#alertToSubmit").on("click", function () {
    //reset();
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var phone = document.getElementsByName("phNum")[0].value;
    var message = document.getElementsByName("message")[0].value;
    if (name != "" && email != "" && phone != "") {
      var confirmed = confirm("Are you sure you want to submit?");
      if (confirmed) {
        sendEmail(email, message);
      } else {
        alert("FAILED");
      }
    }
  });
});

function sendEmail(email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "lastmail337@gmail.com",
    Password: "lastmail123",
    To: email,
    From: "lastmail337@gmail.com",
    Subject: "TEST",
    Body: message,
  }).then(function (message) {
    alert("SUCCESS");
  });
}
