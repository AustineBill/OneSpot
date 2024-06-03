<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = ""; // Ensure there's no space here
$dbname = "onespot_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error));
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['firstName'], $data['lastName'], $data['age'], $data['phoneNumber'], $data['username'], $data['password'])) {
    echo json_encode(array("success" => false, "message" => "Invalid input data"));
    exit;
}

$firstName = $data['firstName'];
$lastName = $data['lastName'];
$age = $data['age'];
$phoneNumber = $data['phoneNumber'];
$username = $data['username'];
$password = $data['password'];

// Hash the password using bcrypt
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Use prepared statements to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO users (firstName, lastName, age, phoneNumber, username, password) VALUES (?, ?, ?, ?, ?, ?)");
if ($stmt === false) {
    echo json_encode(array("success" => false, "message" => "Prepare failed: " . $conn->error));
    exit;
}
$stmt->bind_param("ssisss", $firstName, $lastName, $age, $phoneNumber, $username, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode(array("success" => true, "message" => "New record created successfully"));
} else {
    echo json_encode(array("success" => false, "message" => "Execute failed: " . $stmt->error));
}

$stmt->close();
$conn->close();
?>
