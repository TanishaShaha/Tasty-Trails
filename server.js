const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Or any other port you prefer

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    database: 'stu_info',
    user: 'root',
    password: 'Tanmay@108'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle sign up
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(INSERT_USER_QUERY, [username, email, password], (err, result) => {
        if (err) {
            res.status(500).send('Error signing up');
            throw err;
        }
        console.log('User signed up successfully');
        res.status(200).send('User signed up successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
