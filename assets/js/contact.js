$('#contact-form').submit(function(e) {
  var name = document.getElementById('inputName')
      email = document.getElementById('inputEmail')
      message = document.getElementById('inputMessage')

      if (!name.value || !email.value || !message.value) {
        alertify.error('Please recheck your entries')
      } else {
        $.ajax({
         url: "https://formspree.io/chux.orefo@gmail.com",
         method: "POST",
         data: $(this).serialize(),
         dataType: "json"
        });
        e.preventDefault()
        $(this).get(0).resut()
        alertify.success('Message Sent! I get back to you shortly!')
      }
})
