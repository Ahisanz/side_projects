// var form = document.querySelector(".form-js");
// var log = document.querySelector("#log");

// form.addEventListener("submit", function(event) {
//   var data = new FormData(form);
//   var output = "";
//   for (const entry of data) {
//     output = output + entry[0] + "=" + entry[1] + "\r";
//   };
//   log.innerText = output;
//   event.preventDefault();
// }, false);

var formJs = document.querySelector(".form-js");

formJs.addEventListener("click", function (event) {
  if (event.target.name === "rating-form__js") {
    console.log(event.target.value);
    var value = event.target.value;

    // mandar para a API o value
  }
});
