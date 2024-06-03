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

$name = $_GET['username']; // Assuming you pass the name as a parameter in your HTTP request

// Use prepared statements to prevent SQL injection
$stmt = $conn->prepare("SELECT username FROM users WHERE username = ?");
if ($stmt === false) {
    echo json_encode(array("success" => false, "message" => "Prepare failed: " . $conn->error));
    exit;
}
$stmt->bind_param("s", $name); 
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($username);
    $stmt->fetch();
    echo json_encode(array("success" => true, "username" => $username));
} else {
    echo json_encode(array("success" => false, "message" => "User not found"));
}

$stmt->close();
$conn->close();
?>
