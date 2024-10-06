const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const response = await window.api.register(username, password);
    
    if (response.success) {
        message.textContent = 'Регистрация прошла успешно!';
    } else {
        message.textContent = response.message;
    }
});
