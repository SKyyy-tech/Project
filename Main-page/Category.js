 function showCategory(categoryId) {
      // Toggle buttons
      document.querySelectorAll('.specifier-buttons button').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');

      // Toggle sections
      document.querySelectorAll('.card-section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(categoryId).classList.add('active');
    }
    

     const popup = document.getElementById("popup_Form");
    const formContent = document.getElementById("form_Content");
    const successContent = document.getElementById("success_Content");

    function open_Form() {
      popup.style.display = "flex";
      formContent.style.display = "block";
      successContent.style.display = "none";
      void popup.offsetWidth; // force reflow for animation
      popup.classList.add("active");
    }

    function close_Form() {
      popup.classList.add("closing");
      popup.classList.remove("active");
      setTimeout(() => {
        popup.style.display = "none";
        popup.classList.remove("closing");
      }, 300);
    }

    function submit_Form() {
      formContent.style.display = "none";
      successContent.style.display = "block";
      successContent.style.animation = "scaleIn 0.4s ease forwards";
    }