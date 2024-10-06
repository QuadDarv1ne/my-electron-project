const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const response = await window.api.login(username, password);
    
    if (response.success) {
        message.textContent = 'Вход выполнен успешно!';
        window.location.href = 'index.html';
    } else {
        message.textContent = response.message;
    }
});
