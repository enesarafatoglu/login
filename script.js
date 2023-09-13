function login() {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username === "test" && password === "test") {
    alert("Entry successful!");

    usernameInput.value = "";
    passwordInput.value = "";
  } else {
    alert("Login failed! Please check the username and password.");
    usernameInput.value = "";
    passwordInput.value = "";
  }
}
