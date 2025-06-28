const popup = document.getElementById("popupForm");
    const formContent = document.getElementById("formContent");
    const successContent = document.getElementById("successContent");

    function openForm() {
      popup.style.display = "flex";
      formContent.style.display = "block";
      successContent.style.display = "none";
      void popup.offsetWidth; // force reflow for animation
      popup.classList.add("active");
    }

    function closeForm() {
      popup.classList.add("closing");
      popup.classList.remove("active");
      setTimeout(() => {
        popup.style.display = "none";
        popup.classList.remove("closing");
      }, 300);
    }

    function submitForm() {
      formContent.style.display = "none";
      successContent.style.display = "block";
      successContent.style.animation = "scaleIn 0.4s ease forwards";
    }