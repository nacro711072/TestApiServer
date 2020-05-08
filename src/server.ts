
import http from "http";
import express from "express";
import {handleBodyRequestParsing, wrapper} from "./middleware/common"

const router = express();
handleBodyRequestParsing(router);
wrapper(router)

router.get('/startpage-login/:latlng,:zip', function(req, res) {
    res.send(JSON.stringify({
        "name": "test",
        "grade": 1
    }))
})

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

// const rawData = fs.readFileSync('../config.json')
// JSON.parse(rawData)



server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}...`)
});