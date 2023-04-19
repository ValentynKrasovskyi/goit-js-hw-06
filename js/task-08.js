const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()


     const emailInput = e.currentTarget.elements.email;
    const passwordInput = e.currentTarget.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Please fill in all fields of the form!')
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        }

        console.log(formData);

        loginForm.reset();
    }

});

