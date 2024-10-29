function accessSystem() {
    const inputUser = document.getElementById('user').value;
    const inputPassword = document.getElementById('password').value;
    
    if (inputUser === "admin" && inputPassword === "admin") {
        window.location.href = "main.html"    
    } else {
        alert("Erro")
    }

}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}