import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db;

// Функция для инициализации базы данных
export async function initDb() {
    db = await open({
        filename: path.join(__dirname, '../../data/users.db'),
        driver: sqlite3.Database
    });

    // Создание таблицы пользователей, если её ещё нет
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
    `);
}

// Функция регистрации пользователя
export async function registerUser(username, password) {
    try {
        await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        return { success: true, message: 'Регистрация успешна' };
    } catch (error) {
        return { success: false, message: 'Ошибка регистрации: ' + error.message };
    }
}

// Функция авторизации пользователя
export async function loginUser(username, password) {
    const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if (user) {
        return { success: true, user };
    } else {
        return { success: false, message: 'Неверное имя пользователя или пароль' };
    }
}
