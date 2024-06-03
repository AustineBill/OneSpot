<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onespot_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error));
    exit();
}

// Get data from the POST request
$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->verificationCode)) {
    echo json_encode(array("success" => false, "message" => "Invalid input"));
    exit();
}

// Extract data from the request
$verificationCode = $conn->real_escape_string($data->verificationCode); 

// Retrieve stored verification code
$stmt = $conn->prepare("SELECT verification_code FROM transactions WHERE verification_code = ?");
$stmt->bind_param("s", $verificationCode);
$stmt->execute();
$stmt->store_result(); // Needed to fetch num_rows

if ($stmt->num_rows > 0) {
    echo json_encode(array("success" => true, "message" => "Verification code matched"));
} else {
    echo json_encode(array("success" => false, "message" => "Verification code does not match"));
}

$stmt->close();
$conn->close();
?>
