import Store from 'electron-store';

export const store = new Store();

export function updateTheme(window) {
    const theme = store.get('theme') || 'light';
    window.webContents.send('update-theme', theme); // Отправляем сигнал на фронтенд для изменения темы
}
