(function () {
  var focusedElementBeforeModal, modal, registerButton;

  var KEY = {
    ESCAPE: 27,
    TAB: 9,
  };

  //obligatory null checks
  if (
    document.querySelector(".modal") &&
    document.querySelector(".open-modal")
  ) {
    modal = document.querySelector(".modal");
    registerButton = document.querySelector(".open-modal");
    registerButton.addEventListener("click", openModal);
  }

  function openModal() {
    // element that was focused before modal opened
    //we will focus back on this when modal is closed
    focusedElementBeforeModal = document.activeElement;

    modal.style.display = "block";
    // add the key listener
    modal.addEventListener("keydown", processEscapeTabKeys);

    // Find all focusable modal elements
    var modalElements = "input:not([disabled]), button:not([disabled])";
    var focusableElements = modal.querySelectorAll(modalElements);

    // Convert NodeList to Array only for IE 11
    //focusableElements = Array.prototype.slice.call(focusableElements);

    var firstElementOfModal = focusableElements[0];
    var lastElementOfModal = focusableElements[focusableElements.length - 1];

    // Focus on first element of the modal - firstName
    firstElementOfModal.focus();

    function processEscapeTabKeys(event) {
      // handle TAB key
      if (event.keyCode === KEY.TAB) {
        if (document.activeElement === lastElementOfModal) {
          event.preventDefault();
          firstElementOfModal.focus();
        }
      }
      // handle ESCAPE key to close the modal
      if (event.keyCode === KEY.ESCAPE) {
        modal.style.display = "none";
        // Focus to the register button (the last focus before modal was opened)
        focusedElementBeforeModal.focus();
      }
    }
  }
})();
