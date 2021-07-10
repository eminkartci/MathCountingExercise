import express from 'express';
import path from 'path';
import fs from 'fs';


const app = express();
const router = express.Router();
const port = 8800

app.use(express.static("src"))
app.use("/css", express.static(path.resolve() + "src/css"))
app.use("/js", express.static(path.resolve() + "src/js"))
app.use("/images", express.static(path.resolve() + "src/images"))

app.get('/', (req, res) => {
    res.sendFile('./src/index.html', { root: path.resolve() })
})


app.listen(port, () => {
    console.log("Listening ", port)
})