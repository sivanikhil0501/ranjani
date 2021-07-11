(function () {
  'use strict'
  console.log('hi');

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
        display();
      }, true)
    })
})();

function display(){
 // $(".needs-validation").submit(function (){
  let fname = $("#first").val();
  let lname = $("#last").val();
  let gender = $("#gender").val();
  let email = $("#email").val();
  let course = $("#course1").val();
  const obj = {
   firstname : fname,
   lastname : lname,
   gender : gender,
   email : email
   };
  console.log(obj);
  console.log(JSON.stringify(obj));
}