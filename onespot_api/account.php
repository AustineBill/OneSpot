<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onespot_db";

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error));
    exit;
}

// Get the JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);
error_log(print_r($data, true));

// Check if username and password are provided
if (!isset($data['username'], $data['password'])) {
    echo json_encode(array("success" => false, "message" => "Username and password are required"));
    exit;
}

// Extract username and password from the JSON
$username = $data['username'];
$password = md5($data['password']); // Hash password using MD5

// Use prepared statements to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO account (username, password) VALUES (?, ?)");
if ($stmt === false) {
    echo json_encode(array("success" => false, "message" => "Prepare failed: " . $conn->error));
    exit;
}

// Bind parameters
$success = $stmt->bind_param("ss", $username, $password);
if ($success === false) {
    echo json_encode(array("success" => false, "message" => "Bind parameters failed: " . $stmt->error));
    exit;
}

// Execute the prepared statement
$success = $stmt->execute();
if ($success === false) {
    echo json_encode(array("success" => false, "message" => "Execute failed: " . $stmt->error));
    exit;
}

$inserted_id = $conn->insert_id;
echo json_encode(array("success" => true, "message" => "New record created successfully", "id" => $inserted_id));

// Close the statement and the database connection
$stmt->close();
$conn->close();
?>
