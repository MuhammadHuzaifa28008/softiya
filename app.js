const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const port = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.post('/', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.status(200).json({ message: 'Form submitted successfully' }); // Send a response
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
