document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="uname"]').value;
    const password = document.querySelector('input[name="psw"]').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password!');
        }
    })
    .catch(() => alert('Server error'));
});

const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'Syed24@zahid',
  database: 'loginpage'
});

// Connect and query
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');

  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
});
