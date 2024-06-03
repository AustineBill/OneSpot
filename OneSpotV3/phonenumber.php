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

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error)));
}

// Decode the JSON data sent from the client
$data = json_decode(file_get_contents('php://input'), true);

// Validate input data
if (!isset($data['newPhoneNumber'])) {
    echo json_encode(array("success" => false, "message" => "Invalid input data"));
    exit;
}

$newPhoneNumber = $data['newPhoneNumber'];

// Perform SQL update to update the phone number
$stmt = $conn->prepare("UPDATE users SET phone_number = ? WHERE username = ? ");

// Bind the parameter
$stmt->bind_param("s", $newPhoneNumber);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(array("success" => true, "message" => "Phone number updated successfully"));
} else {
    echo json_encode(array("success" => false, "message" => "Error updating phone number: " . $stmt->error));
}

// Close the statement
$stmt->close();
?>
