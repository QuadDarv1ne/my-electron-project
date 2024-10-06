const { ipcRenderer } = require('electron');

ipcRenderer.on('update-theme', (event, theme) => {
    document.body.className = theme; // Применяем тему
    document.getElementById('theme-status').innerText = `Current theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
});
