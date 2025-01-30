import express from 'express';
import { Server } from 'http';
import cors from 'cors';
import sqlite3 from 'sqlite3'
import { open } from 'sqlite';
import Pusher from 'pusher'

const pusher = new Pusher({
    appId: '1934185', 
    key: '942f87836f7b0a8948b2',      
    secret: 'f3dcd4e49e05504f4d1d',
    cluster: 'sa1', 
    useTLS: true
  });

const db = await open({
    filename: 'chat.db',
    driver: sqlite3.Database
})

await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_offset TEXT UNIQUE,
        username TEXT,
        newMessage TEXT,
        imageLink TEXT,
        createdAt TEXT DEFAULT CURRENT_TIMESTAMP
        )
    `);

const app = express()
app.use(cors())

app.post('/send-message', async (req, res) => {
    const { username, newMessage, imageLink} = req.body

    let result;
    try {
        result = await db.run(`
            INSERT INTO users (username, newMessage, imageLink) 
            VALUES (?, ?, ?)`, 
            username, newMessage, imageLink)
    } catch (error) {
        return -1
    }

    const inserted = await db.get('SELECT * FROM users WHERE id = ?', result.lastID)

    pusher.trigger('chat-channel', 'new-message', inserted)
})

app.listen(3000, () => {
    console.log("Servidor ON");
})