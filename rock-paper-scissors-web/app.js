import express from "express";
import path from "path";
import url from "url";
import fs from "fs";
import http from 'http';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './templates/index.html'));
})



app.use(express.static(path.join(__dirname, 'style')));
app.use(express.static(path.join(__dirname, 'script')));
app.use(express.static(path.join(__dirname, 'audio')));

app.get('/data',(req,res)=>{
    const jsonPath = path.join(__dirname, 'data.json');
    fs.readFile(jsonPath, 'utf-8', (err, data)=>{
        if(err){
            console.error("Error reading JSON file:", err);
            return res.status(500).json({ error: "Failed to load data" });
        }
        res.json(JSON.parse(data));
    });
});


function RestrictedPlaces(req, res, next) {
    const Paths = [
        '/script/objects',
        '/script/game',
        '/script/functions',
        '/script/main'
    ];
    

    if (Paths.includes(req.path)) {
        if ((req.headers['accept'] || '').includes('text/html')) {
            return res.status(403).send('Access Denied');
        }
    }
    next();
}





app.listen(PORT,()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
})