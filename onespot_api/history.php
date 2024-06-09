<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "onespot_db"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request and validate
$data = json_decode(file_get_contents("php://input"), true);
$username = isset($data['username']) ? $conn->real_escape_string($data['username']) : null;
$name = isset($data['name']) ? $conn->real_escape_string($data['name']) : null;
$address = isset($data['address']) ? $conn->real_escape_string($data['address']) : null;
$selectedDate = isset($data['selectedDate']) ? $conn->real_escape_string($data['selectedDate']) : null;

// Format the date to the desired format (Y-m-d)
$selectedDate = date('Y-m-d', strtotime($selectedDate));

// Check if all required data is present
if ($username && $name && $address && $selectedDate) {
    // SQL query to insert data into the table using prepared statement
    $stmt = $conn->prepare("INSERT INTO bookings (username, name, address, selectedDate) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $name, $address, $selectedDate);

    if ($stmt->execute()) {
        echo json_encode(["message" => "New record created successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(["error" => "Missing required POST data"]);
}

$conn->close();
?>
