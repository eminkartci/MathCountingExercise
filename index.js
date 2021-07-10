import express from 'express';
import path from 'path';
import fs from 'fs';


const app = express();
const router = express.Router();
const port = 4000


app.get('/', (req,res) => {
    res.sendFile("index.html", {root: path.resolve()})
})


app.listen(port, () => {
    console.log("Listening ", port)
})