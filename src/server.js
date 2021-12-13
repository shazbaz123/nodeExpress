const express = require('express');

const app = express();

const port = 5000;

// middleware
app.use('/home', express.static('public'));
app.use('/about', express.static('public/about.html'));
app.use('/contact', express.static('public/contact.html'));

app.listen(port, () => {
    console.log('listening on port 5000');
});