const express = require('express')
const app = express()

const info = {
    port: 3128
}

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(info.port).then(console.log("Successfully started website!"))