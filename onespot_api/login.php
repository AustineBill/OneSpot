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

if ($conn->connect_error) {
    echo json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error));
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['username'], $data['password'])) {
    echo json_encode(array("success" => false, "message" => "Invalid input data"));
    exit;
}

$username = $data['username'];
$password = $data['password'];

// Use prepared statements to prevent SQL injection
$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
if ($stmt === false) {
    echo json_encode(array("success" => false, "message" => "Prepare failed: " . $conn->error));
    exit;
}
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashedPassword);
    $stmt->fetch();

    if (password_verify($password, $hashedPassword)) {
        echo json_encode(array("success" => true, "message" => "Login successful"));
    } else {
        echo json_encode(array("success" => false, "message" => "Invalid username or password"));
    }
} else {
    echo json_encode(array("success" => false, "message" => "Invalid username or password"));
}

$stmt->close();
$conn->close();
?>
