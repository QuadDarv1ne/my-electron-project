const { contextBridge, ipcRenderer } = require('electron');

// Экспозируем API для взаимодействия с главным процессом
contextBridge.exposeInMainWorld('electron', {
    onThemeChange: (callback) => ipcRenderer.on('update-theme', callback)
});

contextBridge.exposeInMainWorld('api', {
    register: (username, password) => ipcRenderer.invoke('register', { username, password }),
    login: (username, password) => ipcRenderer.invoke('login', { username, password })
});