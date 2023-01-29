const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
form.addEventListener("submit", (e) => {
  let messages = [];
  if (username.value === "" || username.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 8) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }
  if (login.value.length <= 6) {
    messages.push("Login must be longer than 6 characters");
  }
});
//czemu to nie działą?
