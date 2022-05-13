const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server open on port 3333 🔥');
});

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});