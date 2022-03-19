const usernameInput = document.querySelector(".user-input"); // input username
const passwordInput = document.querySelector(".pass-input"); // input password
const usernameMas = document.querySelector(".username-msg"); // massage Username
const passwordMas = document.querySelector(".password-msg"); // massage password
const signinMas = document.querySelector(".signin-status"); // massage sign in
const buttonSign = document.querySelector(".signin-button"); // button Sign in

buttonSign.addEventListener("click", sign);

function sign(event) {
    event.preventDefault();
    usernameMas.innerHTML = "";
    passwordMas.innerHTML = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;
    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".com") === -1) {
        usernameMas.innerHTML = "Please enter a valid Email"
        ifSendData = false
    }
    if (passwordValue.length === 0) {
        passwordMas.innerHTML = "Please enter your password"
        ifSendData = false
    } else if (passwordValue.length < 4 || passwordValue.length > 9) {
        passwordMas.innerHTML = "Your password is too short"
        ifSendData = false
    }

    if (ifSendData === true) {
        const body = JSON.stringify({
            userData: usernameValue,
            password: passwordValue
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
            .then((response) => {
                if (response.ok === true) {
                    signinMas.innerHTML = "You signed in successfully";
                    console.log(response)
                }
            })
    }
}