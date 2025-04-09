<script>
        <script>
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();
        let email = document.getElementById('email').value.trim();
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirmPassword').value;

        document.getElementById('firstNameError').textContent = firstName ? '' : 'First name is required';
        document.getElementById('lastNameError').textContent = lastName ? '' : 'Last name is required';
        document.getElementById('emailError').textContent = email ? '' : 'Valid email is required';
        document.getElementById('passwordError').textContent = password ? '' : 'Password is required';
        document.getElementById('confirmPasswordError').textContent = confirmPassword === password ? '' : 'Passwords do not match';

        if (!firstName || !lastName || !email || !password || confirmPassword !== password) {
            isValid = false;
        }

        if (isValid) {
            document.getElementById('successMessage').style.display = 'block';

            // Store registered credentials in localStorage
            localStorage.setItem('registeredEmail', email);
            localStorage.setItem('registeredPassword', password);

            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
                document.getElementById('registerForm').reset();
                window.location.href = 'login.html'; // Redirect to login page
            }, 2000);
        }
    });
</script>

    </script>