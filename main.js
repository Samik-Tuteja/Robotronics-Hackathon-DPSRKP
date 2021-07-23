const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/html/about.html");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/html/reach.html");
});

app.use(express.static("public"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));