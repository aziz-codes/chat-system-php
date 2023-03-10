// const btn = document.getElementById("btnSend");
// ..............globals.......................

// ............globals..........................
const form = document.getElementById("form-login");
const errorEl = document.getElementById("error-text");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "backend/login.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        errorEl.textContent = data;
      }
    }
  };
  // using form data..

  let formData = new FormData(form);

  xhr.send(formData);
});
