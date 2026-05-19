import express from "express";
import path from "path";
import url from "url";
import fs from "fs";
import http from 'http';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/style/style', (req, res) =>{
    res.sendFile(path.join(__dirname, './style/style.css'))
    
});
app.get('/style/hard', (req, res) =>{
    res.sendFile(path.join(__dirname, './style/hard.css'))
    
});
app.get('/script/main', (req, res) =>{
    res.sendFile(path.join(__dirname, './script/main.js'))
});
app.get('/script/functions', (req, res) =>{
    res.sendFile(path.join(__dirname, './script/functions.js'))
});
app.get('/script/game', (req, res) =>{
    res.sendFile(path.join(__dirname, './script/game.js'))
});
app.get('/script/objects', (req, res) =>{
    res.sendFile(path.join(__dirname, './script/objects.js'))
});
app.get('/audio/trouble', (req, res) =>{
    res.sendFile(path.join(__dirname, './audio/trouble.mp3'))
});
app.get('')





app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './templates/index.html'));
})

app.listen(PORT,()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
})