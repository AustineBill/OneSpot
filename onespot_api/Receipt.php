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
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Retrieve POST data
$data = json_decode(file_get_contents("php://input"), true);

file_put_contents('php://stderr', print_r($data, true)); // Log received data

// Validate received data
$requiredFields = ['accountName', 'totalCost', 'location', 'date', 'arrivalTime', 'departureTime', 'totalDuration', 'floor', 'block', 'slotId'];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        echo json_encode(["error" => "Missing required field: $field"]);
        exit;
    }
}

$accountName = $data['accountName'];
$totalCost = floatval($data['totalCost']);
$location = $data['location'];
$date = date('Y-m-d', strtotime($data['date'])); // Convert date to correct format
$arrivalTime = $data['arrivalTime'];
$departureTime = $data['departureTime'];
$totalDuration = intval($data['totalDuration']);
$floor = $data['floor'];
$block = $data['block']; 
$slotId = $data['slotId'];

// Insert data into the database
$sql = "INSERT INTO receipts (account_name, total_cost, location, date, arrival_time, departure_time, total_duration, floor, block, slot_id)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sdssssssss", $accountName, $totalCost, $location, $date, $arrivalTime, $departureTime, $totalDuration, $floor, $block, $slotId);

if ($stmt->execute() === TRUE) {
    echo json_encode(["message" => "New record created successfully"]);
} else {
    echo json_encode(["error" => "Error inserting record: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
