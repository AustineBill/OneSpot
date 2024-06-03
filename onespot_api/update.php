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

if (!isset($data['username'], $data['newPassword'])) {
    echo json_encode(array("success" => false, "message" => "Invalid input data"));
    exit;
}

$username = $data['username'];
$newPassword = $data['newPassword'];

// Hash the new password using bcrypt
$hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

// Use prepared statements to prevent SQL injection
$stmt = $conn->prepare("UPDATE users SET password = ? WHERE username = ?");
if ($stmt === false) {
    echo json_encode(array("success" => false, "message" => "Prepare failed: " . $conn->error));
    exit;
}
$stmt->bind_param("ss", $hashedPassword, $username);

if ($stmt->execute()) {
    echo json_encode(array("success" => true, "message" => "Password updated successfully"));
} else {
    echo json_encode(array("success" => false, "message" => "Execute failed: " . $stmt->error));
}

$stmt->close();
$conn->close();
?>
