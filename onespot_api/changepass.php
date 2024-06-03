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

if (!isset($data['password'], $data['newPassword'])) {
    echo json_encode(array("success" => false, "message" => "Invalid input data"));
    exit;
}

$currentPassword = $data['password'];
$newPassword = $data['newPassword'];

// Fetch all users from the database
$stmt = $conn->prepare("SELECT * FROM users");
if ($stmt === false) {
    echo json_encode(array("success" => false, "message" => "Prepare failed: " . $conn->error));
    exit;
}
$stmt->execute();
$result = $stmt->get_result();
$users = $result->fetch_all(MYSQLI_ASSOC);

// Update password for each user
foreach ($users as $user) {
    // Verify the current password
    if (!password_verify($currentPassword, $user['password'])) {
        echo json_encode(array("success" => false, "message" => "Current password is incorrect"));
        exit;
    }

    // Hash the new password using bcrypt
    $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

    // Update password in database
    $stmt = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
    if ($stmt === false) {
        echo json_encode(array("success" => false, "message" => "Prepare failed: " . $conn->error));
        exit;
    }
    $stmt->bind_param("si", $hashedPassword, $user['id']);
    if (!$stmt->execute()) {
        echo json_encode(array("success" => false, "message" => "Execute failed: " . $stmt->error));
        exit;
    }
}

echo json_encode(array("success" => true, "message" => "Password updated successfully for all users"));
$stmt->close();
$conn->close();
?>
