// listen to click in the form and change rating score

var formJs = document.querySelector(".form-js");

formJs.addEventListener("click", function (event) {
  if (event.target.name === "rating-form__js") {
    var value = event.target.value;

    // mandar para a API o value
  }
});

// Change state of the aria-checked if clicked, focused

var formA11y = document.querySelector(".form-a11y .form__form");
var formA11yInputs = document.querySelectorAll(".form-a11y .form__form input");

formA11y.addEventListener("click", function (event) {
  for (i = 0; i < formA11yInputs.length; i++) {
    formA11yInputs[i].setAttribute("aria-checked", false);
  }
  if (event.target.name == "rating-form__a11y") {
    event.target.setAttribute("aria-checked", true);
  }
});
