import { Menu, dialog } from 'electron';
import { store, updateTheme } from './store.js';

function createMenu(mainWindow) {
    const menuTemplate = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open',
                    click: async () => {
                        const result = await dialog.showOpenDialog({ properties: ['openFile'] });
                        if (!result.canceled) {
                            console.log('File selected:', result.filePaths[0]);
                        }
                    }
                },
                {
                    label: 'Save',
                    click: async () => {
                        const result = await dialog.showSaveDialog();
                        if (!result.canceled) {
                            console.log('File saved:', result.filePath);
                        }
                    }
                },
                { type: 'separator' },
                { role: 'quit' }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'toggledevtools' }
            ]
        },
        {
            label: 'Settings',
            submenu: [
                {
                    label: 'Light Theme',
                    type: 'radio',
                    click: () => {
                        store.set('theme', 'light');
                        updateTheme(mainWindow);
                    }
                },
                {
                    label: 'Dark Theme',
                    type: 'radio',
                    click: () => {
                        store.set('theme', 'dark');
                        updateTheme(mainWindow);
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}

export default createMenu;
