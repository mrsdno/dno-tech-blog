// show/hide form with button


const showLogin = document.getElementById("login-btn");
const loginFormElement = document.getElementById('login-form');

showLogin.addEventListener("click", function () {

    let formStatus = loginFormElement.classList.contains('d-none');
    if (formStatus) {
        loginFormElement.classList.remove('d-none');
        showLogin.innerText = 'Hide Login Form';
    }
    else {
        loginFormElement.classList.add('d-none');
        showLogin.innerText = 'Login'
    }
})

const showSignUp = document.getElementById("signup-btn");
const signUpFormElement = document.getElementById('signup-form');

showSignUp.addEventListener("click", function () {

    let formStatus = signUpFormElement.classList.contains('d-none');
    if (formStatus) {
        signUpFormElement.classList.remove('d-none');
        showSignUp.innerText = 'Hide signup Form';
    }
    else {
        signUpFormElement.classList.add('d-none');
        showSignUp.innerText = 'SignUp'
    }
})




async function signupFormHandler(event) {
    event.preventDefault();

    // collect username and password from form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();;

    // conditional to ensure that all fields have values before making the post request
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        //check response status
        if (response.ok) {
            // log user in and redirect to homepage after signing up
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }

        } else {
            alert(response.statusText)
        }
    }
}

async function loginFormHandler(event) {

    event.preventDefault();
    
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // conditional to ensure that all fields have values before making the post request
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
