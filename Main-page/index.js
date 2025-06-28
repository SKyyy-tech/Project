

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
    

    const pop_up = document.getElementById("popup_Form");
    const form_Content = document.getElementById("form_Content");
    const success_Content = document.getElementById("success_Content");

    function open_Form() {
      pop_up.style.display = "flex";
      form_Content.style.display = "block";
      success_Content.style.display = "none";
      void pop_up.offsetWidth; // force reflow for animation
      pop_up.classList.add("active");
    }

    function close_Form() {
      pop_up.classList.add("closing");
      pop_up.classList.remove("active");
      setTimeout(() => {
        pop_up.style.display = "none";
        pop_up.classList.remove("closing");
      }, 300);
    }

    function submit_Form() {
      form_Content.style.display = "none";
      success_Content.style.display = "block";
      success_Content.style.animation = "scaleIn 0.4s ease forwards";
    }


   const popup_MSG = document.getElementById("popup_MSG");
   const success_MSG = document.getElementById("success_MSG");

    function open_MSG() {
      popup_MSG.style.display = "flex";
      success_MSG.style.display = "block";
      void popup_MSG.offsetWidth; // force reflow for animation
      popup_MSG.classList.add("active");
    }

    function close_MSG() {
      popup_MSG.classList.add("closing");
      popup_MSG.classList.remove("active");
      setTimeout(() => {
        popup_MSG.style.display = "none";
        popup_MSG.classList.remove("closing");
      }, 300);
    }

    // function submit_MSG() {
      
    //   success_MSG.style.display = "block";
    //   success_MSG.style.animation = "scaleIn 0.4s ease forwards";
    // }
