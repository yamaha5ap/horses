//   DONATE SUBMIT BUTTON     //
// Disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//   DONATE RESET BUTTON     //

$('#form_reset').click(function(){
            $('#donate_form')[0].reset();
 });

//   NEWSLETTER     //

  //Show the newsletter
$('.newsletter_btn').on('click', function(){
  $(newsletter).toggle()
});

//function myFunction() {
//  var x = document.getElementById("newsletter");
//  if (x.style.display === "none") {
//    x.style.display = "block";
//  } else {
//    x.style.display = "none";
//  }
//}















