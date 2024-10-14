const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files like HTML, CSS, and JS
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the registration form HTML on the root URL
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Handle form submissions (POST request)
app.post('/register', (req, res) => {
    const formData = req.body;
    console.log('Form Submitted: ', formData);
    res.send('Registration Successful!');
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle form submissions (POST request)
app.post('/login', (req, res) => {
    const formData = req.body;
    console.log('Form Submitted: ', formData);
    res.send('Registration Successful!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
