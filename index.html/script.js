function togglePassword() {
  let pass = document.getElementById("password");
  let icon = document.getElementById("eyeIcon");

  if (pass.type === "password") {
    pass.type = "text";
    icon.src = "Sesi 7Proyek - Form Sign in/assets/hide.png";
  } else {
    pass.type = "password";
    icon.src = "Sesi 7Proyek - Form Sign in/assets/show.png";
  }
}

document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username.length < 3) {
    alert("atleast have 3 characters");
    return;
  }

  // VALIDASI PASSWORD (minimal 5 karakter)
  if (password.length < 5) {
    alert("atleast have 5 characters!");
    return;
  }

  // JIKA VALID
  alert("ig it suceeded");

  // RESET FORM
  this.reset();

  // KEMBALIKAN KE DEFAULT
  document.getElementById("eyeIcon").src = "Sesi 7Proyek - Form Sign in/assets/show.png";
  document.getElementById("password").type = "password";
});