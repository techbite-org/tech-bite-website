const express = require('express')
const app = express()

const info = {
    port: 3128 // My pc port fors testing lol
}

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/views/404.html");
});

app.listen(info.port)
console.log("Successfully started website!")