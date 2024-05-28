const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: " ",
  database: "onespot app",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database");
});

// API Endpoint to Save Form Data
app.post("/api/formData", (req, res) => {
  const { firstName, lastName, age, phoneNumber } = req.body;
  const sql = "INSERT INTO form_data (first_name, last_name, age, phone_number) VALUES (?, ?, ?, ?)";
  db.query(sql, [firstName, lastName, age, phoneNumber], (err, result) => {
    if (err) {
      console.error("Error saving form data:", err);
      res.status(500).send("Error saving form data");
      return;
    }
    console.log("Form data saved successfully");
    res.status(200).send("Form data saved successfully");
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
