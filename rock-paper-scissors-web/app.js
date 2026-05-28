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

app.get('/data', restrictedPlaces,(req,res)=>{
    const jsonPath = path.join(__dirname, 'data.json');
    fs.readFile(jsonPath, 'utf-8', (err, data)=>{
        if(err){
            console.error("Error reading JSON file:", err);
            return res.status(500).json({ error: "Failed to load data" });
        }
        res.json(JSON.parse(data));
    });
});



app.post('/data', express.json(), restrictedPlaces, (req, res)=>{
    const { username } = req.body;
    const joinpath = path.join(__dirname, 'data.json');
    fs.readFile(joinpath, 'utf-8', (err, data)=>{
        if(err){
            console.error("Error reading JSON file:", err);
            return res.status(500).json({ error: "Failed to load data" });
        }
        const users = JSON.parse(data);
        users.users.push({ username, score: 0 });
        fs.writeFile(joinpath, JSON.stringify(users, null, 2), 'utf-8', (err)=>{
            if(err){
                console.error("Error writing to JSON file:", err);
                return res.status(500).json({ error: "Failed to save data" });
            }
            res.status(201).json({ message: "User added successfully" });
        });
    });
});

app.patch('/data', express.json(), restrictedPlaces, (req, res)=>{
    const { username, score } = req.body;
    const joinpath = path.join(__dirname, 'data.json');
    fs.readFile(joinpath, 'utf-8', (err, data)=>{
        if(err){
            console.error("Error reading JSON file:", err);
            return res.status(500).json({ error: "Failed to load data" });
        }
        const users = JSON.parse(data);
        // Find the user and update their score
        const user = users.users.find(u => u.username === username);
        if (user) {
            user.score = score;
            fs.writeFile(joinpath, JSON.stringify(users, null, 2), 'utf-8', (err)=>{
                if(err){
                    console.error("Error writing to JSON file:", err);
                    return res.status(500).json({ error: "Failed to save data" });
                }
                res.json({ message: "Score updated successfully" });
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    })
});



const RestrictedPaths = new Set([
    '/data'
])

function restrictedPlaces(req, res, next) {

    

    if (RestrictedPaths.has(req.path)) {
        if ((req.headers['accept'] || '').includes('text/html')) {
            return res.status(403).send('Access Denied');
        }
    }
    next();
}





app.listen(PORT,()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
})