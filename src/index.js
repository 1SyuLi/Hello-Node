const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server open on port 3333 🔥');
});

app.get('/courses', (req, res) => {
    return res.json(["curso1", "curso2", "curso3"]);
});

app.post('/courses', (req, res) => {
    return res.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
});

app.put("/courses/:id", (req, res) => {
    return res.json(["curso 6", "curso 2", "curso 3", "curso 4"]);
})

app.patch("/courses/:id", (req, res) => {
    return res.json(["curso 6", "curso 7", "curso 3", "curso 4"]);
})

app.delete("/courses/:id", (req, res) => {
    return res.json(["curso 6", "curso 7", "curso 4"]);
})

