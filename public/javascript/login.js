async function signupFormHandler(event) {
    event.preventDefault();

    // collect username, email, and password from form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();;
    const password = document.querySelector('#password-signup').value.trim();;

    // conditional to ensure that all fields have values before making the post request
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
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
                    email,
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
    
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // conditional to ensure that all fields have values before making the post request
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
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
